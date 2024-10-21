import { initGameRender } from "./render/main.js";
import { initGame } from "./Data/datam.js";
import { GlobalEvent } from "./events/global.js";
//============will be usefull till game ends================
const globalState=initGame();  
initGameRender(globalState);
let keySquareMapper = {};

globalState.flat().forEach((square) => {
    keySquareMapper[square.id] = square;
  });
GlobalEvent();
export { globalState, keySquareMapper };


