import { useState } from 'react';
//import $ from "jquery";
import axios from "axios";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = event.target;
    axios.post("http://localhost:8000/PHP/srv.php", data).then(function(response){
      console.log(response.data)
      setResult(response.data);
    });
  }
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => handleChange(event)}/>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
    </div>
  )
}

export default App