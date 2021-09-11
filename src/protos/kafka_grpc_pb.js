// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var kafka_pb = require('./kafka_pb.js');

function serialize_AckRq(arg) {
  if (!(arg instanceof kafka_pb.AckRq)) {
    throw new Error('Expected argument of type AckRq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AckRq(buffer_arg) {
  return kafka_pb.AckRq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AckRs(arg) {
  if (!(arg instanceof kafka_pb.AckRs)) {
    throw new Error('Expected argument of type AckRs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AckRs(buffer_arg) {
  return kafka_pb.AckRs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConsNAckRq(arg) {
  if (!(arg instanceof kafka_pb.ConsNAckRq)) {
    throw new Error('Expected argument of type ConsNAckRq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ConsNAckRq(buffer_arg) {
  return kafka_pb.ConsNAckRq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConsRs(arg) {
  if (!(arg instanceof kafka_pb.ConsRs)) {
    throw new Error('Expected argument of type ConsRs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ConsRs(buffer_arg) {
  return kafka_pb.ConsRs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetOffsetsRq(arg) {
  if (!(arg instanceof kafka_pb.GetOffsetsRq)) {
    throw new Error('Expected argument of type GetOffsetsRq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetOffsetsRq(buffer_arg) {
  return kafka_pb.GetOffsetsRq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetOffsetsRs(arg) {
  if (!(arg instanceof kafka_pb.GetOffsetsRs)) {
    throw new Error('Expected argument of type GetOffsetsRs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetOffsetsRs(buffer_arg) {
  return kafka_pb.GetOffsetsRs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTopicMetadataRq(arg) {
  if (!(arg instanceof kafka_pb.GetTopicMetadataRq)) {
    throw new Error('Expected argument of type GetTopicMetadataRq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTopicMetadataRq(buffer_arg) {
  return kafka_pb.GetTopicMetadataRq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTopicMetadataRs(arg) {
  if (!(arg instanceof kafka_pb.GetTopicMetadataRs)) {
    throw new Error('Expected argument of type GetTopicMetadataRs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTopicMetadataRs(buffer_arg) {
  return kafka_pb.GetTopicMetadataRs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListConsumersRq(arg) {
  if (!(arg instanceof kafka_pb.ListConsumersRq)) {
    throw new Error('Expected argument of type ListConsumersRq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListConsumersRq(buffer_arg) {
  return kafka_pb.ListConsumersRq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListConsumersRs(arg) {
  if (!(arg instanceof kafka_pb.ListConsumersRs)) {
    throw new Error('Expected argument of type ListConsumersRs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListConsumersRs(buffer_arg) {
  return kafka_pb.ListConsumersRs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListTopicRq(arg) {
  if (!(arg instanceof kafka_pb.ListTopicRq)) {
    throw new Error('Expected argument of type ListTopicRq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListTopicRq(buffer_arg) {
  return kafka_pb.ListTopicRq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListTopicRs(arg) {
  if (!(arg instanceof kafka_pb.ListTopicRs)) {
    throw new Error('Expected argument of type ListTopicRs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListTopicRs(buffer_arg) {
  return kafka_pb.ListTopicRs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProdRq(arg) {
  if (!(arg instanceof kafka_pb.ProdRq)) {
    throw new Error('Expected argument of type ProdRq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProdRq(buffer_arg) {
  return kafka_pb.ProdRq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProdRs(arg) {
  if (!(arg instanceof kafka_pb.ProdRs)) {
    throw new Error('Expected argument of type ProdRs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProdRs(buffer_arg) {
  return kafka_pb.ProdRs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetOffsetsRq(arg) {
  if (!(arg instanceof kafka_pb.SetOffsetsRq)) {
    throw new Error('Expected argument of type SetOffsetsRq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetOffsetsRq(buffer_arg) {
  return kafka_pb.SetOffsetsRq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetOffsetsRs(arg) {
  if (!(arg instanceof kafka_pb.SetOffsetsRs)) {
    throw new Error('Expected argument of type SetOffsetsRs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetOffsetsRs(buffer_arg) {
  return kafka_pb.SetOffsetsRs.deserializeBinary(new Uint8Array(buffer_arg));
}


var KafkaPixyService = exports.KafkaPixyService = {
  // Produce writes a message to a Kafka topic.
//
// If ProdReq.async_mode is false (default value) then the request will
// block until the message is written to all ISR. In this case the respose
// will contain the partition and offset of the message. This has to be
// used to achive at-least-once deliverability guarantee.
// If ProdReq.async_mode is true, then Kafka-Pixy returns immediately after
// it gets the request and performs write on the backgroud. This mode
// ensures highest throughput but messages can be lost, e.g. if the host
// crashes before Kafka-Pixy has a chance to complete write.
//
// Hash of ProdReq.key_value is used to determine a partition that the
// message should be written to. If you want a message to go to an random
// partition then set ProdReq.key_undefined to true. Note that if both
// ProdReq.key_undefined and ProdReq.key_value are left default, which is
// empty string and false respectively, then messages will be consitently
// written to a partiticular partition selected by the hash of an empty
// string.
//
// gRPC error codes:
//  * Invalid Argument (3): see the status description for details;
//  * Internal (13): see the status description and logs for details;
//  * Unavailable (14): the service is shutting down.
produce: {
    path: '/KafkaPixy/Produce',
    requestStream: false,
    responseStream: false,
    requestType: kafka_pb.ProdRq,
    responseType: kafka_pb.ProdRs,
    requestSerialize: serialize_ProdRq,
    requestDeserialize: deserialize_ProdRq,
    responseSerialize: serialize_ProdRs,
    responseDeserialize: deserialize_ProdRs,
  },
  // Consume reads a message from a topic and optionally acknowledges a
// message previously consumed from the same topic.
//
// Requests are performed in long polling fation, that is if all available
// messages have been consumed then the request will block for
// config.yaml:proxies.<cluster>.consumer.long_polling_timeout waiting for
// new messages. If no new messages is produced while waiting the request
// will return gRPC error with 408 status code.
//
// To consume the first message set ConsNAckReq.no_ack to true, since there
// is no message to acknowledge at this point. In the second and all
// subsequent calls of the method set ConsNAckReq.ack_partition and
// ConsNAckReq.ack_offset to the respective values of ConsRes returned by
// the previous method call. To acknowledge the last consumed message before
// teminating the application call Ack method.
//
// If a message is not acknowledged within
// config.yaml:proxies.<cluster>.consumer.ack_timeout the it will be returned
// by Kafka-Pixy in ConsRes again possibly to another application.
//
// If at-least-once delivery guarantee and retries are not desirable, then
// you can set ConsNAckReq.auto_ack to true and Kafka-Pixy will acknowledge
// messages automatically before returning them in ConsRes.
//
// gRPC error codes:
//  * Not Found (5): It just means that all message has been consumed and
//    the long polling timeout has elaspsed. Just keep calling this method
//    in a loop;
//  * Resource Exhausted (8): too many consume requests. Either reduce the
//    number of consuming threads or increase
//    config.yaml:proxies.<cluster>.consumer.channel_buffer_size;
//  * Invalid Argument (3): see the status description for details;
//  * Internal (13): see the status description and logs for details;
//  * Unavailable (14): the service is shutting down.
consumeNAck: {
    path: '/KafkaPixy/ConsumeNAck',
    requestStream: false,
    responseStream: false,
    requestType: kafka_pb.ConsNAckRq,
    responseType: kafka_pb.ConsRs,
    requestSerialize: serialize_ConsNAckRq,
    requestDeserialize: deserialize_ConsNAckRq,
    responseSerialize: serialize_ConsRs,
    responseDeserialize: deserialize_ConsRs,
  },
  // Ack acknowledges a message earlier consumed from a topic.
//
// This method is provided solely to acknowledge the last consumed message
// before the application terminates. In all other cases ConsumeNAck should
// be used.
//
// gRPC error codes:
//  * Invalid Argument (3): see the status description for details;
//  * Internal (13): see the status description and logs for details;
ack: {
    path: '/KafkaPixy/Ack',
    requestStream: false,
    responseStream: false,
    requestType: kafka_pb.AckRq,
    responseType: kafka_pb.AckRs,
    requestSerialize: serialize_AckRq,
    requestDeserialize: deserialize_AckRq,
    responseSerialize: serialize_AckRs,
    responseDeserialize: deserialize_AckRs,
  },
  // Fetches partition offsets for the specified topic and group
//
// gRPC error codes:
//  * Invalid Argument (3): If unable to find the cluster named in the request
//  * Internal (13): If Kafka returns an error on offset request
//  * NotFound (5): If the group and or topic does not exist
getOffsets: {
    path: '/KafkaPixy/GetOffsets',
    requestStream: false,
    responseStream: false,
    requestType: kafka_pb.GetOffsetsRq,
    responseType: kafka_pb.GetOffsetsRs,
    requestSerialize: serialize_GetOffsetsRq,
    requestDeserialize: deserialize_GetOffsetsRq,
    responseSerialize: serialize_GetOffsetsRs,
    responseDeserialize: deserialize_GetOffsetsRs,
  },
  // Sets partition offsets for the specified topic and group.
// NOTE: Although the request accepts the PartitionOffset object i
// only 'Partition', 'Offset' and 'Metadata' are set by this method
//
// gRPC error codes:
//  * Invalid Argument (3): If unable to find the cluster named in the request
//  * Internal (13): If Kafka returns an error on offset request
//  * NotFound (5): If the group and or topic does not exist
setOffsets: {
    path: '/KafkaPixy/SetOffsets',
    requestStream: false,
    responseStream: false,
    requestType: kafka_pb.SetOffsetsRq,
    responseType: kafka_pb.SetOffsetsRs,
    requestSerialize: serialize_SetOffsetsRq,
    requestDeserialize: deserialize_SetOffsetsRq,
    responseSerialize: serialize_SetOffsetsRs,
    responseDeserialize: deserialize_SetOffsetsRs,
  },
  // Lists all topics and metadata with optional metadata for the partitions of the topic
//
// gRPC error codes:
//  * Invalid Argument (3): If unable to find the cluster named in the request
//  * Internal (13): If Kafka returns an error on request
listTopics: {
    path: '/KafkaPixy/ListTopics',
    requestStream: false,
    responseStream: false,
    requestType: kafka_pb.ListTopicRq,
    responseType: kafka_pb.ListTopicRs,
    requestSerialize: serialize_ListTopicRq,
    requestDeserialize: deserialize_ListTopicRq,
    responseSerialize: serialize_ListTopicRs,
    responseDeserialize: deserialize_ListTopicRs,
  },
  // Lists all consumers of a topic
//
// gRPC error codes:
//  * Invalid Argument (3): If unable to find the cluster named in the request
//  * Internal (13): If Kafka returns an error on request
listConsumers: {
    path: '/KafkaPixy/ListConsumers',
    requestStream: false,
    responseStream: false,
    requestType: kafka_pb.ListConsumersRq,
    responseType: kafka_pb.ListConsumersRs,
    requestSerialize: serialize_ListConsumersRq,
    requestDeserialize: deserialize_ListConsumersRq,
    responseSerialize: serialize_ListConsumersRs,
    responseDeserialize: deserialize_ListConsumersRs,
  },
  // Fetches topic metadata and optional metadata for the partitions of the topic
//
// gRPC error codes:
//  * Invalid Argument (3): If unable to find the cluster named in the request
//  * Internal (13): If Kafka returns an error on request
//  * NotFound (5): If the topic does not exist
getTopicMetadata: {
    path: '/KafkaPixy/GetTopicMetadata',
    requestStream: false,
    responseStream: false,
    requestType: kafka_pb.GetTopicMetadataRq,
    responseType: kafka_pb.GetTopicMetadataRs,
    requestSerialize: serialize_GetTopicMetadataRq,
    requestDeserialize: deserialize_GetTopicMetadataRq,
    responseSerialize: serialize_GetTopicMetadataRs,
    responseDeserialize: deserialize_GetTopicMetadataRs,
  },
};

exports.KafkaPixyClient = grpc.makeGenericClientConstructor(KafkaPixyService);
