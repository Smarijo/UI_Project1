import profiles from '../profiles.json'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

function Profiles() {

  let names = []

  for (let i = 0; i < profiles.length; i++) {
    names.push(
      <tr key={profiles[i].name + "-" + "-" + i}>
        <td >
          <Link to={`/profiles/${profiles[i].name}/home`} style={{ color: 'black' }}>
            <p>
              {profiles[i].name}</p>
          </Link>
          <br></br>
        </td>
      </tr>
    )
  }

  return (
    <>
      <div className="Home" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div>
        <br></br>
        <Title> </Title>
        <br></br>
        <br></br>
        <p><b>Profiles</b></p>
        <br></br>
        <br></br>
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
          <table className="table table-hover">
            <tbody>
              {names}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
};

export default Profiles;