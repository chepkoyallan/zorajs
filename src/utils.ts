import { KafkaPixyClient } from "../src/protos/kafka_grpc_pb";
import { credentials } from "@grpc/grpc-js";

const port = 19091;

export const client = new KafkaPixyClient(
    `localhost:${port}`,
    credentials.createInsecure()
)

