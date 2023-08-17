//import styles from './mystyle.module.css';
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  };
  // return (
  //     <div className={styles.div} onSubmit={submitHandler} >
  //       <FaSearch className={styles.svg}>
  //         <input className={styles.input}
  //           onChange={(e) => setInput(e.target.value)}
  //           type="text"
  //           value={input}
  //         />
  //       </FaSearch>
  //     </div>
  // );

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input 
        onChange={(e) => setInput(e.target.value)} 
        type="text" placeholder="Made by Shivang ❤"
        value={input} 
        />
      </div>
    </FormStyle>
  );
}
const FormStyle = styled.form`
margin: 0.4rem 20rem;
padding: 0.5rem;

div{
  width: 100%;
  position: relative;
  
}
input {
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  width: 100%;
}

svg{
  position: absolute;
  top: 40%;
  left: 2%;
  transfrom: translate(100%, -50%);
  color: white;
}

`


export default Search;


