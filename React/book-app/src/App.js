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

  settingState(array, errorMessage) {
    this.setState({
      booksArray: array,
      error: errorMessage
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
    return (
      <div className="App">
        <Form input={this.getBookInfo} />
        
        { this.state.booksArray
          ?
            this.state.booksArray.map (book => (
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
            <p>{this.state.error}</p>
        }
      </div>
    )
  };
}

export default App;