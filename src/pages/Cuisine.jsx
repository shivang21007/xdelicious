import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import {useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { API_KEY } from '../apikey';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();


    const getCuisine = async (name, API_KEY) => {

        const data = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=20&cuisine=${name}
        `);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    // const getCuisine = async (name) => {

    //     const check = localStorage.getItem(name);


    //     if(check){
    //       setCuisine(JSON.parse(check));
    //      }else{
    //       const api = await fetch(
    //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=e4a32db3b8b3459b87768ea4503c7a03&number=20&cuisine=${name}`
    //       );

    //       const data = await api.json();


    //       localStorage.setItem(name, JSON.stringify(data.recipes));
    //       setCuisine(data.recipes);
    //       console.log(data.recipes);
    //     }
    //   };


    useEffect(() => {
        getCuisine(params.type, API_KEY);
        //console.log(params.type);
    }, [params.type]);

    return (
        <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            {
            cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>

    );
};

const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 1rem;
`;

const Card = styled.div`
img{
width 100%;
border-radius: 2rem;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
  
}
`;



export default Cuisine;