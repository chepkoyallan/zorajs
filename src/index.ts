import {
  ProduceMessages,
  ProduceResponse,
  ProduceRequest,
} from './topic_interface';
import { KafkaPixyClient } from './protos/kafka_grpc_pb';
import { ProdRq } from './protos/kafka_pb';
import { credentials } from '@grpc/grpc-js';
import { produceService} from './logConfig';

export class Producer implements ProduceMessages {
  address: string;
  topic: string;
  keyValue: string;
  message: any;
  insecure: any;

  constructor(produceRequest: ProduceRequest<string, any>) {
    this.insecure = credentials.createInsecure();
    this.topic = produceRequest.topic;
    this.keyValue = produceRequest.keyValue;
    this.message = produceRequest.message;
    this.address = produceRequest.address;
  }

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
        // console.log(error);
        produceService.error(`There was a problem while writing to Kafka: ${error}`, error);
      }
    });
  }
}
