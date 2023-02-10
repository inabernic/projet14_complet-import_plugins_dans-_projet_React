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
        <div className="title"> The Form for Create a New Employee  </div>
        <Formulaire />
      </div>
    </div>
  )
}

export default CreateEmployee