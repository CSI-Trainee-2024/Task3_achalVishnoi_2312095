import { Root_div } from "../render/main.js";

function GlobalEvent(){
    Root_div.addEventListener("click",function(event){
        if(event.target.localName==="img"){
            console.log(event.target.parentNode.id);
            
        }
        
    })
}
export{GlobalEvent} 