import { Root_div } from "../render/main.js";
import { globalstate } from "../index.js";

 function whitePownClick(){
    console.log("white pown click");
    
 }


function GlobalEvent(){
    Root_div.addEventListener("click",function(event){
        if(event.target.localName==="img"){
            const clickId=event.target.parentNode.id;
            const flatArray=globalstate.flat()
             const square=flatArray.find((el)=>el.id===clickId);
             if(square.piece.piece_name=="white_Pown"){
                whitePownClick();
             }

            
        }
        
    })
}
export{GlobalEvent} 