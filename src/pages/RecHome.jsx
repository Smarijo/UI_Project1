import Title from "../components/Title";
import HomeText from "../components/HomeText";
import Sidebar from "../components/Sidebar";
import { useNavigate, Link, useParams } from 'react-router-dom';
import values from '../recipes.json';
import profiles from '../profiles.json';
import ProfileButton from "../components/ProfileButton";

function RecHome() {

    const navigate = useNavigate();
    const params = useParams();
    let favs = []
    let filteredData = []
    let recRecipes = []

    function handleClick() {
        navigate("/search");
    }

    function filterData(values, searchQuery) {
        return values.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    };


    for (let i = 0; i < profiles.length; i++) {
        if (profiles[i].name == params.profile) {
            favs = profiles[i].favorites;
        }
    }

    if (favs.length == 0) {
        return (
            <>
                <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <ProfileButton />
                </div>
                <div>
                    <br></br>
                    <Title> </Title>
                    <br></br>
                    <p><b>Hello {params.profile}!</b></p>
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
                    <h1 style={{ color: 'rgb(0, 0, 0)', fontSize: '30px' }}>Recommendations</h1>
                    <div className="container">
                        {values?.map((item) => (
                            <Link to={`/recipe/${item.name}`}>
                                <div className="card">
                                    <p><h5 className="card-title">{item.name}</h5>
                                        <img className="card-img-top" src={item.info.img_url} alt="" /></p>
                                </div>
                            </Link>
                        ))}
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </>
        );
    }
    else {
        for (let j = 0; j < favs.length; j++) {
            filteredData.push(filterData(values, favs[j]))
        }

        for (let k = 0; k < filteredData.length; k++) {
            if (filteredData[k] != undefined) {
                recRecipes.push(filteredData[k])
            }
        }

        return (
            <>
                <div className="Home" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <ProfileButton />
                </div>
                <div>
                    <br></br>
                    <Title> </Title>
                    <br></br>
                    <p><b>Hello {params.profile}!</b></p>
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
                    <h1 style={{ color: 'rgb(0, 0, 0)', fontSize: '30px' }}>Recommendations</h1>
                    <div className="container">
                        {recRecipes?.map((item) => (
                            <Link to={`/recipe/${item[0].name}`}>
                                <div className="card">
                                    <p><h5 className="card-title">{item[0].name}</h5>
                                        <img className="card-img-top" src={item[0].info.img_url} alt="" /></p>
                                </div>
                            </Link>
                        ))}
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </>
        );
    }



}

export default RecHome;