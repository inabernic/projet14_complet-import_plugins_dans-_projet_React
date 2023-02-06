import { Link } from 'react-router-dom'
import logo from '../../assets/logo.PNG'
import health from '../../assets/health.png'

import './Home.css'

function Accueil() {
   const employeesLocalStorage = localStorage.getItem('persist: user')
  console.log('local', employeesLocalStorage) 
  //for delete the data of localstorage
  //localStorage.clear();
  return (
    <div className="body">
      <div className="App-nav-vertical">
        <div className="box">
          <img
            src={logo}
            alt="logo hrnet"
            className="App-logo"
            width="100px"
            height="100px"
          />
          <p>
            Welcome to
          </p>
          <p className="nameOfCompany"> WEALTH HEALTH</p>
          <div className="boxOfRedirection">
            <div className="redirection">
              <Link
                to="/createEmployee"
                className="link"
              >
                <span>
                  Create a New Employee
                </span>
              </Link>
            </div>

            <div className="redirection">
              <Link
                to="/listEmployees"
                className="link"
              >
                <span>
                  The List Of Current Employees
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="App-body-plugins">
        <img src={health} alt=""/>
      </div>
    </div>
  )
}
export default Accueil