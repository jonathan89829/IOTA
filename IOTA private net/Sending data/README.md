# Sending data
This file includes the steps to send the data on your private net and the JavaScript code.  
## Requirment
The codes are written by JavaScript, so you have to install Node.js on https://nodejs.org/en.  
After finish the installation of Node.js, you need @iota/iota.js package:
```
npm install @iota/iota.js
```

## Example
And now you can use the following code to check if you can connect to the private net:  
```
const { SingleNodeClient } = require("@iota/iota.js");

async function run() {
    const client = new SingleNodeClient("https://chrysalis-nodes.iota.org");

    const info = await client.info();
    console.log("Node Info");
    console.log("\tName:", info.name);
    console.log("\tVersion:", info.version);
    console.log("\tIs Healthy:", info.isHealthy);
    console.log("\tNetwork Id:", info.networkId);
    console.log("\tLatest Milestone Index:", info.latestMilestoneIndex);
    console.log("\tConfirmed Milestone Index:", info.confirmedMilestoneIndex);
    console.log("\tPruning Index:", info.pruningIndex);
    console.log("\tFeatures:", info.features);
    console.log("\tMin PoW Score:", info.minPoWScore);
}

run()
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));
```
