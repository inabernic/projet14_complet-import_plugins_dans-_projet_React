import React from 'react'
import { Link } from 'react-router-dom'
import Formulaire from '../../components/Formulaire'

import './CreateEmployee.css'

function CreateEmployee() {
  return (
    
      <div className="body_container">
        <div className="redirection_box">
          <Link
            to="/listEmployees"
            className="redirection_current_employ"
          >
            <span>View current employees</span>
          </Link>
          <Link
            to="/"
            className="redirection_home"
          >
            <span>Home</span>
          </Link>
        </div>
        <div className="container">
        <h1> The Form for Create a New Employee  </h1>
        <Formulaire />
      </div>
    </div>
  )
}

export default CreateEmployee