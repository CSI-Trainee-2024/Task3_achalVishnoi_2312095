import { initGameRender } from "./render/main.js";
import { initGame } from "./Data/datam.js";
import { GlobalEvent } from "./events/global.js";
//============will be usefull till game ends================
const globalState=initGame();  
initGameRender(globalState);
let keySquareMapper = {};
GlobalEvent();
export { globalState, keySquareMapper };


