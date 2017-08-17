import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { editBook } from "../redux/books";



class BookDetail extends Component {
  constructor(props){
    super(props);
    console.log('sadfd')
    this.state = {
      disabled:'disabled',
      title:props.book.title,
      pages:props.book.pages
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({title:newProps.book.title,pages:newProps.book.pages})
  }

 editSave() {
    if(!this.state.disabled){
      let title = this.state.title,
      pages = this.state.pages;

      let index = this.props.books.findIndex((each) => (each.title == this.props.book.title));
      if(title || pages)
        this.props.editBook({title:title,pages:pages,index})
    }
    this.setState( {disabled: !this.state.disabled} )
  } 
  render() {
    if (!this.props.book.title) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3> <button onClick={()=>this.editSave()}>{(this.state.disabled)? "Edit" : "Save"}</button>
        <div>Title:{(this.state.disabled)?
                                          <span>{this.props.book.title}</span>
                                         : 
                                          <input 
                                           ref='title'
                                           onChange={(e)=>this.setState({title:e.target.value})}
                                           value = {(this.state.title)}
                                           
                                           />
                   }
        </div>
        <div>Pages:{(this.state.disabled)?
                                          <span>{this.state.pages}</span>
                                         : 
                                          <input
                                           ref='pages'
                                           onChange={(e)=>this.setState({pages:e.target.value})}
                                           value ={(this.state.pages)}
                                           />
                    }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
    books:state.books
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editBook }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookDetail);