
/**
 * Produce request
 * @template KeyValue 
 * @template KeyUnidentified 
 */
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

/**
 * Produce response
 */
export interface ProduceResponse {
  partition: number;
  offset: number;
}

/**
 * Record header
 */
export interface RecordHeader {
  key: string;
  value: any;
}

/**
 * Produce messages
 */
export interface ProduceMessages {
  produce(): ProduceResponse;
}

// export interface ProducerInterface extends ProduceMessages{}
