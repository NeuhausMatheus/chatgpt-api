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

## Using NGROK (Optional)

It's optional: You can start the NGROK`s ingress using:

ngrok http 3001
