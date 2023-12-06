import Title from "../components/Title";
import HomeText from "../components/HomeText";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import { useNavigate, Link } from 'react-router-dom';
import values from '../recipes.json';

function Home() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/search");
  }

  // let ata = filterData(recipes, searchQuery);

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
        <form onSubmit={handleClick}>
          <button type="submit">Search</button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ color: 'rgb(0, 0, 0)', fontSize: '30px' }}>Explore Recipes</h1>
        <div className="container">
          {values?.map((item) => (
            <Link to={`/recipe/${item.name}`}>
              <div className="card">
                <p><h5 className="card-title">{item.name}</h5>
                  <img className="card-img-top" src={item.info.img_url} alt="" /></p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;