import { KafkaPixyClient } from './protos/kafka_grpc_pb'
import {ProdRq, ConsNAckRq, AckRq} from './protos/kafka_pb'
import { credentials } from '@grpc/grpc-js'

// const client = new KafkaPixyClient(`localhost:9000`, credentials.createInsecure())


export class StreamingClient {
    insecureZoraClient: KafkaPixyClient;
    secureZoraClient: KafkaPixyClient;
    insecure: any;
    secure: any;
    rootCertificate: any;
    privateKey: any;
    certificateChain: any;
    verifyOptions: any;
    prodRequest: any;
    
    constructor(public address: string, public topic: string, public key: string, public message: string) {
        this.insecure = credentials.createInsecure()
        this.secure = credentials.createSsl(this.rootCertificate,this.privateKey, this.certificateChain,this.verifyOptions)
        this.insecureZoraClient = new KafkaPixyClient(address, this.insecure)
        this.secureZoraClient = new KafkaPixyClient(address, this.secure)
        this.prodRequest = new ProdRq()
    }

    produceRequest() {
        this.prodRequest.setTopic(this.topic)
        this.prodRequest.getKeyValue(this.key)
        this.prodRequest.setMessage(this.message)
        return this.prodRequest
    }

    listTopics() {
         return {
            
        }
    }

    listConsumers() {
         return {
            
        }
    }

    gotError() {
        console.log("Got an error while producing the stream")
    }

    produceStream(topic: string, key: string, message: any) {
        this.insecureZoraClient.produce(this.produceRequest(), this.gotError)
    }
}