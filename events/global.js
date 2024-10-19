import { Root_div } from "../render/main.js";
import { globalstate } from "../index.js";
import { renderHighlight } from "../render/main.js";

 function whitePownClick({piece}){
    const current_pos=piece.current_Position;
    const flatArray=globalstate.flat();
    if(current_pos[1]=="2"){
        const highLightSquareIds=
        [
   `${current_pos[0]}${Number(current_pos[1])+1}`,
   `${current_pos[0]}${Number(current_pos[1])+2}`
        ]


        highLightSquareIds.forEach(highlight => {
            
           globalstate.forEach(row => {
            row.forEach((element)=>{
           if(element.id==highlight){
            element.highlight=true;
            console.log(element);
            
           }

           
            });
        
           });
           renderHighlight(highlight);

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
        
    })
}
export{GlobalEvent} 