import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import Sidebar from "../components/Sidebar";
import  from "../components/";

function Search(){

    return ( 
    <>
      <div className="Search" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
          <div>
            
            <br></br>
            <Title> </Title> 
            <br></br>
            <SearchBar></SearchBar>
            <br></br>
          </div>
    </>
    );
}

export default Search;