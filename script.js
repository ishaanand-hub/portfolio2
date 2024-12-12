
// Function to open the chatbot window

function openChatbot() {

    document.getElementById("chatbotWindow").style.display = "block";

}

// Function to close the chatbot window

function closeChatbot() {

    document.getElementById("chatbotWindow").style.display = "none";

}

// Function to handle sending messages

function sendMessage() {

    var userMessage = document.getElementById("chatbotInput").value;

    if (userMessage) {

        // Display the user's message

        var userMessageElement = document.createElement("div");

        userMessageElement.classList.add("chatbot-message", "user");

        userMessageElement.textContent = userMessage;

        document.querySelector(".chatbot-messages").appendChild(userMessageElement);

        // Get bot's response (simulate simple personalized replies)

        var botResponse = generateBotResponse(userMessage);

        // Display the bot's response with a delay for a more natural conversation flow

        setTimeout(function() {

            var botMessageElement = document.createElement("div");

            botMessageElement.classList.add("chatbot-message", "bot");

            botMessageElement.textContent = botResponse;

            document.querySelector(".chatbot-messages").appendChild(botMessageElement);

            document.getElementById("chatbotInput").value = "";  // Clear input field

            scrollToBottom();

        }, 800);  // Delay for 800ms to simulate thinking time

    }

}

// Function to simulate a bot response

function generateBotResponse(userMessage) {

    // Convert the message to lowercase for better matching

    userMessage = userMessage.toLowerCase();

    

    // Simple response logic based on keywords in user input

    if (userMessage.includes("hello") || userMessage.includes("hi")) {

        return "Hey there! How can I assist you today?";

    } else if (userMessage.includes("name")) {

        return "I'm your friendly chatbot! You can call me Bot.";

    } else if (userMessage.includes("jeepreparation") || userMessage.includes("tips")) {

        return "For JEE prep, focus on clearing your concepts, practice problems daily, and revise regularly!";

    } else if (userMessage.includes("time")) {

        var currentTime = new Date().toLocaleTimeString();

        return "The current time is " + currentTime + ".";

    } else if (userMessage.includes("how are you")) {

        return "I'm doing great, thanks for asking! How about you?";

    } else if (userMessage.includes("thanks")) {

        return "You're welcome! Let me know if you need any help.";

    } else if (userMessage.includes("contact") || userMessage.includes("email") || userMessage.includes("youtube")) {

        return "You can reach me via email at ishaanand2488@gmail.com or check out my YouTube channel: https://youtube.com/@jeeaspirant028?si=qKS4lpyRlK2VmAHU";

    } else if (userMessage.includes("help")) {

        return "I can assist you with JEE preparation tips, answer questions, or give you contact info. Just ask!";

    } else if (userMessage.includes("bye") || userMessage.includes("exit")) {

        return "Goodbye! Feel free to reach out anytime!";

    } else if (userMessage.includes("video editing") || userMessage.includes("edit videos") || userMessage.includes("video editor") || userMessage.includes("cut video")) {

        return "Video editing is an exciting skill! I recommend learning tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve. Start with basic cuts, transitions, and color grading.";

    } else if (userMessage.includes("editing tips") || userMessage.includes("how to edit") || userMessage.includes("improve video editing")) {

        return "To improve your editing skills, practice regularly, watch tutorials, experiment with effects, and focus on mastering transitions, audio synchronization, and color correction!";

    } else if (userMessage.includes("best video editing software")) {

        return "Some of the best video editing software are Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and HitFilm Express. Each has its unique features, so pick one that suits your needs!";

    } else if (userMessage.includes("editing effects") || userMessage.includes("add effects") || userMessage.includes("motion graphics")) {

        return "To add cool effects, learn about motion graphics, visual effects (VFX), and advanced transitions. You can use After Effects or even built-in effects in Premiere Pro!";

    } else {

        return "Hmm, I didn't quite get that. Could you rephrase it or ask something else?";

    }

}

// Function to ensure the chatbot window scrolls down after each message

function scrollToBottom() {

    var chatbotMessages = document.querySelector(".chatbot-messages");

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

}
          

 