import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Title from "../components/Title";
import Sidebar from "../components/Sidebar";
import './SearchResults.css'
import recipes from '../recipes.json';

function SearchResults() {
    const navigate = useNavigate();
    const params = useParams();
    const searchQuery = params.query;
    localStorage.setItem("searchParam", searchQuery);
    // var complex = ""

    // console.log(recipes)

    function filterData(recipes, searchQuery) {
        // console.log(recipes)
        // if (searchQuery != "") {
            recipes = recipes.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            // console.log(item)
            // console.log(recipes)
        // }
        // if (complexity != "") {
        //     recipes = recipes.filter(item => item.info.complexity.includes(complex.toLowerCase()));
        //     console.log(recipes)
        // }

        return recipes
    };

    let filteredData = filterData(recipes, searchQuery);

    function handleClick() {
        navigate("/search");
    }

    const handleSimpleClick = () => {
        navigate(`/results/${searchQuery}/simple`);
    }

    const handleInterClick = () => {
        navigate(`/results/${searchQuery}/intermediate`);
    }

    const handleDiffClick = () => {
        navigate(`/results/${searchQuery}/difficult`);
    }

    // const handleLT30Click = () => {
    //     navigate(`/results/${searchQuery}/lessthan30min`);
    // }

    // const handle3060Click = () => {
    //     navigate(`/results/${searchQuery}/30to60min`);
    // }

    // const handleGT60Click = () => {
    //     navigate(`/results/${searchQuery}/morethan60min`);
    // }

    return (
        <>
            <div className="Search" id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div>
                
                <br></br>
                <Title> </Title>
                <br></br>
                <button2 type="submit" onClick={handleClick} >
                    Back to Search
                </button2>
                <br></br>
                <p><b>Search results for {params.query}:</b></p>
                <br></br>
                <p>Filters: Choose one complexity at a time</p>
                <br></br>
                <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}>
                <button4 type="submit" onClick={handleSimpleClick}>
                    Complexity: Simple
                </button4>
                <button4 type="submit" onClick={handleInterClick}>
                    Complexity: Intermediate
                </button4>
                <button4 type="submit" onClick={handleDiffClick}>
                    Complexity: Difficult
                </button4>
                {/* <button4 type="submit" onClick={handleLT30Click}>
                    Time: less than 30 min
                </button4>
                <button4 type="submit" onClick={handle3060Click}>
                    Time: 30-60 min
                </button4>
                <button4 type="submit" onClick={handleGT60Click}>
                    Time: more than 60 min
                </button4> 
                */}
                </div> 
            </div>
            {/* <FilterButton /> */}
            <div className="container">
                {filteredData?.map((item) => (
                    <Link to={`/results/recipe/${item.name}`}>
                        <div className="card">
                            <p><h5 className="card-title">{item.name}</h5>
                                <img className="card-img-top" src={item.info.img_url} alt="" /></p>
                        </div>
                    </Link>
                ))}
            </div>
        </>

    );
}

export default SearchResults;