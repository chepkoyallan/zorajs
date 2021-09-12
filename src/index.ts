import {
  ProduceMessages,
  ProduceResponse,
  ProduceRequest,
} from './topic_interface';
import { KafkaPixyClient } from './protos/kafka_grpc_pb';
import { ProdRq } from './protos/kafka_pb';
import { credentials } from '@grpc/grpc-js';
import { produceService } from './logConfig';

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
  }

  /**
   * Produces producer
   * @returns produce
   * 
   * @beta
   */
  produce(): ProduceResponse | any {
    const client = new KafkaPixyClient(this.address, this.insecure);
    const produceRequest = new ProdRq();
    produceRequest.setTopic(this.topic);
    produceRequest.setKeyValue(this.keyValue);
    produceRequest.setMessage(this.message);

    client.produce(produceRequest, (error, response) => {
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
