const titles = [
"Under Construction!",
"You'll have to wait a little.",
"Patience is key.",
"Just wait faster bro.",
"The more you wait...",
"The less you'll have to wait.",
"Sub to me while you wait.",
"Website ain't done lil bro.",
"Wait!",
"A lamillion years.",
"Hey! Wanna get high?",
"Boy I sure do love waiting!",
"Have you subscribed yet?",
"Get some rest. It's coming.",
"The website isn't done. Yet.",
"I know what you are.",
"38.8977° N, 77.0365° W",
"They're coming.",
];

function setRandomTitle() {
const randomIndex = Math.floor(Math.random() * titles.length);
document.title = titles[randomIndex];
}

setRandomTitle();