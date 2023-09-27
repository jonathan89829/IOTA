const { retrieveData, sendData, SingleNodeClient } = require("@iota/iota.js");
const { Converter } = require("@iota/util.js");
const fs = require("fs");

const API_ENDPOINT = "http://172.23.184.135:14265";

async function run() {
    const client = new SingleNodeClient(API_ENDPOINT);

    const myIndex = Converter.utf8ToBytes("MY-DATA-INDEX");

    const jsonFilePath = 'example.json';
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    
    console.log("Sending Data");
    const sendResult = await sendData(client, myIndex, Converter.utf8ToBytes(jsonData));
    console.log("Received Message Id", sendResult.messageId);
    //console.log(`https://explorer.iota.org/mainnet/message/${sendResult.messageId}`);
    

    console.log();
    console.log("Finding messages with index");

    const found = await client.messagesFind(myIndex);

    if (found && found.messageIds.length > 0) {
        console.log(`Found: ${found.count} of ${found.maxResults}`);

        const firstResult = await retrieveData(client, found.messageIds[0]);
        if (firstResult) {
            console.log("First Result");
            console.log("\tIndex: ", Converter.bytesToUtf8(firstResult.index));
            console.log("\tData: ", firstResult.data ? Converter.bytesToUtf8(firstResult.data) : "None");
        }
    } else {
        console.log("Found no results");
    }
}

run()
    .then(() => console.log("Done"))
    .catch(err => console.error(err));