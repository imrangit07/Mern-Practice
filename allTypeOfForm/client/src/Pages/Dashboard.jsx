import {Link,Outlet} from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <div>
        <Link to="/dashboard/insert">Insert</Link>
    </div>
    <div>
        <Outlet/>
    </div>
    
    </>
  )
}

export default Dashboard