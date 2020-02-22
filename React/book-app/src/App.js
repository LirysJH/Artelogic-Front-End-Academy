import React, {Component} from 'react';
import './App.css';
import Form from './Form/Form.jsx';
import Books from './Books/Books.jsx';
import PageButtons from './PagesButtons/PageButtons.jsx';

const apiKey = "AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No";

class App extends Component {

  state = {
    booksArray: [],
    error: null,
    currentPage: 1
  };

  settingState(itemsArray, message, page) {
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

      data.items
      ?
        this.settingState(data.items, null, 1)
      :
        this.settingState(null, "Sorry, nothing found", 1);
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

  buttonClicked = event => {
    let currentPage = event.target.value;

    this.setState({
      currentPage: currentPage
    });
  };

  render () {
    const {booksArray, error} = this.state;

    const bookList = this.pagination(booksArray, this.state.currentPage, 5);
    const {querySet, pages} = {...bookList};

    return (
      <div className="App">
        <Form input={this.getBookInfo} />
        
        {
          pages
          ?
            <PageButtons pages={pages} onClick={this.buttonClicked}/>
          :
            null
        }
        {        
          querySet
          ?
            querySet.map (book => (
              <Books
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                key={book.id}
              />
              
            ))
          :
            <p className="centered">{error}</p>
        }
        {
          pages
          ?
            <PageButtons pages={pages} onClick={this.buttonClicked}/>
          :
            null
        }
      </div>
    )
  };
}

export default App;