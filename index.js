import { initGameRender } from "./render/main.js";
import { initGame } from "./Data/datam.js";
import { GlobalEvent } from "./events/global.js";
//============will be usefull till game ends================
const globalstate=initGame();  
initGameRender(globalstate);

export {globalstate}

GlobalEvent();


