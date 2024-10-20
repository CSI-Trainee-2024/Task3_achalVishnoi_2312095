import { globalstate } from "../index.js";
function checkPieceOfOpponentOnElement(id,color){
    const flatArray=globalstate.flat();
    
    const opponentColor = (color==="black")?"white":"black";
    
    for(let i=0;i<flatArray.length;i++){
       
        const element=flatArray[i];
        

        if(element.id==id){
            if(element.piece&& element.piece.piece_name.includes(opponentColor)){
               return true;
    }
  
            break;
            
           
            
              
        }

    }
    return false; 

}
export{checkPieceOfOpponentOnElement}