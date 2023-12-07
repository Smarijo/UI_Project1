import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Recipe.css';
import Recipe from '../pages/Recipe';

function RecipeResult() {

    const navigate = useNavigate();
    const params = useParams();
    params.name = (params.name).replace('%20', ' ');

    function handleClick() {
        var result = localStorage.getItem("searchParam");
        navigate(`/results/${result}`);
    }

    return (
        <>
            <button2 type="submit" onClick={handleClick} >
                Back to Search Results
            </button2>
            <Recipe></Recipe>
        </>
    );
}

export default RecipeResult;