const getReadingList = () => {
    const storedReadingList = localStorage.getItem('reading-id');
    if(storedReadingList){
        return JSON.parse(storedReadingList);
    }
    return [];
}

const saveReadingList = (id) => {
    const storedReadingLists = getReadingList();
    const exists = storedReadingLists.find(bookId => bookId === id);
    if(!exists){
        storedReadingLists.push(id);
        localStorage.setItem('reading-id', JSON.stringify(storedReadingLists));
        return true;
    }
}
const getWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist-id');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    return [];
}

const saveWishlist = (id) => {
    const storedReadingLists = getReadingList();
    const exists = storedReadingLists.find(bookId => bookId === id);
    if(!exists){
        storedReadingLists.push(id);
        localStorage.setItem('wishlist-id', JSON.stringify(storedReadingLists));
        return true;
    }
}


export {getReadingList, saveReadingList, getWishlist, saveWishlist};