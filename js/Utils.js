var Utils = {};

/**
 * Returns true if positions are equal.
 */
Utils.comparePositions = function(pos1, pos2) {
    return pos1.x == pos2.x && pos1.y == pos2.y;
};


/**
 * Convert bitmap pixels position to entity on grid position.
 */
Utils.convertToEntityPosition = function(pixels) {
    var position = {};
    position.x = Math.round(pixels.x / gGameEngine.tileSize);
    position.y = Math.round(pixels.y /gGameEngine.tileSize);
    return position;
};

/**
 * Convert entity on grid position to bitmap pixels position.
 */
Utils.convertToBitmapPosition = function(entity) {
    var position = {};
    position.x = entity.x * gGameEngine.tileSize;
    position.y = entity.y * gGameEngine.tileSize;
    return position;
};

/**
 * Removes an item from array.
 */
Utils.removeFromArray = function(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (item == array[i]) {
            array.splice(i, 1);
        }
    }
    return array;
};

Utils.nextPositionAfterAction = function(action, currentPosition) {
    var x = currentPosition.x, y = currentPosition.y;
    switch(action) {
        case 'up':
            y -=1;
            break;
        case 'down':
            y += 1;
            break;
        case 'left':
            x -= 1;
            break;
        case 'right':
            x += 1;
            break;
        case 'bomb':
            break;        
        default:
            console.log('Shoud not be here');
    }
    return { x: x, y: y }    
};