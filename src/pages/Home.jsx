import Title from "../components/Title";
import HomeText from "../components/HomeText";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";

function Home(){
  
  return ( 
    <>
      <div className="Home" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
          <div>
            <br></br>
            <Title> </Title> 
            <HomeText></HomeText>
            <br></br>
            <SearchBar></SearchBar>
          </div>
    </>
    );
}

export default Home;