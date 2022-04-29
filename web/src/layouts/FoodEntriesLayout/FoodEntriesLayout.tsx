import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { Container } from 'react-bootstrap'

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
          <Link
            to={routes.newFoodEntry()}
            className="rw-button rw-button-green"
          >
            <div className="rw-button-icon">+</div> New FoodEntry
          </Link>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </Container>
  )
}

export default FoodEntriesLayout
