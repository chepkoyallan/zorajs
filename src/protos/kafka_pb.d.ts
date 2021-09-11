// package: 
// file: kafka.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RecordHeader extends jspb.Message { 
    getKey(): string;
    setKey(value: string): RecordHeader;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): RecordHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordHeader.AsObject;
    static toObject(includeInstance: boolean, msg: RecordHeader): RecordHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordHeader;
    static deserializeBinaryFromReader(message: RecordHeader, reader: jspb.BinaryReader): RecordHeader;
}

export namespace RecordHeader {
    export type AsObject = {
        key: string,
        value: Uint8Array | string,
    }
}

export class ProdRq extends jspb.Message { 
    getCluster(): string;
    setCluster(value: string): ProdRq;
    getTopic(): string;
    setTopic(value: string): ProdRq;
    getKeyValue(): Uint8Array | string;
    getKeyValue_asU8(): Uint8Array;
    getKeyValue_asB64(): string;
    setKeyValue(value: Uint8Array | string): ProdRq;
    getKeyUndefined(): boolean;
    setKeyUndefined(value: boolean): ProdRq;
    getMessage(): Uint8Array | string;
    getMessage_asU8(): Uint8Array;
    getMessage_asB64(): string;
    setMessage(value: Uint8Array | string): ProdRq;
    getAsyncMode(): boolean;
    setAsyncMode(value: boolean): ProdRq;
    clearHeadersList(): void;
    getHeadersList(): Array<RecordHeader>;
    setHeadersList(value: Array<RecordHeader>): ProdRq;
    addHeaders(value?: RecordHeader, index?: number): RecordHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProdRq.AsObject;
    static toObject(includeInstance: boolean, msg: ProdRq): ProdRq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProdRq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProdRq;
    static deserializeBinaryFromReader(message: ProdRq, reader: jspb.BinaryReader): ProdRq;
}

export namespace ProdRq {
    export type AsObject = {
        cluster: string,
        topic: string,
        keyValue: Uint8Array | string,
        keyUndefined: boolean,
        message: Uint8Array | string,
        asyncMode: boolean,
        headersList: Array<RecordHeader.AsObject>,
    }
}

export class ProdRs extends jspb.Message { 
    getPartition(): number;
    setPartition(value: number): ProdRs;
    getOffset(): number;
    setOffset(value: number): ProdRs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProdRs.AsObject;
    static toObject(includeInstance: boolean, msg: ProdRs): ProdRs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProdRs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProdRs;
    static deserializeBinaryFromReader(message: ProdRs, reader: jspb.BinaryReader): ProdRs;
}

export namespace ProdRs {
    export type AsObject = {
        partition: number,
        offset: number,
    }
}

export class ConsNAckRq extends jspb.Message { 
    getCluster(): string;
    setCluster(value: string): ConsNAckRq;
    getTopic(): string;
    setTopic(value: string): ConsNAckRq;
    getGroup(): string;
    setGroup(value: string): ConsNAckRq;
    getNoAck(): boolean;
    setNoAck(value: boolean): ConsNAckRq;
    getAutoAck(): boolean;
    setAutoAck(value: boolean): ConsNAckRq;
    getAckPartition(): number;
    setAckPartition(value: number): ConsNAckRq;
    getAckOffset(): number;
    setAckOffset(value: number): ConsNAckRq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsNAckRq.AsObject;
    static toObject(includeInstance: boolean, msg: ConsNAckRq): ConsNAckRq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsNAckRq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsNAckRq;
    static deserializeBinaryFromReader(message: ConsNAckRq, reader: jspb.BinaryReader): ConsNAckRq;
}

export namespace ConsNAckRq {
    export type AsObject = {
        cluster: string,
        topic: string,
        group: string,
        noAck: boolean,
        autoAck: boolean,
        ackPartition: number,
        ackOffset: number,
    }
}

