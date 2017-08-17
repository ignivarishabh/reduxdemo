import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import  BookList from '../container/BookList';
import  BookDetails from '../container/BookDetails';
import  AddBook from '../container/addBook';


class Root extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AddBook/>
       <BookList/>
       <BookDetails/>
      </div>
    );
  }
}

export default Root;
