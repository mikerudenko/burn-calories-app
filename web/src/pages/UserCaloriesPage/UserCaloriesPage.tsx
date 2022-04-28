import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UserCaloriesPage = () => {
  return (
    <>
      <MetaTags title="UserCalories" description="UserCalories page" />

      <h1>UserCaloriesPage</h1>
      <p>
        Find me in <code>./web/src/pages/UserCaloriesPage/UserCaloriesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>userCalories</code>, link to me with `
        <Link to={routes.userCalories()}>UserCalories</Link>`
      </p>
    </>
  )
}

export default UserCaloriesPage
