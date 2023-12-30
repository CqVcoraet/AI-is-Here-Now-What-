// Background
var bg = document.createElement("div")
bg.style.width = "100%"
bg.style.height = "100%";
bg.style.left = "50%";
bg.style.top = "50%";
bg.style.transform = "translateX(-50%, -50%)"; // Center the background
bg.style.position = "absolute";
bg.style.backgroundColor = "#ffffff";
document.body.append(bg);

// Title
var title = document.createElement("div");
title.innerHTML = "<u>AI is here, now what?</u>";
title.style.position = "absolute";
title.style.left = "50%";
title.style.transform = "translateX(-50%)"; // Center the element horizontally
title.style.top = "5px";
title.style.textAlign = "center";
title.style.color = "white";
title.style.fontSize = "55px";
title.style.width = "550px";
title.style.fontWeight = "bold";
title.style.fontFamily = "'Copperplate Gothic 32 BC', sans-serif";
bg.append(title);

// Paragraph-like element (h4)
var h4 = document.createElement("div");
h4.innerHTML = "AI has advanced a lot since it was first invented. AI Language models now are super advanced that some people see it as a useful researching tool. Others see it as a fun thing to play with. However, AI has its own flaws and downsides as well. AI can be misinformed and even put information together in an incorrect way. AI Language models such as ChatGPT 3.5 and GPT 4 are quite advanced but still have a long ways to go. It's important to remember that every language model has its own pros and cons.";
h4.style.position = "absolute";
h4.style.left = "50%";
h4.style.transform = "translateX(-50%)";
h4.style.top = "30px";
h4.style.textAlign = "center";
h4.style.width = "500px";
h4.style.color = "#000000";
h4.style.fontSize = "20px";
bg.append(h4);