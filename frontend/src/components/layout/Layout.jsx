import { Container } from 'react-bootstrap';
import {Outlet} from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
        <Outlet/>
      </Container>
    </main>
    <Footer/>
  </>
  )
}

export default Layout;