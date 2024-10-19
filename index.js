import { add } from "./Data/datam.js"; 
add();     



import { initGameRender } from "./render/main.js";
import { initGame } from "./Data/datam.js";
  /*=================render init***************/
initGameRender(initGame());
