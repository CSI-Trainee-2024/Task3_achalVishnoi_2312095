import { Root_div } from "../render/main.js";
import { globalstate } from "../index.js";
import { renderHighlight } from "../render/main.js";
import { clearHighlight } from "../render/main.js";
import { selfHighlight } from "../render/main.js";
import { clearPreviousSelfHightlight } from "../render/main.js";
import { moveElement } from "../render/main.js";
import { checkPieceOfOpponentOnElement } from "../Helper/commonHelper.js";
import { globalStateRender } from "../render/main.js";
//highleted or not
let highlight_state=false;       //jab whight self highlighted than for black this state true

//current self hightlight square state
let SelfHighlightedState=null;
//move State
let moveState=null;
 //local function that will clear with highlight state
function clearHighlightLocal(){
   clearHighlight();
   highlight_state=false;
}

//*************move piece x to y*****
function  movePieceFromXToY(from,to){}


//**********white pown events************ 
function whitePownClick({piece}){
   clearHighlightLocal();
  
//if double clicked to self highlighted state
   if(SelfHighlightedState==piece){
     clearPreviousSelfHightlight(SelfHighlightedState);
     
     SelfHighlightedState=null;
     return;
     
   }
    //highlighting logic
    clearPreviousSelfHightlight(SelfHighlightedState)
   selfHighlight(piece);
   highlight_state=true;
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
    //clear board for prev highlight
       
      
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
  
        
         

  

         const highLightSquareIds=
         [
          `${current_pos[0]}${Number(current_pos[1])+1}`,
         ]

         const  captureIds=[col1,col2];
         
         captureIds.forEach(element => {
            checkPieceOfOpponentOnElement(element,"white")
           });
 
        //clear highlight section without clearing capture highlight
                 const flatData=globalstate.flat();
                flatData.forEach(el=>{
                 if(el.highlighted){
          
                document.getElementById(el.id).innerHTML="";
                el.highlighted=false;
               
             }
              })
              

              highlight_state=false;
     

         highLightSquareIds.forEach(highlight => {
             
            globalstate.forEach(row => {
             row.forEach((element)=>{
                if(element.id==highlight){
             
             element.highlight(true);
             
             
            }
 
            
             
 
              });
             }); 
             
             // if(highlight_state)        clearHighlightLocal(); 
             //     renderHighlight(highlight);
             // highlight_state=true;  
 
          //   const el=flatArray.find((element)=>element.id===highlight);
         //    console.log(el);
             
             
         });
      }
        

    

    
   
    
 }
 
 //****************blackPown move***********

 function blackPownClick({piece}){
  

   if(highlight_state) {
      movePieceFromXToY(SelfHighlightedState,piece)
      return;
   }
   clearHighlightLocal();

   //if double clicked to self highlighted state
      if(SelfHighlightedState==piece){
       clearPreviousSelfHightlight(SelfHighlightedState);
       
       SelfHighlightedState=null;
        return;
        
      }
   
       clearPreviousSelfHightlight(SelfHighlightedState)
      selfHighlight(piece);
      highlight_state=true;
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
   
                clearHighlightLocal();
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
            const highLightSquareIds=
            [
           `${current_pos[0]}${Number(current_pos[1])-1}`
            ]
   
         

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
                   clearHighlightLocal(); //in elese part clear highlight called to clear highlight if any if we clicking any part
            clearPreviousSelfHightlight(SelfHighlightedState);
            SelfHighlightedState=null;

         }
         else {
                clearHighlightLocal(); //in elese part clear highlight called to clear highlight if any if we clicking any part
            clearPreviousSelfHightlight(SelfHighlightedState);
            SelfHighlightedState=null;
         }
         
         

        }
        
    })
}
export{GlobalEvent} 