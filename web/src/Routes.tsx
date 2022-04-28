// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import FoodEntriesLayout from 'src/layouts/FoodEntriesLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={FoodEntriesLayout}>
          <Route path="/food-entries/new" page={FoodEntryNewFoodEntryPage} name="newFoodEntry" />
          <Route path="/food-entries/{id:Int}/edit" page={FoodEntryEditFoodEntryPage} name="editFoodEntry" />
          <Route path="/food-entries/{id:Int}" page={FoodEntryFoodEntryPage} name="foodEntry" />
          <Route path="/food-entries" page={FoodEntryFoodEntriesPage} name="foodEntries" />
        </Set>
      </Private>
      <Route path="/admin-dashboard" page={AdminDashboardPage} name="adminDashboard" />
      <Route path="/user-calories" page={UserCaloriesPage} name="userCalories" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