export class ConsRs extends jspb.Message { 
    getPartition(): number;
    setPartition(value: number): ConsRs;
    getOffset(): number;
    setOffset(value: number): ConsRs;
    getKeyValue(): Uint8Array | string;
    getKeyValue_asU8(): Uint8Array;
    getKeyValue_asB64(): string;
    setKeyValue(value: Uint8Array | string): ConsRs;
    getKeyUndefined(): boolean;
    setKeyUndefined(value: boolean): ConsRs;
    getMessage(): Uint8Array | string;
    getMessage_asU8(): Uint8Array;
    getMessage_asB64(): string;
    setMessage(value: Uint8Array | string): ConsRs;
    clearHeadersList(): void;
    getHeadersList(): Array<RecordHeader>;
    setHeadersList(value: Array<RecordHeader>): ConsRs;
    addHeaders(value?: RecordHeader, index?: number): RecordHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsRs.AsObject;
    static toObject(includeInstance: boolean, msg: ConsRs): ConsRs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsRs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsRs;
    static deserializeBinaryFromReader(message: ConsRs, reader: jspb.BinaryReader): ConsRs;
}

export namespace ConsRs {
    export type AsObject = {
        partition: number,
        offset: number,
        keyValue: Uint8Array | string,
        keyUndefined: boolean,
        message: Uint8Array | string,
        headersList: Array<RecordHeader.AsObject>,
    }
}

export class AckRq extends jspb.Message { 
    getCluster(): string;
    setCluster(value: string): AckRq;
    getTopic(): string;
    setTopic(value: string): AckRq;
    getGroup(): string;
    setGroup(value: string): AckRq;
    getPartition(): number;
    setPartition(value: number): AckRq;
    getOffset(): number;
    setOffset(value: number): AckRq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AckRq.AsObject;
    static toObject(includeInstance: boolean, msg: AckRq): AckRq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AckRq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AckRq;
    static deserializeBinaryFromReader(message: AckRq, reader: jspb.BinaryReader): AckRq;
}

export namespace AckRq {
    export type AsObject = {
        cluster: string,
        topic: string,
        group: string,
        partition: number,
        offset: number,
    }
}

export class AckRs extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AckRs.AsObject;
    static toObject(includeInstance: boolean, msg: AckRs): AckRs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AckRs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AckRs;
    static deserializeBinaryFromReader(message: AckRs, reader: jspb.BinaryReader): AckRs;
}

export namespace AckRs {
    export type AsObject = {
    }
}

export class PartitionOffset extends jspb.Message { 
    getPartition(): number;
    setPartition(value: number): PartitionOffset;
    getBegin(): number;
    setBegin(value: number): PartitionOffset;
    getEnd(): number;
    setEnd(value: number): PartitionOffset;
    getCount(): number;
    setCount(value: number): PartitionOffset;
    getOffset(): number;
    setOffset(value: number): PartitionOffset;
    getLag(): number;
    setLag(value: number): PartitionOffset;
    getMetadata(): string;
    setMetadata(value: string): PartitionOffset;
    getSparseAcks(): string;
    setSparseAcks(value: string): PartitionOffset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartitionOffset.AsObject;
    static toObject(includeInstance: boolean, msg: PartitionOffset): PartitionOffset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartitionOffset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartitionOffset;
    static deserializeBinaryFromReader(message: PartitionOffset, reader: jspb.BinaryReader): PartitionOffset;
}

export namespace PartitionOffset {
    export type AsObject = {
        partition: number,
        begin: number,
        end: number,
        count: number,
        offset: number,
        lag: number,
        metadata: string,
        sparseAcks: string,
    }
}

export class GetOffsetsRq extends jspb.Message { 
    getCluster(): string;
    setCluster(value: string): GetOffsetsRq;
    getTopic(): string;
    setTopic(value: string): GetOffsetsRq;
    getGroup(): string;
    setGroup(value: string): GetOffsetsRq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOffsetsRq.AsObject;
    static toObject(includeInstance: boolean, msg: GetOffsetsRq): GetOffsetsRq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOffsetsRq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOffsetsRq;
    static deserializeBinaryFromReader(message: GetOffsetsRq, reader: jspb.BinaryReader): GetOffsetsRq;
}

export namespace GetOffsetsRq {
    export type AsObject = {
        cluster: string,
        topic: string,
        group: string,
    }
}

