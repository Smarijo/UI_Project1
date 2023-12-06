import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Title from "../components/Title";
import Sidebar from "../components/Sidebar";
import './SearchResults.css'
import House from "../components/House";
import recipes from '../recipes.json';

function SearchResults(){
    const navigate = useNavigate();
    const params = useParams();
    const searchQuery = params.query;
    localStorage.setItem("searchParam", searchQuery);

    function filterData(recipes, searchQuery) {
        return recipes.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    };

    let filteredData = filterData(recipes, searchQuery);

    function handleClick() {
        navigate("/search");
    }

    // sample button for filtering in search
    // function handleSimpleClick(){
    //     filteredData = filterData(recipes.info.complexity, "simple");
    // }


    return (
            <>
                <div className="Search" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>
                <div>
                    <House></House>
                    <br></br>
                    <Title> </Title> 
                    <br></br>
                    <button2 type="submit" onClick={handleClick}>
                        Back to Search
                    </button2>
                    <br></br>
                    <p><b>Search results for {params.query}:</b></p>
                </div>
                {/* <button4 type="submit" onClick={handleSimpleClick}>
                        Complexity = Simple
                </button4> */}
                <div className="container">
                        {filteredData?.map((item) => (
                                <Link to={`/recipe/${item.name}`}>
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