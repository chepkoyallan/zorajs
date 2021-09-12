export interface ProduceRequest<KeyValue, KeyUnidentified> {
  address: string;
  cluster?: string;
  topic: string;
  keyValue: KeyValue;
  keyUnidentified?: KeyUnidentified;
  message: any;
  asyncMode?: boolean;
  headers?: [RecordHeader];
}

export interface ProduceResponse {
  partition: number;
  offset: number;
}

export interface RecordHeader {
  key: string;
  value: any;
}

export interface ProduceMessages {
  produce(): ProduceResponse;
}

// export interface ProducerInterface extends ProduceMessages{}