export class GetOffsetsRs extends jspb.Message { 
    clearOffsetsList(): void;
    getOffsetsList(): Array<PartitionOffset>;
    setOffsetsList(value: Array<PartitionOffset>): GetOffsetsRs;
    addOffsets(value?: PartitionOffset, index?: number): PartitionOffset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOffsetsRs.AsObject;
    static toObject(includeInstance: boolean, msg: GetOffsetsRs): GetOffsetsRs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOffsetsRs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOffsetsRs;
    static deserializeBinaryFromReader(message: GetOffsetsRs, reader: jspb.BinaryReader): GetOffsetsRs;
}

export namespace GetOffsetsRs {
    export type AsObject = {
        offsetsList: Array<PartitionOffset.AsObject>,
    }
}

export class PartitionMetadata extends jspb.Message { 
    getPartition(): number;
    setPartition(value: number): PartitionMetadata;
    getLeader(): number;
    setLeader(value: number): PartitionMetadata;
    clearReplicasList(): void;
    getReplicasList(): Array<number>;
    setReplicasList(value: Array<number>): PartitionMetadata;
    addReplicas(value: number, index?: number): number;
    clearIsrList(): void;
    getIsrList(): Array<number>;
    setIsrList(value: Array<number>): PartitionMetadata;
    addIsr(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartitionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: PartitionMetadata): PartitionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartitionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartitionMetadata;
    static deserializeBinaryFromReader(message: PartitionMetadata, reader: jspb.BinaryReader): PartitionMetadata;
}

export namespace PartitionMetadata {
    export type AsObject = {
        partition: number,
        leader: number,
        replicasList: Array<number>,
        isrList: Array<number>,
    }
}

export class GetTopicMetadataRq extends jspb.Message { 
    getCluster(): string;
    setCluster(value: string): GetTopicMetadataRq;
    getTopic(): string;
    setTopic(value: string): GetTopicMetadataRq;
    getWithPartitions(): boolean;
    setWithPartitions(value: boolean): GetTopicMetadataRq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicMetadataRq.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicMetadataRq): GetTopicMetadataRq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicMetadataRq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicMetadataRq;
    static deserializeBinaryFromReader(message: GetTopicMetadataRq, reader: jspb.BinaryReader): GetTopicMetadataRq;
}

export namespace GetTopicMetadataRq {
    export type AsObject = {
        cluster: string,
        topic: string,
        withPartitions: boolean,
    }
}

export class GetTopicMetadataRs extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): GetTopicMetadataRs;

    getConfigMap(): jspb.Map<string, string>;
    clearConfigMap(): void;
    clearPartitionsList(): void;
    getPartitionsList(): Array<PartitionMetadata>;
    setPartitionsList(value: Array<PartitionMetadata>): GetTopicMetadataRs;
    addPartitions(value?: PartitionMetadata, index?: number): PartitionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicMetadataRs.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicMetadataRs): GetTopicMetadataRs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicMetadataRs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicMetadataRs;
    static deserializeBinaryFromReader(message: GetTopicMetadataRs, reader: jspb.BinaryReader): GetTopicMetadataRs;
}

export namespace GetTopicMetadataRs {
    export type AsObject = {
        version: number,

        configMap: Array<[string, string]>,
        partitionsList: Array<PartitionMetadata.AsObject>,
    }
}

export class ListTopicRs extends jspb.Message { 

    getTopicsMap(): jspb.Map<string, GetTopicMetadataRs>;
    clearTopicsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTopicRs.AsObject;
    static toObject(includeInstance: boolean, msg: ListTopicRs): ListTopicRs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTopicRs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTopicRs;
    static deserializeBinaryFromReader(message: ListTopicRs, reader: jspb.BinaryReader): ListTopicRs;
}

export namespace ListTopicRs {
    export type AsObject = {

        topicsMap: Array<[string, GetTopicMetadataRs.AsObject]>,
    }
}

export class ListTopicRq extends jspb.Message { 
    getCluster(): string;
    setCluster(value: string): ListTopicRq;
    getWithPartitions(): boolean;
    setWithPartitions(value: boolean): ListTopicRq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTopicRq.AsObject;
    static toObject(includeInstance: boolean, msg: ListTopicRq): ListTopicRq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTopicRq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTopicRq;
    static deserializeBinaryFromReader(message: ListTopicRq, reader: jspb.BinaryReader): ListTopicRq;
}

