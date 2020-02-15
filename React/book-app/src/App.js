import React, {Component} from 'react';
import './App.css';
import Form from './Form/Form.jsx';
import Books from './Books/Books.jsx';

const apiKey = "AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No";

class App extends Component {

  state = {
    booksArray: [],
    error: null
  };

  settingState(itemsArray, message) {
    this.setState({
      booksArray: itemsArray,
      error: message
    });
  };

  getBookInfo = async (event) => {
    // preventing web-page from refreshing
    event.preventDefault();

    //input value 
    let inputQuery = event.target.elements.query.value;

    if (inputQuery)
    {
      const getBook = await
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputQuery.trim()}
      &startIndex=0&maxResults=40&key=${apiKey}`);
      const data = await getBook.json();
      console.log(data);

      data.items
      ?
        this.settingState(data.items, null)
      :
        this.settingState(null, "Sorry, nothing found");
    }
    else
    {
      alert("Incorrect request");
    }
  };

  pagination = (querySet, currentPage, rows) => {
    if(querySet)
    {
      let trimBegin = (currentPage - 1) * rows;
      let trimEnd = trimBegin + rows;
  
      let trimedData = querySet.slice(trimBegin, trimEnd);
      let pages = Math.ceil(querySet.length/rows);
  
      return {
          querySet: trimedData,
          pages: pages 
      };
    }    
  };

  render () {
    const {booksArray, error} = this.state;

    const bookList = this.pagination(booksArray, 1, 5);
    const {querySet, pages} = {...bookList};

    return (
      <div className="App">
        <Form input={this.getBookInfo} />
        
        {        
          querySet //booksArray
          ?
            querySet.map (book => (
              <Books
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                key={book.id}   //identifier
              />
            ))
          :
            <p className="centered">{error}</p>
        }
      </div>
    )
  };
}

export default App;