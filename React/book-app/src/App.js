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

      if (data.items)
      {
        this.setState({
          booksArray: data.items,
          error: null
        });
      }
      else
      {
        this.setState({
          booksArray: undefined,
          error: "Sorry, nothing found"
        });
      }
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
              )         
            )
          :
            <p>{this.state.error}</p>
        }
      </div>
    )
  };
}

export default App;