# Getting Started

Dependencies needed: openai openssl

Please install the latest Node.js and fix all security/vulnerabilities needed (npm audit fix)

The frontend app is on "src" folder and can be started using:

cd src
npm start

It will start listening in: http://localhost:3000

The backend app is on root of this repository and can be started using:

node index.js

It will start listening in: http://localhost:3001

## Get your OpenAI's API Key

You need to get an API key at: https://platform.openai.com/account/api-keys

To be able to use this app. We also have a variable that queries an env. variable, where you can place it securily.

    const configuration = new Configuration({

        organization: "org-pdWE12LsfaaDCkgV123v12cxe1wdUPdsf53HFY12ffds3oO", //YOUR RANDOM GENERATED UUID ORG ID

        apikey: process.env.OPENAI_API_KEY,

    });

We also have a random generated UUID that is used to identify you on the OpenAI's pool, that should be replaced.

## Using NGROK (Optional)

It's optional: You can start the NGROK`s ingress using:

ngrok http 3001

