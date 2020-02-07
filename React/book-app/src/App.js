import React, {Component} from 'react';
import './App.css';
import Form from './Form/form.jsx';

//https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No
const apiKey = "AIzaSyCgw4YLLZrjbxgKkJiPFuxKhoG22NU28No";

class App extends Component {

  state = {
    title: undefined,
    subtitle: undefined,
    authors: [],
    description: undefined,
    error: undefined
  };

  getBookInfo = async(event) => {
    event.preventDefault(); // preventing web-page from refreshing

    const inputQuery = event.target.elements.query.value; //input value 

    const api_url = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputQuery}&key=${apiKey}`);
    const data = await api_url.json();
    console.log(data);
  };

  render () {
    return (
      <div className="App">
        <Form input={this.getBookInfo} />
      </div>
    )
  };
}

export default App;
