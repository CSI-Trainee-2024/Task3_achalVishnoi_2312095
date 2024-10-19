import { initGameRender } from "./render/main.js";
import { initGame } from "./Data/datam.js";
//============will be usefull till game ends================
const globalstate=initGame();  
initGameRender(globalstate);


