import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import HomeImage from './home-image.jpeg'
import styles from './HomePage.module.css'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated, logOut } = useAuth()

  console.log(isAuthenticated)

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Calories App</Navbar.Brand>
          {isAuthenticated && (
            <Link to={routes.foodEntries()} className={styles.foodEntriesLink}>
              Food Entries
            </Link>
          )}

          <Nav className={styles.loginButtons}>
            {!isAuthenticated && (
              <>
                <Link to={routes.login()}>
                  <Button variant="primary">Login</Button>{' '}
                </Link>
                <Link to={routes.signup()}>
                  <Button variant="primary">SignUp</Button>{' '}
                </Link>
              </>
            )}
            {isAuthenticated && (
              <Button variant="primary" onClick={logOut}>
                Logout
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <img src={HomeImage} alt="" className={styles.homeImage} />
    </>
  )
}

export default HomePage
