// Require the node-fetch package to make HTTP requests
const fetch = require("node-fetch");

// Replace 'YOUR_BOT_TOKEN' with the access token provided by BotFather
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Replace this with your desired bot command prefix (e.g., /start, /help, etc.)
const COMMAND_PREFIX = "/start";

// Function to handle incoming messages
async function handleMessage(message) {
  // Extract the text and chat ID from the incoming message
  const { text, chat } = message;
  const chatId = chat.id;

  // Check if the message starts with the specified command prefix
  if (text.startsWith(COMMAND_PREFIX)) {
    const command = text.split(" ")[0].substring(COMMAND_PREFIX.length);
    switch (command) {
      case "start":
        sendMessage(
          chatId,
          "Hello! I am your Telegram bot. Type /help for available commands."
        );
        break;
      case "help":
        sendMessage(
          chatId,
          "Available commands:\n/start - Start the bot\n/help - Display help message"
        );
        break;
      default:
        sendMessage(
          chatId,
          "Unknown command. Type /help for available commands."
        );
    }
  }
}

// Function to send a message to a specific chat
async function sendMessage(chatId, text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: text,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Message sent:", data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

// Sample webhook route to handle incoming messages from Telegram
// Replace '/webhook' with your desired endpoint path
app.post("/webhook", (req, res) => {
  const message = req.body.message;
  if (message) {
    handleMessage(message);
  }
  res.status(200).send("OK");
});
