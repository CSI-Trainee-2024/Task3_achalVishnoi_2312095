import { Root_div } from "../render/main.js";

import { renderHighlight } from "../render/main.js";
import { clearHighlight } from "../render/main.js";
import { selfHighlight } from "../render/main.js";
//import { clearPreviousSelfHightlight } from "../render/main.js";
import { globalstate, keySquareMapper } from "../index.js";
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
function  movePieceFromXToY(from,to){
   to.piece=from.piece;
   from.piece=null;
   globalStateRender();

}

// clear prev highlight
function clearPreviousSelfHightlight(piece){
   if (piece) {
      document
        .getElementById(piece.current_position)
        .classList.remove("highlightYellow");
      // console.log(piece);
      // selfHighlight = false;
      SelfHighlightedState= null;
}

}
//**********white pown events************ 
/*function whitePownClick({piece}){
   clearHighlight();

   clearPreviousSelfHightlight(SelfHighlightedState);
  
// //if double clicked to self highlighted state
   if(SelfHighlightedState==piece){
      
      highlight_state=false;
     SelfHighlightedState=null;
      return;
     
   }
    //highlighting logic
    
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
       highlight_state=false;                                       //if clearing occures than highling false
      
        highLightSquareIds.forEach(highlight => {
            
           globalstate.forEach(row => {
            row.forEach((element)=>{
               if(element.id==highlight)
              element.highlight=true;
              });
            }); 
           
            
        });

        globalStateRender();
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
 
       
              

         highLightSquareIds.forEach(highlight => {
             
            globalstate.forEach(row => {
             row.forEach((element)=>{
                if(element.id==highlight){
             
                 element.highlight=true;
             
             
            }
 
            
             
 
              });
             }); 
             
             // if(highlight_state)        clearHighlightLocal(); 
             //     renderHighlight(highlight);
             // highlight_state=true;  
 
          //   const el=flatArray.find((element)=>element.id===highlight);
         //    console.log(el);
             
             
         });

         globalStateRender();
      }
        

    

    
   
    
 }*/

      function whitePawnClick(square) {
         const piece = square.piece;
         clearPreviousSelfHightlight(SelfHighlightedState);
        
         if (piece == SelfHighlightedState) {
           
           clearHighlightLocal();
           return;
         }
       
         if (square.captureHighlight) {
           // movePieceFromXToY();
           moveElement(SelfHighlightedState, piece.current_position);
           
           clearHighlightLocal();
           return;
         }
       
         // clear all highlights
         
         clearHighlightLocal();
       
         // highlighting logic
         selfHighlight(piece);
         highlight_state = true;
         SelfHighlightedState = piece;
       //to change turn
       let inTurn = "white";
       let whoInCheck = null;

function changeTurn() {
  inTurn = inTurn === "white" ? "black" : "white";
}


         // add piece as move state
         moveState = piece;
       
         const current_pos = piece.current_position;
         const flatArray = globalState.flat();
       
         let hightlightSquareIds = null;
       
         // on initial position movement
         if (current_pos[1] == "2") {
           hightlightSquareIds = [
             `${current_pos[0]}${Number(current_pos[1]) + 1}`,
             `${current_pos[0]}${Number(current_pos[1]) + 2}`,
           ];
         } else {
           hightlightSquareIds = [`${current_pos[0]}${Number(current_pos[1]) + 1}`];
         }
       
         hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
       
         hightlightSquareIds.forEach((hightlight) => {
           const element = keySquareMapper[hightlight];
           element.highlight = true;
         });
       
         // capture id logic
         const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${
           Number(current_pos[1]) + 1
         }`;
         const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${
           Number(current_pos[1]) + 1
         }`;
       
         let captureIds = [col1, col2];
         // captureIds = checkSquareCaptureId(captureIds);
       
         captureIds.forEach((element) => {
           checkPieceOfOpponentOnElement(element, "white");
         });
       
         globalStateRender();
       }
       
 
 //****************blackPown move***********

 function blackPownClick({piece}){
     if(highlight_state){
      movePieceFromXToY();
      return;
     }

       clearHighlight()
       clearPreviousSelfHightlight(SelfHighlightedState);
  
// //if double clicked to self highlighted state
   if(SelfHighlightedState==piece){
      
      highlight_state=false;
     SelfHighlightedState=null;
      return;
     
   }
    //highlighting logic
    
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
    //clear board for prev highlight
       highlight_state=false;                                       //if clearing occures than highling false
      
        highLightSquareIds.forEach(highlight => {
            
           globalstate.forEach(row => {
            row.forEach((element)=>{
               if(element.id==highlight)
              element.highlight=true;
              });
            }); 
           
            
        });

        globalStateRender();
      }
      else{
        
     //to check if opponent present diagonal or not   
   const col1=`${String.fromCharCode(current_pos[0].charCodeAt(0)-1)}${Number(current_pos[1])-1}`;
   const col2= `${String.fromCharCode(current_pos[0].charCodeAt(0)+1)}${Number(current_pos[1])-1}`;
  
        
         

  

         const highLightSquareIds=
         [
          `${current_pos[0]}${Number(current_pos[1])-1}`,
         ]

         const  captureIds=[col1,col2];
         
         captureIds.forEach(element => {
            checkPieceOfOpponentOnElement(element,"black")
           });
 
       
              

         highLightSquareIds.forEach(highlight => {
             
            globalstate.forEach(row => {
             row.forEach((element)=>{
                if(element.id==highlight){
             
                 element.highlight=true;
             
             
            }
 
            
             
 
              });
             }); 
             
             // if(highlight_state)        clearHighlightLocal(); 
             //     renderHighlight(highlight);
             // highlight_state=true;  
 
          //   const el=flatArray.find((element)=>element.id===highlight);
         //    console.log(el);
             
             
         });

         globalStateRender();
      }
        

    

    
   
    
 }
  
  
function GlobalEvent(){
    Root_div.addEventListener("click",function(event){
        if(event.target.localName==="img"){
            const clickId=event.target.parentNode.id;
            

            const square = keySquareMapper[clickId];
      
            if (
              (square.piece.piece_name.includes("white") && inTurn === "black") ||
              (square.piece.piece_name.includes("black") && inTurn === "white")
            ) {
              captureInTurn(square);
              return;
            }
            if (square.piece.piece_name == "white_") {
               if (inTurn == "white_Pown") whitePawnClick(square);
             } 

         }
        else{
         SelfHighlightedState=null;
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
                   
             globalStateRender();
         }
         else {
                clearHighlightLocal(); //in elese part clear highlight called to clear highlight if any if we clicking any part
            clearPreviousSelfHightlight(SelfHighlightedState);
            
         }
         
         

        }
        
    })
}
export{GlobalEvent,movePieceFromXToY} 