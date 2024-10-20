const Root_div=document.getElementById("root");
export{Root_div}
import { globalstate } from "../index.js";
import { movePieceFromXToY } from "../events/global.js";

//global state reanderer (this function is useful to render piece fromglobal state)
//most important function
function globalStateRender() {

   
   globalstate.forEach((row) => {
     row.forEach((element) => {
       if (element.highlight) {
          const highlightSpan=document.createElement("span");
            highlightSpan.classList.add("highlight");
             document.getElementById(element.id).appendChild(highlightSpan);
   
         // } else if (element.highlight === null) {
       }
       
       else if(element.highlight===null) {
         const el = document.getElementById(element.id);
         const highlights = Array.from(el.getElementsByTagName("span"));
         highlights.forEach((element) => {
           el.removeChild(element);
         });
         // document.getElementById(element.id).innerHTML = "";
          }
          if(element.piece!=null){
            const square=element;
            const squareEl =document.getElementById(square.id);
             //create piece
             squareEl.innerHTML="";
             const piece =document.createElement("img");
             piece.src=square.piece.img;
             piece.classList.add("piece");

             //inser to square
             squareEl.appendChild(piece);
              } 
              else{
               const el = document.getElementById(element.id);
         const piece = Array.from(el.getElementsByClassName("piece"));
         piece.forEach((element) => {
           el.removeChild(element);
               });

            }  
            
 
     });
   });
 }




//use when you want to render pieces when game start
function pieceRender(data){
    
    data.forEach(row => {
        row.forEach(square => {
            if(square.piece){            //if square has piece
               const squareEl =document.getElementById(square.id);
             //create piece
             const piece =document.createElement("img");
             piece.src=square.piece.img;
             piece.classList.add("piece");

             //inser to square
             squareEl.appendChild(piece);
            }
            
        });
        
    });
    
}



function renderHighlight(squareId){

   const highlightSpan=document.createElement("span");
   highlightSpan.classList.add("highlight");
   document.getElementById(squareId).appendChild(highlightSpan);
   

}

function clearHighlight(){
  

 const flatData=globalstate.flat();
 flatData.forEach(el=>{
   
   // if(el.captureHighlight){
      
   //    document.getElementById(el.id).classList.remove("captureColor");
   //    el.captureHighlight=false;
            
      
   // }
   
   if(el.highlight){
    el.highlight=null;
     
   }
    globalStateRender();
   
 })
 //console.log(flatData);
 
}

//=========importing black,white pawn=============

import *as pieces from "../Data/pices.js";
 

/*=================render init (use when board render for first time)***************/

function initGameRender(data){

  data.forEach(element => {                           //initGame
    const rowE1=document.createElement("div");
    element.forEach(square => {                         //squareRow(8),squareRow (7)
      const squareDiv =document.createElement("div");
      squareDiv.classList.add(square.color,"square");
      squareDiv.id=square.id;                            //id passed to each square

   /*filling black pieces*/   
      if(square.id[1]==7) {
         square.piece=pieces.blackPawn(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="c8"||square.id=="f8") {
         square.piece=pieces.blackBishop(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="b8"||square.id=="g8") {
         square.piece=pieces.blackKnight(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="a8"||square.id=="h8") {
         square.piece=pieces.blackRook(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="d8") {
         square.piece=pieces.blackQueen(square.id);           //7th row for black pawn
      
      }   
      if(square.id=="e8") {
         square.piece=pieces.blackKing(square.id);           //7th row for black pawn
      
      }   
      
      //filling white pices//

      if(square.id[1]==2) {
        square.piece= pieces.whitePawn(square.id);          //2nd row for white pawn a7 b7 .....
      }
      if(square.id=="c1"||square.id=="f1") {
        square.piece=pieces.whiteBishop(square.id);           
     
     }   
     if(square.id=="b1"||square.id=="g1") {
        square.piece=pieces.whiteKnight(square.id);           
     
     }   
     if(square.id=="a1"||square.id=="h1") {
        square.piece=pieces.whiteRook(square.id);           
     
     }   
     if(square.id=="d1") {
        square.piece=pieces.whiteQueen(square.id);           
     
     }   
     if(square.id=="e1") {
        square.piece=pieces.whiteKing(square.id);
     
     } 
      
rowE1.appendChild(squareDiv);
});
     
     rowE1.classList.add("squareRow")
     Root_div.appendChild(rowE1)
    
    
  });
   pieceRender(data);
}

//-----------------self highlight ---------------//
function selfHighlight(piece){

   document.getElementById(piece.current_Position).classList.add("highlightYellow");  
}



//move element to square
function moveElement(piece,id){
   
    const flatData=globalstate.flat();
   // const to=flatData.find(el=>{
   //   if(el.id==id)  return el;
   // })
   // const from=flatData.find(el=>{
   //    if(el.id==piece.current_Position)  return el;
   //  })
   
   //    movePieceFromXToY(from,to);
    flatData.forEach(el=>{
     if(el.id==piece.current_Position){
      delete el.piece;

      }
      if(el.id==id){
       el.piece=piece;
      }
 
    })
   clearHighlight();

    const previousPiece=document.getElementById(piece.current_Position);
   previousPiece.classList.remove("highlightYellow");
    const currentPiece=document.getElementById(id);
    currentPiece.innerHTML=previousPiece.innerHTML;
    previousPiece.innerHTML="";
    
  
   
   
}
export {
   initGameRender,
   renderHighlight,
   clearHighlight,
   selfHighlight,
  
   moveElement,
   globalStateRender
};



