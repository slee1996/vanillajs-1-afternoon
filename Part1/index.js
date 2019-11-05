const board = []




function play(clickedID) {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedID)

    if(playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedID] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedID] = 'O';
    }
    console.log(board);

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const midLeft = board[3]
    const midCenter = board[4]
    const midRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert(`${topLeft} is the winner!`);
        return;
    } if(topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner!`);
        return;
    } if(topLeft !== undefined && topLeft === midCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner!`);
        return;
    } if(midLeft !== undefined && midLeft === midCenter && midLeft === midRight){
        alert(`${midLeft} is the winner!`);
        return;
    } if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the winner!`);
        return;
    } if(bottomLeft !== undefined && bottomLeft === midCenter && bottomLeft === topRight){
        alert(`${bottomLeft} is the winner!`);
        return;
    } if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the winner!`);
        return;
    } if(bottomCenter !== undefined && bottomCenter === midCenter && bottomCenter === topCenter){
        alert(`${bottomCenter} is the winner!`);
        return;
    } if(bottomRight !== undefined && bottomRight === midRight && bottomRight === topRight){
        alert(`${bottomRight} is the winner!`);
        return;
    }

    var boardFull = true

    for(i = 0; i <= 8; i++) {
        if(board[i] === undefined) {
            boardFull = false;
        } 
    }
    if(boardFull === true) {
        alert('Cats!');
    }
}