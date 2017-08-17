
import React, { Component } from "react";
import { connect } from "react-redux";
import { add_book } from "../redux/books";
import { bindActionCreators } from "redux";

class AddBook extends Component {

  constructor(props){
    super(props);
    this.state = {
      title:'',
      pages:'',
    }
  }

  addBook(){
    let {title,pages} = this.state;
    title = title.trim();
    pages = pages.trim();
    if(title && pages)
      this.props.add_book({title,pages})

    this.setState({title:'',pages:''})
  }


  render() {
    return (
      <div>
      <input 
       ref='title'
       placeholder = 'title'
       onChange={(e)=>this.setState({title:e.target.value})}
       value = {(this.state.title)}
       />

       <input 
       ref='pages'
       placeholder = 'pages'
       onChange={(e)=>this.setState({pages:e.target.value})}
       value = {(this.state.pages)} 
       />

       <button onClick={()=>this.addBook()}>AddBook</button>
     </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ add_book }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddBook);