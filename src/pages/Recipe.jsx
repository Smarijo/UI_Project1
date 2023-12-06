import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import values from '../recipes.json';
import './Recipe.css';
import House from '../components/House';
import Sidebar from '../components/Sidebar';

function Recipe(){

    const navigate = useNavigate();
    const params = useParams();
    const urlparam = params;
    params.name = (params.name).replace('%20', ' ');
    var allergies = "";
    var cookTime = "";
    var allIngredients = "";
    var allSteps = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i].name == params.name) {
            var title = values[i].name;
            var img_url = values[i].info.img_url;
            var description = values[i].info.description;
            var ingredients = values[i].info.ingredients;
            var allergens = values[i].info.allergens;
            var time = values[i].info.time;
            var complexity = values[i].info.complexity;
            var steps = values[i].info.steps
        }
    };

    if (allergens != []){
        for (let i = 0; i < allergens.length; i++) {
            allergies += (allergens[i])
            if (i != (allergens.length-1)) {
                allergies += (', ')
            }
        }
    }
    else {
        allergies = "None"
    };

    if (ingredients != []){
        for (let i = 0; i < ingredients.length; i++) {
            allIngredients += ("- " + ingredients[i])
            if (i != (ingredients.length-1)) {
                allIngredients += ('\n')
            }
        }
    }
    else {
        allIngredients = "None"
    };

    if (time = 1) {
        cookTime = time.toString() + " hour";
    }
    else if (time < 5) {
        cookTime = time.toString() + " hours";
    }
    else {
        cookTime = time.toString() + " minutes";
    };

    if (steps != []){
        for (let i = 0; i < steps.length; i++) {
            allSteps.push(
                <>
                <p4><i>{steps[i].title}:</i></p4>
                <br></br>
                <p4>{steps[i].desc}</p4>
                <br></br>
                <br></br>
                </>
            )
        }
    }
    else {
        allSteps.push(
            <p4>None</p4>
        )
    };

    function handleClick() {
        console.log(localStorage.getItem("searchParam"))
        var result = localStorage.getItem("searchParam");
        console.log(result)
        navigate(`/results/${result}`);
    }

    return ( 
        <>
        <House></House>
        <button2 type="submit" onClick={handleClick} style={{ position: 'fixed', right: '175px' }}>
                        Back to Search Results
        </button2>
        <Sidebar></Sidebar>
        <br></br>
        <h1>{title}</h1>
        <br></br>
        <div className='recipe-info' style={{ overflowX: 'hidden' }}>
        <p><h3>{description}</h3></p>
        <br></br>
        <img className="recipe-img" src={img_url} alt="" />
        <p>Time: {cookTime}</p>
        <p>Complexity: {complexity}</p>
        <div className='allergies'>
            <br></br>
            <p3><b>Allergens: {allergies}</b></p3>
            <br></br>
        </div>
        <br></br>
        <p><b>Ingredients: </b></p><p3><pre>{allIngredients}</pre></p3>
        <br></br>
        <div style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto', alignItems: 'left' }}>
        <p><b>Steps: </b></p>{allSteps}
        </div>
        </div>
        </>
      );
  }
  
  export default Recipe;