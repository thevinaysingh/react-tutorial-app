function queensAttackSample() {
  // // Example 1
  // const n = 5; // size of boards
  // const k = 3; // total obstacles
  // const r_q = 4;  // queen's position in row
  // const c_q = 3; // queen's position in col
  // const obstacles=[[5,5], [4,2], [2,3]]; // list of obstacles

  //  // Example 1
  //  const n = 8; // size of boards
  //  const k = 0; // total obstacles
  //  const r_q = 1;  // queen's position in row
  //  const c_q = 1; // queen's position in col
  //   console.log("QuuensAttack problem", queensAttack(n, k, r_q, c_q));

   // Example 1
   const n = 100000; // size of boards
   const k = 0; // total obstacles
   const r_q = 4187;  // queen's position in row
   const c_q = 5068; // queen's position in col
    console.log("QueensAttack problem", queensAttack(n, k, r_q, c_q));
}

function isObstacleOccured(positionToCheck, obstacles, noOfObstacles) {
  if(noOfObstacles === 0) return false;

  if(obstacles) {
    const index = obstacles.findIdex(ob => ob[0] === positionToCheck[0] && ob[1] === positionToCheck[1]);
    return index > -1;
  }
  return false;
}

function getAttacksInRow(n, k, r_q, c_q, obstacles) {
  let noOfAttacks = 0;
  const initialRowIndex = r_q;
  const initialColIndex = c_q;
  let rowGoLeft = true;
  let rowGoRight = true;
  let index = 0;
  let positionToCheck = null;
  while(rowGoRight || rowGoLeft) {
    index++;
    if(rowGoRight && initialColIndex + index <= n) {
      positionToCheck = [initialRowIndex, initialColIndex + index];
      rowGoRight = !isObstacleOccured(positionToCheck, obstacles, k);
      if(rowGoRight)  { noOfAttacks++; }
    } else { rowGoRight = false; }

    if(rowGoLeft && initialColIndex - index >= 1) {
      positionToCheck = [initialRowIndex, initialColIndex - index];
      rowGoLeft = !isObstacleOccured(positionToCheck, obstacles, k);
      if(rowGoLeft)  { noOfAttacks++; }
    } else { rowGoLeft = false; }
  }
  return noOfAttacks;
}

function getAttacksInCol(n, k, r_q, c_q, obstacles) {
  let noOfAttacks = 0;
  const initialRowIndex = r_q;
  const initialColIndex = c_q;
  let index = 0;
  let positionToCheck = null;
  let rowGoUp = true;
  let rowGoDown = true;
  while(rowGoUp || rowGoDown) {
    index++;
    if(rowGoUp && initialRowIndex + index <= n) {
      positionToCheck = [initialRowIndex + index, initialColIndex];
      rowGoUp = !isObstacleOccured(positionToCheck, obstacles, k);
      if(rowGoUp)  { noOfAttacks++; }
    } else { rowGoUp = false; }

    if(rowGoDown && initialRowIndex - index >= 1) {
      positionToCheck = [initialRowIndex - index, initialColIndex];
      rowGoDown = !isObstacleOccured(positionToCheck, obstacles, k);
      if(rowGoDown)  { noOfAttacks++; }
    } else { rowGoDown = false; }
  }
  return noOfAttacks;
}

function getAttacksInForwardDiag(n, k, r_q, c_q, obstacles) {
  let noOfAttacks = 0;
  const initialRowIndex = r_q;
  const initialColIndex = c_q;
  let index = 0;
  let positionToCheck = null;
  let forwardDiagonalUp = true;
  let forwardDiagonalDown = true;
  while(forwardDiagonalUp || forwardDiagonalDown) {
    index++;
    if(forwardDiagonalUp && initialRowIndex + index <= n) {
      positionToCheck = [initialRowIndex + index, initialColIndex + index];
      forwardDiagonalUp = !isObstacleOccured(positionToCheck, obstacles, k);
      if(forwardDiagonalUp)  { noOfAttacks++; }
    } else { forwardDiagonalUp = false; }

    if(forwardDiagonalDown && initialColIndex - index >= 1) {
      positionToCheck = [initialRowIndex - index, initialColIndex - index];
      forwardDiagonalDown = !isObstacleOccured(positionToCheck, obstacles, k);
      if(forwardDiagonalDown)  { noOfAttacks++; }
    } else { forwardDiagonalDown = false; }
  }
  return noOfAttacks;
}

function getAttacksInBackwardDiag(n, k, r_q, c_q, obstacles) {
  let noOfAttacks = 0;
  const initialRowIndex = r_q;
  const initialColIndex = c_q;
  let index = 0;
  let positionToCheck = null;
  let backwardDiagonalUp = true;
  let backwardDiagonalDown = true;
  while(backwardDiagonalUp || backwardDiagonalDown) {
    index++;
    if(backwardDiagonalUp && initialRowIndex + index <= n && initialColIndex - index >= 1) {
      positionToCheck = [initialRowIndex + index, initialColIndex - index];
      backwardDiagonalUp = !isObstacleOccured(positionToCheck, obstacles, k);
      if(backwardDiagonalUp)  { noOfAttacks++; }
    } else { backwardDiagonalUp = false; }

    if(backwardDiagonalDown && initialRowIndex - index >= 1 && initialColIndex + index <= n) {
      positionToCheck = [initialRowIndex - index, initialColIndex + index];
      backwardDiagonalDown = !isObstacleOccured(positionToCheck, obstacles, k);
      if(backwardDiagonalDown)  { noOfAttacks++; }
    } else { backwardDiagonalDown = false; }
  }
  return noOfAttacks;
}

function queensAttack(n, k, r_q, c_q, obstacles) {
  let totalAttacks = 0;
  const noOfAttacksInRow = getAttacksInRow(n, k, r_q, c_q, obstacles);
  const noOfAttacksInCol = getAttacksInCol(n, k, r_q, c_q, obstacles);
  const noOfAttacksInForwardDiag = getAttacksInForwardDiag(n, k, r_q, c_q, obstacles);
  const noOfAttacksInBackwardDiag = getAttacksInBackwardDiag(n, k, r_q, c_q, obstacles);
  totalAttacks = noOfAttacksInRow + noOfAttacksInCol + noOfAttacksInForwardDiag + noOfAttacksInBackwardDiag;
  console.log('noOfAttacksInRow', noOfAttacksInRow);
  console.log('noOfAttacksInCol', noOfAttacksInCol);
  console.log('noOfAttacksInForwardDiag', noOfAttacksInForwardDiag);
  console.log('noOfAttacksInBackwardDiag', noOfAttacksInBackwardDiag);
  console.log('totalAttacks', totalAttacks);
  return totalAttacks;
}

queensAttackSample();