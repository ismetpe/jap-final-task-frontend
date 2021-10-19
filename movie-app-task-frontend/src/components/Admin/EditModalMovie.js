import React, { useState,useEffect } from "react";
import "./EditModalMovie.css";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function EditModalMovie(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(props.movieTitle);
  const [description, setDescription] = useState(props.movieDescription);
  const [imageURL, setImageURL] = useState(props.movieImage);
  const [releaseYear, setReleaseYear] = useState(props.movieReleaseYear);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
function saveEditedData(){
  return axios.post(`https://localhost:5001/api/admin/edit_movie?id=` + props.movieId, {title : title, description : description,img_url : imageURL, release_year : releaseYear}).then((response) => {
    console.log(response.data);

    if (response.status === 200) {
    alert("You have successfully edited movie");
    }


  })   .catch(function (error) {
    console.log(error.toJSON());
  });
 
}
 /* useEffect(() => {
    setTitle(item.title)
    setDescription(item.description)
    setImgUrl(item.imgUrl)
    setReleaseYear(item.releaseYear)
}, [item])
*/


const handleSave = () => {


    
}
//if(!show) {return null;}
  return (
    <div className="App">
      <button onClick={toggleModal}>Edit</button>
 
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
  
          Title:
          <input
            name="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required />

          Description:
          <input
            name="description"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
             />
        

          Image url: 
          <input
            name="imgurl"
            type="text"
            value={imageURL}
            onChange={e => setImageURL(e.target.value)}
            required
             />
  
          Release year:
          <input
            name="releaseYear"
            type="text"
            value={releaseYear}
            onChange={e => setReleaseYear(e.target.value)}
            required
             /> 
         <button onClick={saveEditedData}>Save</button>  
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}