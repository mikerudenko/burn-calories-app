import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Container, Nav, Navbar } from 'react-bootstrap'
// @ts-ignore
import HomeImage from './home-image.jpeg'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Calories App</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={routes.login()}>
              <Nav.Link href="#">Login</Nav.Link>
            </Link>
            <Link to={routes.signup()}>
              <Nav.Link href="#">SignUp</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <img src={HomeImage} alt="" className={styles.homeImage} />
    </>
  )
}

export default HomePage
