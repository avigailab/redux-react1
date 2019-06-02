import React, { Component } from 'react';
import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'
import NewBook from '../containers/new-book'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
        <NewBook />
      </div>
    );
  }
}
