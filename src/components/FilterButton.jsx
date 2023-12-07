import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Title from "../components/Title";
import Sidebar from "../components/Sidebar";
import '../pages/SearchResults.css'
import recipes from '../recipes.json';

function FilterButton() {
    const navigate = useNavigate();
    const params = useParams();
    const searchQuery = params.query;
    const filter1 = params.filter1;
    let filteredData = []


    function filterData(recipes, searchQuery, filter1) {
        return recipes.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())).filter(item => item.info.complexity.includes(filter1.toLowerCase()));
    };


    filteredData = filterData(recipes, searchQuery, filter1);

    function handleClick() {
        navigate("/search");
    }

    // const handleSimpleClick = () => {
    //     navigate(`/results/${searchQuery}/simple`);
    // }

    // const handleInterClick = () => {
    //     navigate(`/results/${searchQuery}/intermediate`);
    // }

    // const handleDiffClick = () => {
    //     navigate(`/results/${searchQuery}/difficult`);
    // }

    // const handleLT30Click = () => {
    //     navigate(`/results/${searchQuery}/lessthan30min`);
    // }

    // const handle3060Click = () => {
    //     navigate(`/results/${searchQuery}/30to60min`);
    // }

    // const handleGT60Click = () => {
    //     navigate(`/results/${searchQuery}/morethan60min`);
    // }

    switch (filter1) {
        case "simple":
            const handleSimpleClick = () => {
                navigate(`/results/${searchQuery}`);
            }

            const handleInterClick = () => {
                navigate(`/results/${searchQuery}/intermediate`);
            }

            const handleDiffClick = () => {
                navigate(`/results/${searchQuery}/difficult`);
            }
            return (
                <>
                    <div className="Search" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div>
                        
                        <br></br>
                        <Title> </Title>
                        <br></br>
                        <button2 type="submit" onClick={handleClick} style={{ position: 'fixed', right: '175px' }}>
                            Back to Search
                        </button2>
                        <br></br>
                        <p><b>Search results for {params.query}:</b></p>
                        <br></br>
                        <p>Filters: Choose one complexity and/or one time amount</p>
                        <br></br>
                        <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}>
                            <button4 type="submit" onClick={handleSimpleClick} style={{ border: 'solid', borderColor: '#058576', backgroundColor: "#FFFFFF" }}>
                                <b style={{ color: '#058576' }}>Complexity: Simple</b>
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
        case "intermediate":
            const handleSimpleIntClick = () => {
                navigate(`/results/${searchQuery}/simple`);
            }

            const handleInterIntClick = () => {
                navigate(`/results/${searchQuery}`);
            }

            const handleDiffIntClick = () => {
                navigate(`/results/${searchQuery}/difficult`);
            }
            return (
                <>
                    <div className="Search" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div>
                        
                        <br></br>
                        <Title> </Title>
                        <br></br>
                        <button2 type="submit" onClick={handleClick} style={{ position: 'fixed', right: '175px' }}>
                            Back to Search
                        </button2>
                        <br></br>
                        <p><b>Search results for {params.query}:</b></p>
                        <br></br>
                        <p>Filters: Choose one complexity and/or one time amount</p>
                        <br></br>
                        <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}>
                            <button4 type="submit" onClick={handleSimpleIntClick} >
                                Complexity: Simple
                            </button4>
                            <button4 type="submit" onClick={handleInterIntClick} style={{ border: 'solid', borderColor: '#058576', backgroundColor: "#FFFFFF" }}>
                                <b style={{ color: '#058576' }}>Complexity: Intermediate</b>
                            </button4>
                            <button4 type="submit" onClick={handleDiffIntClick}>
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
        case "difficult":
            const handleSimpleDiffClick = () => {
                navigate(`/results/${searchQuery}/simple`);
            }

            const handleInterDiffClick = () => {
                navigate(`/results/${searchQuery}/intermediate`);
            }

            const handleDiffDiffClick = () => {
                navigate(`/results/${searchQuery}`);
            }
            return (
                <>
                    <div className="Search" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div>
                        
                        <br></br>
                        <Title> </Title>
                        <br></br>
                        <button2 type="submit" onClick={handleClick} style={{ position: 'fixed', right: '175px' }}>
                            Back to Search
                        </button2>
                        <br></br>
                        <p><b>Search results for {params.query}:</b></p>
                        <br></br>
                        <p>Filters: Choose one complexity and/or one time amount</p>
                        <br></br>
                        <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}>
                            <button4 type="submit" onClick={handleSimpleDiffClick}>
                                Complexity: Simple
                            </button4>
                            <button4 type="submit" onClick={handleInterDiffClick}>
                                Complexity: Intermediate
                            </button4>
                            <button4 type="submit" onClick={handleDiffDiffClick} style={{ border: 'solid', borderColor: '#058576', backgroundColor: "#FFFFFF" }}>
                                <b style={{ color: '#058576' }}>Complexity: Difficult</b>
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
        default:

            return (
                <>
                    <div className="Search" id="outer-container">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                    <div>
                        
                        <br></br>
                        <Title> </Title>
                        <br></br>
                        <button2 type="submit" onClick={handleClick} style={{ position: 'fixed', right: '175px' }}>
                            Back to Search
                        </button2>
                        <br></br>
                        <p><b>Search results for {params.query}:</b></p>
                        <br></br>
                        <p>Filters: Choose one complexity at a time</p>
                        <br></br>
                        <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}>
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
}

export default FilterButton;