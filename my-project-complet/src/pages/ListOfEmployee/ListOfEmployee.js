import React from 'react'
import { Link } from 'react-router-dom'
import List from '../../components/List'

import'./ListOfEmployee.css'

function ListOfEmployee() {
  return (
    <div className="body_container">
      <div className="redirection_box">
          <Link
            to="/createEmployee"
            className="redirection_current_employ"
          >
            <span>Form to Create a New Employee</span>
          </Link>
          <Link
            to="/"
            className="redirection_home"
          >
            <span>Home</span>
          </Link>
        </div>

      <div className="body_table">
        <h1>The table of the Current employees</h1>
        <List />
      </div>
    </div>
  )
}

export default ListOfEmployee
