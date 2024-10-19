function blackPawn(current_Position){
      return{
        current_Position,
        img: "chessAssets/black/PawnB.png"
      }
}
function whitePawn(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/PawnW.png"
    }
}
export {blackPawn};
export{whitePawn};