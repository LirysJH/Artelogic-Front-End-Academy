import React, {Component} from 'react';
import './App.css';
import Form from './Form/form.jsx';
import Books from './Books/books.jsx';

//https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No
const apiKey = "AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No";

class App extends Component {

  state = {
    title: undefined,
    subtitle: undefined,
    authors: undefined,
    description: undefined,
    error: undefined
  };

  getBookInfo = async(event) => {
    event.preventDefault(); // preventing web-page from refreshing

    let inputQuery = event.target.elements.query.value; //input value 

    const api_url = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputQuery}&key=${apiKey}`);
    const data = await api_url.json();
    console.log(data);

    this.setState({
      title: data.items[0].volumeInfo.title,
      subtitle: data.items[0].volumeInfo.subtitle,
      authors: data.items[0].volumeInfo.authors,
      description: data.items[0].volumeInfo.description,
      error: ""
    });

    console.log(this.state);
  };

  render () {
    return (
      <div className="App">
        <Form input={this.getBookInfo} />
        <Books
          title={this.state.title}
          subtitle={this.state.subtitle}
          authors={this.state.authors}
          description={this.state.description}
        />
      </div>
    )
  };
}

export default App;
