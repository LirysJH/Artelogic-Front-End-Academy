import React, {Component} from 'react';
import './App.css';
import Form from './Form/form.jsx';
import Books from './Books/books.jsx';

const apiKey = "AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No";

class App extends Component {

  state = {
    booksArray: []
  };

  getBookInfo = async(event) => {
    // preventing web-page from refreshing
    event.preventDefault();

    //input value 
    let inputQuery = event.target.elements.query.value;

    //async request to Google Books API
    const api_url = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputQuery}&key=${apiKey}`);
    const data = await api_url.json();

    //changing state
    this.setState({
      booksArray: data.items
    });
  };

  render () {
    return (
      <div className="App">
        <Form input={this.getBookInfo} />

        {/* an output of matched book array */}
        { this.state.booksArray.map (book => (

          <Books
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            title={book.volumeInfo.title}
            subtitle={book.volumeInfo.subtitle}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
          />
        ))          
        }
      </div>
    )
  };
}

export default App;
