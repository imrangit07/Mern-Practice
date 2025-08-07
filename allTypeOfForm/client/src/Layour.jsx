import {Outlet} from  'react-router-dom';
import Header from './Components/Header';

const Layour = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layour