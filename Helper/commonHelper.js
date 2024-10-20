import { globalstate } from "../index.js";
function checkPieceOfOpponentOnElement(id,color){
    
    const flatArray=globalstate.flat();
    
    const opponentColor = (color==="black")?"white":"black";
    
    for(let i=0;i<flatArray.length;i++){
       
        const element=flatArray[i];
        

        if(element.id==id){
            if(element.piece&& element.piece.piece_name.includes(opponentColor)){
                
               const el=document.getElementById(id);
               el.classList.add("captureColor");
              // element.captureId=id;
               element.captureHighlight=true;
              
               
             }
 break;
            
           
            
              
        }

    }
    return false; 

}
export{checkPieceOfOpponentOnElement}