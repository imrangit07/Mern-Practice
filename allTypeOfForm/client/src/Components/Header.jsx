import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div style={{backgroundColor:"gray"}}>
        <Link to="/home">Home</Link> || 
        {/* <Link to="/insert">Insert</Link> */}
    </div>
  )
}

export default Header