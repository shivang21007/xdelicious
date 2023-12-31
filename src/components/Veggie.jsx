import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { API_KEY } from '../pages/apikey';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';


function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie(API_KEY);
  }, []);

  const getVeggie = async (API_KEY) => {

    const check = localStorage.getItem('veggie');

    if(check){
      setVeggie(JSON.parse(check));
     }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20&tags=vegetarian`
      );
      
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      //console.log(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>

        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: "3rem",
        }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/'+recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient/>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>

      </Wrapper>
    </div>
  );
};


const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: rgb(238, 235, 235);
  text-shadow: 2px 2px rgba(170, 169, 169, 0.858));
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

`;

export default Veggie;