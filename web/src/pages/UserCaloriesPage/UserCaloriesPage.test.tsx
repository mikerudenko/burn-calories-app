import { render } from '@redwoodjs/testing/web'

import UserCaloriesPage from './UserCaloriesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserCaloriesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserCaloriesPage />)
    }).not.toThrow()
  })
})
