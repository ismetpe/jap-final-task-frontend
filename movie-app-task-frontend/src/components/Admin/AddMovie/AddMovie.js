import {React,useState} from 'react';
import './AddMovie.css'
import axios from 'axios';

export default function AddMovie(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
  
    const handleSubmit = (event) => {
        return axios.post(`https://localhost:5001/api/admin/add_movie`, {title : title, description : description,img_url : imageURL, release_year : releaseYear}).then((response) => {
            console.log(response.data);
            
            console.log(response.data);
            if (response.status === 200) {
            alert("You have successfully added movie");
            }
          })   .catch(function (error) {
            console.log(error.toJSON());
          });
      event.preventDefault();
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>Add new movie</h1>
  
        <label>
          Title:
          <input
            name="title"
            type="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required />
        </label>
        
        <label>
          Description:
          <input
            name="description"
            type="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required />
        </label>
        <label>
          Image url: 
          <input
            name="imgurl"
            type="imgurl"
            value={imageURL}
            onChange={e => setImageURL(e.target.value)}
            required />
        </label>
        
        <label>
          Release year:
          <input
            name="releaseYear"
            type="releaseYear"
            value={releaseYear}
            onChange={e => setReleaseYear(e.target.value)}
            required />
        </label>

        <button>Add</button>
      </form>
    );
}