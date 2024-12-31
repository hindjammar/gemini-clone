const apiKey = "";



const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const API_KEY = "AIzaSyAp8-y5w7zA0gGQxp-S0HBbJ-WUahnCdOQ";
  const MODEL_NAME = "gemini-1.0-pro";
  
 
 
  async function runChat(prompt) {
     const genAI = new GoogleGenerativeAI(API_KEY);
     const model = genAI.GoogleGenerativeModel({ model: MODEL_NAME});

      
  const generationConfig = {
    temperature: 1,
    topP: 1,
    topK: 1,
    maxOutputTokens: 2048,
  };
  
  const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },

    {
        category: HarmCategory.HARM_CATEGORY_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,

    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    }
  ];
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history:[

    ],
  });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
  }
  
  export default runChat;