import {
  ProduceMessages,
  ProduceResponse,
  ProduceRequest,
} from './topic_interface';
import { KafkaPixyClient } from './protos/kafka_grpc_pb';
import { ProdRq } from './protos/kafka_pb';
import { credentials, Metadata } from '@grpc/grpc-js';
import { produceService } from './logConfig';
import { metaCallback } from './metaData';

/**
 * Producer writes a message to a kafka topic
 * The request will block until the message is written to all ISR.
 * Therefore the respose will contain the partition and offset of the message.
 * This is used to achive at-least-once deliverability guarantee.
 *
 * @beta
 */
export class Producer implements ProduceMessages {
  address: string;
  topic: string;
  keyValue: string;
  message: any;
  insecure: any;
  client: KafkaPixyClient;
  sessionName: string;
  sessionValue: string;
  combCreds: any;

  /**
   * Creates an instance of producer.
   * @param produceRequest -Produce request
   * @beta
   */
  constructor(produceRequest: ProduceRequest<string, any>) {
    this.insecure = credentials.createInsecure();
    this.topic = produceRequest.topic;
    this.keyValue = produceRequest.keyValue;
    this.message = produceRequest.message;
    this.address = produceRequest.address;
    this.sessionName = produceRequest.sessionName;
    this.sessionValue = produceRequest.sessionValue;
    this.client = new KafkaPixyClient(
      produceRequest.address,
      this.combCreds,
    );
  }

  /**
   * Produces producer
   * @returns produce
   *
   * @beta
   */
  produce(): ProduceResponse | any {
    const produceRequest = new ProdRq();

    const metaCallback = (
      _params: any,
      callback: (arg0: null, arg1: Metadata) => any,
    ) => {
      const meta = new Metadata();
      meta.add(this.sessionName, this.sessionValue);
      callback(null, meta);
    };

    const callCreds =
      credentials.createFromMetadataGenerator(metaCallback);

    this.combCreds = credentials.combineChannelCredentials(
      this.insecure,
      callCreds,
    );

    produceRequest.setTopic(this.topic);
    produceRequest.setKeyValue(this.keyValue);
    produceRequest.setMessage(this.message);

    this.client.produce(produceRequest, (error, response) => {
      if (!error) {
        const partition: number = response.getPartition();
        const offset: number = response.getOffset();
        produceService.info(
          () =>
            `Message written to ${this.topic} kafka topic: Partition ${partition} Offset ${offset}`,
        );
      } else {
        produceService.error(
          `There was a problem while writing to Kafka: ${error}`,
          error,
        );
      }
    });
  }
}
