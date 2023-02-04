// a express server, which will handle an api request coming in and responde back with a json object, it will use a body parser as well as cross.
//PLEASE CREATE AN ENV. VARIABLE CALLED: "OPENAI_API_KEY" AND PUT YOUR OPENAPI KEY ON IT.

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-pdWE12LsfaaDCkgV123v12cxe1wdUPdsf53HFY12ffds3oO", //YOUR RANDOM GENERATED UUID ORG ID
    apikey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const message = req.body.message;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0,
      });
      console.log("Message: " + message)
    //   console.log("APIKey: " + process.env.OPENAI_API_KEY);
      console.log(response.data);

        if(response.data.choices[0].text){
            res.json({message: response.data.choices[0].text});
        }
        else{
            res.json({message: "Error"});
        }});

app.listen(port, () => {
    console.log(`Started listening at http://localhost:${port}`);
    }
);
// Path: index.html