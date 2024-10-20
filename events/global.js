import { Root_div } from "../render/main.js";
import { globalstate } from "../index.js";
import { renderHighlight } from "../render/main.js";
import { clearHighlight } from "../render/main.js";
import { selfHighlight } from "../render/main.js";
import { clearPreviousSelfHightlight } from "../render/main.js";
import { moveElement } from "../render/main.js";

//highleted or not
let highlight_state=false;

//current self hightlight square state
let SelfHighlightedState=null;
//move State
let moveState=null;

 function whitePownClick({piece}){

   //console.log(moveState);
   
   clearPreviousSelfHightlight(SelfHighlightedState);
   selfHighlight(piece);
   SelfHighlightedState=piece;
   //add piece as move state
   moveState=piece;

   //highlight clicked element 
   const current_pos=piece.current_Position;
   
    
    const flatArray=globalstate.flat();
    if(current_pos[1]=="2"){

        const highLightSquareIds=
        [
   `${current_pos[0]}${Number(current_pos[1])+1}`,
   `${current_pos[0]}${Number(current_pos[1])+2}`
        ]

        clearHighlight();
        highLightSquareIds.forEach(highlight => {
            
           globalstate.forEach(row => {
            row.forEach((element)=>{
               if(element.id==highlight){
            
            element.highlight(true);
            
            
           }



             });
            }); 
            
            // if(highlight_state)  clearHighlight(); 
            //     renderHighlight(highlight);
            // highlight_state=true;  

         //   const el=flatArray.find((element)=>element.id===highlight);
        //    console.log(el);
            
            
        });
        

    }

    

    
 }


function GlobalEvent(){
    Root_div.addEventListener("click",function(event){
        if(event.target.localName==="img"){
            const clickId=event.target.parentNode.id;
            const flatArray=globalstate.flat()
             const square=flatArray.find((el)=>el.id===clickId);
             if(square.piece.piece_name=="white_Pown"){
                whitePownClick(square);
             }

            
        }
        else{
         const childElementOfClockedEl=Array.from(event.target.childNodes);
         if(childElementOfClockedEl.length==1||event.target.localName=="span"){
           if(event.target.localName=="span"){
             const id=event.target.parentNode.id;
             moveElement(moveState,id);
           }
           else{

           }
            
         }
         else {
            clearHighlight(); //in elese part clear highlight called to clear highlight if any if we clicking any part
            clearPreviousSelfHightlight(SelfHighlightedState);
         }
         
         

        }
        
    })
}
export{GlobalEvent} 