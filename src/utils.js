export const paginationRange = (array, page) => {
    const leftIndex = array[page - 3]; 
    const rightIndex = array[page]; 
    const leftArray = array.slice(0, 4);
    const middleArray = array.slice(leftIndex, rightIndex);

    if (array.length <= 7 && array.length > 1) {
        return array;
    } else if (array.length === 1 || array.length === 0) {
        return [];
    }

    if(page < 4 && array.length > 7) {
        return [...leftArray, '...', array[array.length - 1]];
    } else if (page > 3 && page < array[array.length - 3]) {
        return [array[0], '...', ...middleArray, '...', array[array.length - 1]];
    } else {
        const rightArray = array.slice(-4);
        return [array[0], '...', ...rightArray];
    }
};