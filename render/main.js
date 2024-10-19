function initGameRender(data){

  data.forEach(element => {             //initGame

    element.forEach(square => {            //squareRow(8),squareRow (7)
        
      console.log(square);         
    });
    
  });
};
export {initGameRender};