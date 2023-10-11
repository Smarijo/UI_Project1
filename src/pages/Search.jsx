import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import Sidebar from "../components/Sidebar";
import House from "../components/House";

function Search(){

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
            <SearchBar></SearchBar>
            <br></br>
          </div>
    </>
    );
}

export default Search;