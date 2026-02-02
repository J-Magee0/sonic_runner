import kaplay from "kaplay";

const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true, //keep aspect ratio
  background: [0, 0, 0],
  global: false,
  touchToMouse: true,
  buttons: {
    jump: { keyboard: ["space", "ArrowUp", "w"], mouse: "left" },
  },
  debugKey: "`",
  debug: true, //enable debug features DONT FORGET TO DISABLE IN PRODUCTION
});

export default k;
