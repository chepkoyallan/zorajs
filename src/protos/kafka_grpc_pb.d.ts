// package: 
// file: kafka.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kafka_pb from "./kafka_pb";

interface IKafkaPixyService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    produce: IKafkaPixyService_IProduce;
    consumeNAck: IKafkaPixyService_IConsumeNAck;
    ack: IKafkaPixyService_IAck;
    getOffsets: IKafkaPixyService_IGetOffsets;
    setOffsets: IKafkaPixyService_ISetOffsets;
    listTopics: IKafkaPixyService_IListTopics;
    listConsumers: IKafkaPixyService_IListConsumers;
    getTopicMetadata: IKafkaPixyService_IGetTopicMetadata;
}

interface IKafkaPixyService_IProduce extends grpc.MethodDefinition<kafka_pb.ProdRq, kafka_pb.ProdRs> {
    path: "/KafkaPixy/Produce";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafka_pb.ProdRq>;
    requestDeserialize: grpc.deserialize<kafka_pb.ProdRq>;
    responseSerialize: grpc.serialize<kafka_pb.ProdRs>;
    responseDeserialize: grpc.deserialize<kafka_pb.ProdRs>;
}
interface IKafkaPixyService_IConsumeNAck extends grpc.MethodDefinition<kafka_pb.ConsNAckRq, kafka_pb.ConsRs> {
    path: "/KafkaPixy/ConsumeNAck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafka_pb.ConsNAckRq>;
    requestDeserialize: grpc.deserialize<kafka_pb.ConsNAckRq>;
    responseSerialize: grpc.serialize<kafka_pb.ConsRs>;
    responseDeserialize: grpc.deserialize<kafka_pb.ConsRs>;
}
interface IKafkaPixyService_IAck extends grpc.MethodDefinition<kafka_pb.AckRq, kafka_pb.AckRs> {
    path: "/KafkaPixy/Ack";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafka_pb.AckRq>;
    requestDeserialize: grpc.deserialize<kafka_pb.AckRq>;
    responseSerialize: grpc.serialize<kafka_pb.AckRs>;
    responseDeserialize: grpc.deserialize<kafka_pb.AckRs>;
}
interface IKafkaPixyService_IGetOffsets extends grpc.MethodDefinition<kafka_pb.GetOffsetsRq, kafka_pb.GetOffsetsRs> {
    path: "/KafkaPixy/GetOffsets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafka_pb.GetOffsetsRq>;
    requestDeserialize: grpc.deserialize<kafka_pb.GetOffsetsRq>;
    responseSerialize: grpc.serialize<kafka_pb.GetOffsetsRs>;
    responseDeserialize: grpc.deserialize<kafka_pb.GetOffsetsRs>;
}
interface IKafkaPixyService_ISetOffsets extends grpc.MethodDefinition<kafka_pb.SetOffsetsRq, kafka_pb.SetOffsetsRs> {
    path: "/KafkaPixy/SetOffsets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafka_pb.SetOffsetsRq>;
    requestDeserialize: grpc.deserialize<kafka_pb.SetOffsetsRq>;
    responseSerialize: grpc.serialize<kafka_pb.SetOffsetsRs>;
    responseDeserialize: grpc.deserialize<kafka_pb.SetOffsetsRs>;
}
interface IKafkaPixyService_IListTopics extends grpc.MethodDefinition<kafka_pb.ListTopicRq, kafka_pb.ListTopicRs> {
    path: "/KafkaPixy/ListTopics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafka_pb.ListTopicRq>;
    requestDeserialize: grpc.deserialize<kafka_pb.ListTopicRq>;
    responseSerialize: grpc.serialize<kafka_pb.ListTopicRs>;
    responseDeserialize: grpc.deserialize<kafka_pb.ListTopicRs>;
}
interface IKafkaPixyService_IListConsumers extends grpc.MethodDefinition<kafka_pb.ListConsumersRq, kafka_pb.ListConsumersRs> {
    path: "/KafkaPixy/ListConsumers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafka_pb.ListConsumersRq>;
    requestDeserialize: grpc.deserialize<kafka_pb.ListConsumersRq>;
    responseSerialize: grpc.serialize<kafka_pb.ListConsumersRs>;
    responseDeserialize: grpc.deserialize<kafka_pb.ListConsumersRs>;
}
interface IKafkaPixyService_IGetTopicMetadata extends grpc.MethodDefinition<kafka_pb.GetTopicMetadataRq, kafka_pb.GetTopicMetadataRs> {
    path: "/KafkaPixy/GetTopicMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafka_pb.GetTopicMetadataRq>;
    requestDeserialize: grpc.deserialize<kafka_pb.GetTopicMetadataRq>;
    responseSerialize: grpc.serialize<kafka_pb.GetTopicMetadataRs>;
    responseDeserialize: grpc.deserialize<kafka_pb.GetTopicMetadataRs>;
}

export const KafkaPixyService: IKafkaPixyService;

