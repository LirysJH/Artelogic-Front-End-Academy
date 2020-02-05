import React from 'react';
import './App.css';
import InterfaceSection from './Interface/interface.jsx';
import SearchForm from './BookSearch/bookSearch.jsx';

const app = () => {
  return (
    <div className="App">
      <SearchForm />
      <InterfaceSection />
    </div>
  );
}

export default app;