export namespace ListTopicRq {
    export type AsObject = {
        cluster: string,
        withPartitions: boolean,
    }
}

export class ListConsumersRq extends jspb.Message { 
    getCluster(): string;
    setCluster(value: string): ListConsumersRq;
    getTopic(): string;
    setTopic(value: string): ListConsumersRq;
    getGroup(): string;
    setGroup(value: string): ListConsumersRq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConsumersRq.AsObject;
    static toObject(includeInstance: boolean, msg: ListConsumersRq): ListConsumersRq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConsumersRq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConsumersRq;
    static deserializeBinaryFromReader(message: ListConsumersRq, reader: jspb.BinaryReader): ListConsumersRq;
}

export namespace ListConsumersRq {
    export type AsObject = {
        cluster: string,
        topic: string,
        group: string,
    }
}

export class ConsumerPartitions extends jspb.Message { 
    clearPartitionsList(): void;
    getPartitionsList(): Array<number>;
    setPartitionsList(value: Array<number>): ConsumerPartitions;
    addPartitions(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsumerPartitions.AsObject;
    static toObject(includeInstance: boolean, msg: ConsumerPartitions): ConsumerPartitions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsumerPartitions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsumerPartitions;
    static deserializeBinaryFromReader(message: ConsumerPartitions, reader: jspb.BinaryReader): ConsumerPartitions;
}

export namespace ConsumerPartitions {
    export type AsObject = {
        partitionsList: Array<number>,
    }
}

export class ConsumerGroups extends jspb.Message { 

    getConsumersMap(): jspb.Map<string, ConsumerPartitions>;
    clearConsumersMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsumerGroups.AsObject;
    static toObject(includeInstance: boolean, msg: ConsumerGroups): ConsumerGroups.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsumerGroups, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsumerGroups;
    static deserializeBinaryFromReader(message: ConsumerGroups, reader: jspb.BinaryReader): ConsumerGroups;
}

export namespace ConsumerGroups {
    export type AsObject = {

        consumersMap: Array<[string, ConsumerPartitions.AsObject]>,
    }
}

export class ListConsumersRs extends jspb.Message { 

    getGroupsMap(): jspb.Map<string, ConsumerGroups>;
    clearGroupsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConsumersRs.AsObject;
    static toObject(includeInstance: boolean, msg: ListConsumersRs): ListConsumersRs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConsumersRs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConsumersRs;
    static deserializeBinaryFromReader(message: ListConsumersRs, reader: jspb.BinaryReader): ListConsumersRs;
}

export namespace ListConsumersRs {
    export type AsObject = {

        groupsMap: Array<[string, ConsumerGroups.AsObject]>,
    }
}

export class SetOffsetsRq extends jspb.Message { 
    getCluster(): string;
    setCluster(value: string): SetOffsetsRq;
    getTopic(): string;
    setTopic(value: string): SetOffsetsRq;
    getGroup(): string;
    setGroup(value: string): SetOffsetsRq;
    clearOffsetsList(): void;
    getOffsetsList(): Array<PartitionOffset>;
    setOffsetsList(value: Array<PartitionOffset>): SetOffsetsRq;
    addOffsets(value?: PartitionOffset, index?: number): PartitionOffset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOffsetsRq.AsObject;
    static toObject(includeInstance: boolean, msg: SetOffsetsRq): SetOffsetsRq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOffsetsRq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOffsetsRq;
    static deserializeBinaryFromReader(message: SetOffsetsRq, reader: jspb.BinaryReader): SetOffsetsRq;
}

export namespace SetOffsetsRq {
    export type AsObject = {
        cluster: string,
        topic: string,
        group: string,
        offsetsList: Array<PartitionOffset.AsObject>,
    }
}

export class SetOffsetsRs extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOffsetsRs.AsObject;
    static toObject(includeInstance: boolean, msg: SetOffsetsRs): SetOffsetsRs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOffsetsRs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOffsetsRs;
    static deserializeBinaryFromReader(message: SetOffsetsRs, reader: jspb.BinaryReader): SetOffsetsRs;
}

export namespace SetOffsetsRs {
    export type AsObject = {
    }
}
