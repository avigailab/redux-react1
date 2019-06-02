import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addBookAction} from '../actions/select-book-action'
import { bindActionCreators } from 'redux'

class BookList extends Component {

    inputChanged(e) {
        console.log(e.target.value);
    }

    render() {
        return (
           <div>
               <label className="col-xs-4">Book Name:</label>
               <input  className="col-xs-4" type="text" onChange={this.inputChanged.bind(this)}/>
               <button className="col-xs-4" onClick={() => this.props.addBook('asas')}> Add new book</button>
           </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addBook: addBookAction }, dispatch)
}

function mapStateToProps(state) {
    return { books: state.books }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)