import React, { useState,useEffect } from "react";
import "./styles.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [releaseYear, setReleaseYear] = useState("")

  function toggleModal() {
    setIsOpen(!isOpen);
  }

 /* useEffect(() => {
    setTitle(item.title)
    setDescription(item.description)
    setImgUrl(item.imgUrl)
    setReleaseYear(item.releaseYear)
}, [item])
*/

const handleTitleChange = (e) => {
    setTitle(e.target.value)
}
const handleDescriptionChange = (e) => {
    setImgUrl(e.target.value)
}
const handleImgUrlChange = (e) => {
    setTitle(e.target.value)
}
const handleReleaseYearChange = (e) => {
    setReleaseYear(e.target.value)
}
const handleSave = () => {


    
}
//if(!show) {return null;}
  return (
    <div className="App">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}