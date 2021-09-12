# zorajs
Zora JavaScript client for writing Kafka messages to ZoraCloud

## Getting Startted

To procuce messages using ZoraClient from a javascript application you need to:

1. Add `npm i zoraclient` or `yarn add zoraclient` as a dependency to your package.json 


2. Add imports:

    ```typescript
    import { Producer } from "zoraclient";
    ```

5. Create a Producer Instance client:

    ```typescript
    /**
     * Topic : Kafka topic to write to
    * address: GRPC port to send messages
    * Message: Messages to send to kafka topic
    */
    const data = {
    produceRequest: {
        topic: "devices",
        keyValue: "5nsdu930wdnl2n3nck",
        message: "samplemessagetobesent",
        address: "localhost:9000", 
    },
    };

    function main() {
    const stream = new Producer({ ...data.produceRequest });
    const output = stream.produce();
    console.log(output);
    }

    main();
    ```