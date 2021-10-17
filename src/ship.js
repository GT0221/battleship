function Ship(length) {
    let hitArray = [];
    const shipLength = length;
  
    const hit = (position) => {
        if (position == undefined) {
            return hitArray;
        }
        hitArray.push(position);
        return hitArray;
    };
  
    const isSunk = () => {
        if (hitArray.length == shipLength) {
            return true;
        }
        return false;
    };
  
    return {
        shipLength,
        hit,
        isSunk
    };
}

export default Ship;