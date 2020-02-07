import React, {Component} from 'react';
import './App.css';
import Form from './Form/form.jsx';
import Books from './Books/books.jsx';

//https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No
const apiKey = "AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No";

class App extends Component {

  state = {
    books: {
      image: undefined,
      title: undefined,
      subtitle: undefined,
      authors: undefined,
      description: undefined,
      error: undefined
    },
    booksArray: []
  };

  getBookInfo = async(event) => {
    event.preventDefault(); // preventing web-page from refreshing

    let inputQuery = event.target.elements.query.value; //input value 

    const api_url = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputQuery}&key=${apiKey}`);
    const data = await api_url.json();
    console.log(data);

    this.setState({
      books: {
        image: data.items[0].volumeInfo.imageLinks.thumbnail,
        title: data.items[0].volumeInfo.title,
        subtitle: data.items[0].volumeInfo.subtitle,
        authors: data.items[0].volumeInfo.authors,
        description: data.items[0].volumeInfo.description,
        error: ""
      },
      booksArray: data.items
    });

    console.log(this.state.booksArray);
  };

  render () {
    return (
      <div className="App">
        <Form input={this.getBookInfo} />
        {/* <Books
          image={this.state.books.image}
          title={this.state.books.title}
          subtitle={this.state.books.subtitle}
          authors={this.state.books.authors}
          description={this.state.books.description}
        /> */}
        { this.state.booksArray.map (book => (
          <Books
            image={book.volumeInfo.imageLinks.thumbnail}
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
