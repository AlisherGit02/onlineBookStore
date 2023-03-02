import React, { Component } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import BookCard from "../containers/BookCard";
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";
import "../App.css";

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <div className="bottom">
          <Menu />
        </div>
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
