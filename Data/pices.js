 // black pieces
function blackPawn(current_Position){
      return{
        current_Position,
        img: "chessAssets/black/PawnB.png"
      }
}
function blackRook(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/RookB.png"
    }
}
function blackBishop(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/BishopB.png"
    }
}
function blackKnight(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/KnightB.png"
    }
}
function blackKing(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/KingB.png"
    }
}
function blackQueen(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/QueenB.png"
    }
}



//white pieces 
function whitePawn(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/PawnW.png"
    }
}

function whiteRook(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/RookW.png"
    }
}
function whiteKnight(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/KnightW.png"
    }
}
function whiteBishop(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/BishopW.png"
    }
}
function whiteKing(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/KingW.png"
    }
}
function whiteQueen(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/QueenW.png"
    }
}

export{blackPawn,whitePawn,blackRook,whiteRook,blackBishop,whiteBishop,
       blackKing,whiteKing,blackKnight,whiteKnight,blackQueen,whiteQueen }
