import React, {Component} from 'react';
import './App.css';
import Form from './Form/form.jsx';
import Books from './Books/books.jsx';

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
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputQuery.trim()}&key=${apiKey}`);
      const data = await getBook.json();

      data.items
      ?
        this.settingState(data.items, null)
      :
        this.settingState(undefined, "Sorry, nothing found");
    }
    else
    {
      alert("Incorrect request");
    }
  };

  render () {
    const {booksArray, error} = this.state;
    
    return (
      <div className="App">
        <Form input={this.getBookInfo} />
        
        {        
          booksArray
          ?
            booksArray.map (book => (
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
            <p>{error}</p>
        }
      </div>
    )
  };
}

export default App;