export interface IKafkaPixyServer {
    produce: grpc.handleUnaryCall<kafka_pb.ProdRq, kafka_pb.ProdRs>;
    consumeNAck: grpc.handleUnaryCall<kafka_pb.ConsNAckRq, kafka_pb.ConsRs>;
    ack: grpc.handleUnaryCall<kafka_pb.AckRq, kafka_pb.AckRs>;
    getOffsets: grpc.handleUnaryCall<kafka_pb.GetOffsetsRq, kafka_pb.GetOffsetsRs>;
    setOffsets: grpc.handleUnaryCall<kafka_pb.SetOffsetsRq, kafka_pb.SetOffsetsRs>;
    listTopics: grpc.handleUnaryCall<kafka_pb.ListTopicRq, kafka_pb.ListTopicRs>;
    listConsumers: grpc.handleUnaryCall<kafka_pb.ListConsumersRq, kafka_pb.ListConsumersRs>;
    getTopicMetadata: grpc.handleUnaryCall<kafka_pb.GetTopicMetadataRq, kafka_pb.GetTopicMetadataRs>;
}

export interface IKafkaPixyClient {
    produce(request: kafka_pb.ProdRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.ProdRs) => void): grpc.ClientUnaryCall;
    produce(request: kafka_pb.ProdRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.ProdRs) => void): grpc.ClientUnaryCall;
    produce(request: kafka_pb.ProdRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.ProdRs) => void): grpc.ClientUnaryCall;
    consumeNAck(request: kafka_pb.ConsNAckRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.ConsRs) => void): grpc.ClientUnaryCall;
    consumeNAck(request: kafka_pb.ConsNAckRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.ConsRs) => void): grpc.ClientUnaryCall;
    consumeNAck(request: kafka_pb.ConsNAckRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.ConsRs) => void): grpc.ClientUnaryCall;
    ack(request: kafka_pb.AckRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.AckRs) => void): grpc.ClientUnaryCall;
    ack(request: kafka_pb.AckRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.AckRs) => void): grpc.ClientUnaryCall;
    ack(request: kafka_pb.AckRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.AckRs) => void): grpc.ClientUnaryCall;
    getOffsets(request: kafka_pb.GetOffsetsRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    getOffsets(request: kafka_pb.GetOffsetsRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    getOffsets(request: kafka_pb.GetOffsetsRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    setOffsets(request: kafka_pb.SetOffsetsRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    setOffsets(request: kafka_pb.SetOffsetsRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    setOffsets(request: kafka_pb.SetOffsetsRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    listTopics(request: kafka_pb.ListTopicRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    listTopics(request: kafka_pb.ListTopicRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    listTopics(request: kafka_pb.ListTopicRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    listConsumers(request: kafka_pb.ListConsumersRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    listConsumers(request: kafka_pb.ListConsumersRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    listConsumers(request: kafka_pb.ListConsumersRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    getTopicMetadata(request: kafka_pb.GetTopicMetadataRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
    getTopicMetadata(request: kafka_pb.GetTopicMetadataRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
    getTopicMetadata(request: kafka_pb.GetTopicMetadataRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
}

export class KafkaPixyClient extends grpc.Client implements IKafkaPixyClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public produce(request: kafka_pb.ProdRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.ProdRs) => void): grpc.ClientUnaryCall;
    public produce(request: kafka_pb.ProdRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.ProdRs) => void): grpc.ClientUnaryCall;
    public produce(request: kafka_pb.ProdRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.ProdRs) => void): grpc.ClientUnaryCall;
    public consumeNAck(request: kafka_pb.ConsNAckRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.ConsRs) => void): grpc.ClientUnaryCall;
    public consumeNAck(request: kafka_pb.ConsNAckRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.ConsRs) => void): grpc.ClientUnaryCall;
    public consumeNAck(request: kafka_pb.ConsNAckRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.ConsRs) => void): grpc.ClientUnaryCall;
    public ack(request: kafka_pb.AckRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.AckRs) => void): grpc.ClientUnaryCall;
    public ack(request: kafka_pb.AckRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.AckRs) => void): grpc.ClientUnaryCall;
    public ack(request: kafka_pb.AckRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.AckRs) => void): grpc.ClientUnaryCall;
    public getOffsets(request: kafka_pb.GetOffsetsRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    public getOffsets(request: kafka_pb.GetOffsetsRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    public getOffsets(request: kafka_pb.GetOffsetsRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    public setOffsets(request: kafka_pb.SetOffsetsRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    public setOffsets(request: kafka_pb.SetOffsetsRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    public setOffsets(request: kafka_pb.SetOffsetsRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    public listTopics(request: kafka_pb.ListTopicRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    public listTopics(request: kafka_pb.ListTopicRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    public listTopics(request: kafka_pb.ListTopicRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    public listConsumers(request: kafka_pb.ListConsumersRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    public listConsumers(request: kafka_pb.ListConsumersRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    public listConsumers(request: kafka_pb.ListConsumersRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    public getTopicMetadata(request: kafka_pb.GetTopicMetadataRq, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
    public getTopicMetadata(request: kafka_pb.GetTopicMetadataRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
    public getTopicMetadata(request: kafka_pb.GetTopicMetadataRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafka_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
}
