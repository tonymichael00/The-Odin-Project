import "./App.css";
import React from "react";
// import Books from "./components/Overview.js";
import uniqid from "uniqid";
//import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: ["title"],
      // author: [],
      // datePub: [],
      // isbn: [],
      books: [], // books: [
      //   ["a", "b", "c", "d"],
      //   ["e", "f", "g", "h"],
      // ],
    };
  }

  render() {
    return (
      <div>
        {console.table(this.state.books)}
        <div className="addBook">
          <form>
            {/* <form onSubmit> */}
            <label htmlFor="title">Title:</label>
            <input type="text" required />
            <label htmlFor="author">Author:</label>
            <input type="text" required />
            <label htmlFor="datePub">Date Published:</label>
            <input type="text" required />
            <label htmlFor="isbn">ISBN:</label>
            <input type="text" required />
            <button>Submit</button>
          </form>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>TITLE</td>
                <td>AUTHOR</td>
                <td>DATE PUB</td>
                <td>ISBN</td>
              </tr>
            </thead>
            <tbody>{/* <tr><Books id={books.id} /></tr> */}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
