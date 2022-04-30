import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { Container } from 'react-bootstrap'
import styles from './FoodEntriesLayout.module.css'

type FoodEntryLayoutProps = {
  children: React.ReactNode
}

const FoodEntriesLayout = ({ children }: FoodEntryLayoutProps) => {
  return (
    <Container>
      <div className="rw-scaffold">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.foodEntries()} className="rw-link">
              FoodEntries
            </Link>
          </h1>
          <div className={styles.headerButtons}>
            <Link
              to={routes.newFoodEntry()}
              className="rw-button rw-button-green"
            >
              <div className="rw-button-icon">+</div> New FoodEntry
            </Link>
            <Link to={routes.home()} className="rw-button rw-button-green">
              Home
            </Link>
          </div>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </Container>
  )
}

export default FoodEntriesLayout
