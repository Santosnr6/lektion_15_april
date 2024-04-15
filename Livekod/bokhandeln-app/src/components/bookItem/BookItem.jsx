import './bookItem.css';
import { useState } from 'react';

function BookItem() {
  const [bookBalance, setBookBalance] = useState(0);

  const decreaseBookBalance = () => {
    if(bookBalance > 0) {
      decreaseCartBalance();
      setBookBalance(b => b - 1);
    }
  }

  const increaseBookBalance = (book) => {
    increaseCartBalance();
    setBookBalance(b => b + 1);
    addToCart(book);
  }

  return (
    <article className="book-item">
      <h3 className="book-title">{ book.title }</h3>
      <p className="book-author">{'Av ' + book.author }</p>
      <p className="book-description">{ book.desc }</p>
      <div className="btn-controller">
        <button 
          className="book-btn"
          onClick={ decreaseBookBalance }
        >-</button>
        <p className="book-balance">{ bookBalance }</p>
        <button 
          className="book-btn"
          onClick={ () => increaseBookBalance(book) }
        >+</button>
      </div>
    </article>
  )
}

export default BookItem;
