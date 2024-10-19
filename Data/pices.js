 // black pieces
function blackPawn(current_Position){
      return{
        current_Position,
        img: "chessAssets/black/PawnB.png",
      piece_name: "black_Pawn"
      }
}
function blackRook(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/RookB.png",
      piece_name: "black_Rook"
    }
}
function blackBishop(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/BishopB.png",
      piece_name: "black_Bishop"
    }
}
function blackKnight(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/KnightB.png",
      piece_name: "black_King"
    }
}
function blackKing(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/KingB.png",
      piece_name: "black_King"
    }
}
function blackQueen(current_Position){
    return{
      current_Position,
      img: "chessAssets/black/QueenB.png"
      ,
      piece_name: "black_Queen"
    }
}



//white pieces 
function whitePawn(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/PawnW.png",
      piece_name: "white_Pown"
    }
}

function whiteRook(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/RookW.png",
      piece_name: "white_Rook"
    }
}
function whiteKnight(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/KnightW.png",
      piece_name: "white_Kinght"
    }
}
function whiteBishop(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/BishopW.png",
      piece_name: "white_Bishop"
    }
}
function whiteKing(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/KingW.png",
      piece_name: "white_King"
    }
}
function whiteQueen(current_Position){
    return{
      current_Position,
      img: "chessAssets/white/QueenW.png",
      piece_name: "white_Queen"
    }
}

export{blackPawn,whitePawn,blackRook,whiteRook,blackBishop,whiteBishop,
       blackKing,whiteKing,blackKnight,whiteKnight,blackQueen,whiteQueen }
