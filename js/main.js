function openChatbot() {
  document.getElementById("chatbot").style.display = "block";
}

function closeChatbot() {
  document.getElementById("chatbot").style.display = "none";
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const chat = document.getElementById("chat-window");

  if (!input.value) return;

  const msg = document.createElement("div");
  msg.textContent = input.value;
  msg.style.marginBottom = "6px";

  chat.appendChild(msg);
  input.value = "";

  chat.scrollTop = chat.scrollHeight;
}
