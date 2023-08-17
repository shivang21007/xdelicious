import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { API_KEY } from '../pages/apikey';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchinfo = async (id, API_KEY) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );

        const detailData = await data.json();
        setDetails(detailData);
        //console.log(detailData);
    };

    useEffect(() => {
        fetchinfo(params.id, API_KEY);
    }, [params.id]);


    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                >Instructions
                </Button>
                <Button
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >Ingredients
                </Button>
                {activeTab === "instructions" && (
                <div>
                    <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                    <h1>Instructions -</h1>
                    <h2 dangerouslySetInnerHTML={{ __html: details.instructions }}></h2>
                </div>
                )}
                {activeTab === "ingredients" && (
                <ol>
                    {details.extendedIngredients.map((e) => (
                        <li key={e.id}> {e.original}</li>
                    ))}
                </ol>
                )}
            </Info>
            
        </DetailWrapper>
    );
};

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;

.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
h2{
    margin: 1rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ol{
    margin-top: 2rem;
}
`;

const Button = styled.button`

padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
cursor: pointer;
`;

const Info = styled.div`
margin-left: 5rem;
`;

export default Recipe;