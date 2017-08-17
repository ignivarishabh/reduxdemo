import React, { Component,PropTypes } from "react";


export const EachBook = (props) => {

  return (
       <li className="list-group-item">
        <p style={{cursor:'pointer'}} onClick={() => props.selectBook()}>{props.book.title}</p>
        <button style={{cursor:'pointer'}} onClick={()=>props.delBook()}>Delete</button>

        </li>
  )
}

EachBook.PropTypes = {
  book: PropTypes.func.isRequired,
  selectBook: PropTypes.func,
  
};