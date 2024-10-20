import { Root_div } from "../render/main.js";
import { globalstate } from "../index.js";
import { renderHighlight } from "../render/main.js";
import { clearHighlight } from "../render/main.js";
import { selfHighlight } from "../render/main.js";
import { clearPreviousSelfHightlight } from "../render/main.js";
import { moveElement } from "../render/main.js";
import { checkPieceOfOpponentOnElement } from "../Helper/commonHelper.js";

//highleted or not
let highlight_state=false;

//current self hightlight square state
let SelfHighlightedState=null;
//move State
let moveState=null;
//**********white pown events************ 
function whitePownClick({piece}){

//if double clicked to self highlighted state
   if(SelfHighlightedState==piece){
     clearPreviousSelfHightlight(SelfHighlightedState);
     clearHighlight();
     SelfHighlightedState=null;
     return;
     
   }

    clearPreviousSelfHightlight(SelfHighlightedState)
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
            
        });
      }
      else{
        
     //to check if opponent present diagonal or not    
         const col1=`${String.fromCharCode(current_pos[0].charCodeAt(0)-1)}${Number(current_pos[1])+1}`;
         const col2= `${String.fromCharCode(current_pos[0].charCodeAt(0)+1)}${Number(current_pos[1])+1}`;
          
      console.log(checkPieceOfOpponentOnElement(col1,"white"));
      console.log( checkPieceOfOpponentOnElement(col2,"white"));
        
       

         const highLightSquareIds=
         [
    `${current_pos[0]}${Number(current_pos[1])+1}`,
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
 
 //****************blackPown move***********
 function blackPownClick({piece}){
   
   

   //if double clicked to self highlighted state
      if(SelfHighlightedState==piece){
        clearPreviousSelfHightlight(SelfHighlightedState);
        clearHighlight();
        SelfHighlightedState=null;
        return;
        
      }
   
       clearPreviousSelfHightlight(SelfHighlightedState)
      selfHighlight(piece);
      SelfHighlightedState=piece;
      //add piece as move state
      moveState=piece;
   
      //highlight clicked element 
      const current_pos=piece.current_Position;
      
       
       const flatArray=globalstate.flat();
       if(current_pos[1]=="7"){
   
           const highLightSquareIds=
           [
      `${current_pos[0]}${Number(current_pos[1])-1}`,
      `${current_pos[0]}${Number(current_pos[1])-2}`
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
         else{
            const highLightSquareIds=
            [
           `${current_pos[0]}${Number(current_pos[1])-1}`
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
             else if(square.piece.piece_name =="black_Pown"){
               
               
               blackPownClick(square);                                
             } 

            
        }
        else{
         const childElementOfClockedEl=Array.from(event.target.childNodes);
         if(childElementOfClockedEl.length==1||event.target.localName=="span"){
            
           if(event.target.localName=="span"){
            
             const id=event.target.parentNode.id;

                                    

             moveElement(moveState,id);
             
             moveState=null;
              }
              else{
            
             const id=event.target.id;
              moveElement(moveState,id);
              moveState=null;

             }
           clearHighlight(); //in elese part clear highlight called to clear highlight if any if we clicking any part
           clearPreviousSelfHightlight(SelfHighlightedState);
           SelfHighlightedState=null;
            
         }
         else {
            clearHighlight(); //in elese part clear highlight called to clear highlight if any if we clicking any part
            clearPreviousSelfHightlight(SelfHighlightedState);
            SelfHighlightedState=null;
         }
         
         

        }
        
    })
}
export{GlobalEvent} 