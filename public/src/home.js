function getTotalBooksCount(books) {
  const totalBooks = books.map((book) => books);
  return totalBooks.length;
}

function getTotalAccountsCount(accounts) {
  const totalAcc = accounts.map((account) => accounts);
  return totalAcc.length;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false)
  return borrowedBooks.length;
}
//helper fuction
function _topFive(array){
  let result = array.sort((countA, countB) => (countA.count < countB.count ? 1: -1)).slice(0, 5);
  return result;
}

function getMostCommonGenres(books) {
   const mostCommon = [];
  for(let book of books){
    const genre = mostCommon.find((currentGenre) => currentGenre.name === book.genre);
    if(genre){ 
      genre.count++;
    }else{
      mostCommon.push({name: book.genre, count: 1})
    }
  }  
   return _topFive(mostCommon)
}

function getMostPopularBooks(books) {
  const topBooks = [];
  for(let book of books){
    const popular = book.borrows.length
    const bestBooks = topBooks.find(
    (popularBook) => popularBook.name === book);
    if(bestBooks){
      bestBooks.count++;
    }else{
      topBooks.push({name: book.title, count: popular});
    }
  }
  return _topFive(topBooks);
}

function getMostPopularAuthors(books, authors) {
  const mostPop =[];
  for(let author of authors){
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for(let book of books){
      if(author.id === book.authorId){
        count += book.borrows.length;
      }
    }
    const authorList = { name: authorName, count: count };
    mostPop.push(authorList);
  }
  return _topFive(mostPop);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
