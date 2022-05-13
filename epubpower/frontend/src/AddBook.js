import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";

import {getBooks} from "./API";

const client = filestack.init(AWeS7TV9qSWH5WYuTslyZz);


const AddBook = ({ onAdd }) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [bookId, setBookId] = useState(null);
  const [books, setBooks] = useState([])
  const [picker, setPicker] = useState(false)

  useEffect(() => {
    refreshBooks();
  }, [books.length]);

const handlePicker = () => {
  setPicker(!picker)
  if (picker) {
    client.picker().open()
    .then((res) => {
      setUrl(filesUploaded.url)
    })
    .then(() => onSubmit())
  }
  setPicker(!picker)
}
  const refreshBooks = () => {
    getBooks()
      .then((res) => {
        // console.log(res.data)
        setBooks([res.data]);
        // setName(res[0].name)
        // setGenre(res[0].genre)
        // setStarring(res[0].starring)
        // setMovieId(res[0].id)
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { title, author };
    // API.post("/", item).then(() => refreshBooks());
  };

  const onUpdate = (id) => {
    let item = { title };
    // API.patch(`/${id}/`, item).then((res) => refreshBooks());
  };

  const onDelete = (id) => {
    // API.delete(`/${id}/`).then((res) => refreshBooks());
  };

  function selectBook(id) {
    let item = books.filter((book) => book.id === id)[0];
    setTitle(item.title);
    setAuthor(item.author);
    setBookId(item.id);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Upload a new book</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>{bookId}Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFile">
              <Form.Label>File</Form.Label>
              <button onClick={() => handlePicker()}>
                Upload
              </button>
            </Form.Group>
            <div className="float-right">
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(bookId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => {
                return (
                  <tr key="">
                    <th scope="row">{book.id}</th>
                    <td> {book.title}</td>
                    <td>{book.author}</td>
                    <td>
                      <i
                        className="fa fa-pencil-square text-primary d-inline"
                        aria-hidden="true"
                        onClick={() => selectBook(book.id)}
                      ></i>
                      <i
                        className="fa fa-trash-o text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick={() => onDelete(book.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
