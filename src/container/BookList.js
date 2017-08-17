
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../redux/ActiveBook";
import  {EachBook}  from "../components/EachBook";
import { get_books,delBook } from "../redux/books";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map((book,index) => {
      return <EachBook key={book.title}
                       book = {book}
                       selectBook ={()=> this.props.selectBook(book) }
                       delBook = {()=> this.props.delBook({index})}
                        />
    });
  }
  componentWillMount(){
    this.props.get_books()
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook,get_books,delBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);