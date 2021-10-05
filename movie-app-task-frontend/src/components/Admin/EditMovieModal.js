import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Modal, Button , Form} from 'react-bootstrap'

const EditMovieModal = ({ item, onItemChange,show, handleClose,...rest }) => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(() => {
        setTitle(item.title)
        setBody(item.description)
    }, [item])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleSave = () => {
        console.log(item._id, title, body);
        const article = { title: title, description: '', body: body };
        axios.post(`http://localhost:5000/article/update/${item._id}`, article)
        .then(response => this.setState({ articleId: response.data._id }));

        handleClose()
    }

    if(!show) {return null;}



  return <Modal {...rest} show={show} onHide={handleClose} bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-lg">Edit Article</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Group controlId="formBasicTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder={item.title} onChange={handleTitleChange} value={title}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Text</Form.Label>
    <Form.Control  as="textarea" rows={3} placeholder={item.body} onChange={handleBodyChange} value={body}/>
  </Form.Group>
    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>

  </Modal>
}

export default EditMovieModal