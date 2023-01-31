import * as React from "react";
import logo from "./../../assets/logo.PNG";

import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//import {Datatable} from 'react-datatable';

//pagination
//import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import {Pagination} from '@primer/react'

//import {Modal} from '@bernic/npm-modal';

import './home.css';

function Home() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [ zipCode, setZipCode] = useState("")
    const [departement, setDepartement] = useState("")
  

    interface FormDataType {firstName:string, lastName: string, birthDate:date, startDate:date, street:string, state:string, zipCode:zipCode, departement: string}
    const responseBody: FormDataType = {firstName: "", lastName: "", birthDate: "", startDate:"", city:"", state:"", zipCode:"", departement:""}

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.firstName = firstName
        responseBody.lastName = lastName
        responseBody.birthDate = birthDate
        responseBody.startDate = startDate
        responseBody.street = street
        responseBody.city = city
        responseBody.state = state
        responseBody.zipCode = zipCode
        responseBody.departement = departement

        console.log(JSON.stringify(responseBody))
    }
    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }

    //pagination
    const [page, setPage]  = useState("")
      const totalPages = 7
      const onPageChange = (evt, page) => {
        evt.preventDefault()
        setPage(page)
      }

//dropdown
const options = ['Français', 'Néerlandais', 'Anglais', 'Alabama'];
const departements = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];


//modale


//data-table
const handleAddFormSubmit = (event) =>{
  event.preventDefault();
  responseBody.firstName = firstName
  responseBody.lastName = lastName
  responseBody.birthDate = birthDate
  responseBody.startDate = startDate
  responseBody.street = street
  responseBody.city = city
  responseBody.state = state
  responseBody.zipCode = zipCode
  responseBody.departement = departement
} 


  return (
    <div className="body">
      <div className="App-nav-vertical">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to</p>
        <p className="nameOfCompany">WEALTH HEALTH</p>

        <a className="link form" href="#create_new_employee">
          Create a New Employee 
        </a>
        <aside id="create_new_employee" className="modal"  aria-hidden="true" role="dialog" aria-labelledby="titlemodal" >
          <div className="modal-wrapper">
            <a href="#form_create_employee" className="modal_close"> X </a>
            <div className="container">
              <p> Create Employee  HRnet </p>
              <form onSubmit={onSubmitHandler}>
                <label htmlFor="firstName">First Name</label>
                <input onChange={(e)=>inputChangeHandler(setFirstName, e)}type="text" id="fname" name="firstName" placeholder="Your First Name" />

                <label htmlFor="lastName">Last Name</label>
                <input onChange={(e)=>inputChangeHandler(setLastName, e)}  type="text" id="lname" name="lastName" placeholder="Your Last Name" />

                <label htmlFor="date">Date of Birth</label>
                <DatePicker selected={birthDate} type="date" onChange={(date) => setBirthDate(date)} />
             
          <label htmlFor="date">Start Date</label>
          <DatePicker selected={startDate} type="date" onChange={(date) => setStartDate(date)} />

                <fieldset className="address">
                  <legend>Address </legend>
                  <label htmlFor="streat">Street</label>
                  <input onChange={(e)=>inputChangeHandler(setStreet, e)} type="text" id="streat" name="streat" placeholder="Your Street Name" />

                  <label htmlFor="city">City</label>
                  <input onChange={(e)=>inputChangeHandler(setCity, e)}type="text" id="city" name="city" placeholder="Your City" />

                  <label  id="state" htmlFor="state">State<br></br>
            <Dropdown  id="state" options={options} className="state" onChange={setState} placeholder="Select your state" /></label>

              <label id="zcode" htmlFor="zcode">Zip Code</label>
          <input onChange={(e)=>inputChangeHandler(setZipCode, e)} type="text" id="zcode" name="zcode" placeholder="Your Zip Code" /> 
                </fieldset>

                <label id="departement" htmlFor="state">Departement<br></br>
                <Dropdown  id="departement" options={departements} className="departement" onChange={setDepartement} placeholder="Select your departement" />
                </label>
                <button type="submit"  className="modal-close-button"
                    >Save</button>
              </form>
            </div>

          </div>
        </aside>

        <a className="link table" href="#table" >
          Current Employees table 
        </a>
        <aside id="table" className="modal"   aria-hidden="true" role="dialog" aria-labelledby="titlemodal" >
          <div className="modal-wrapper CurentEmpl">
            <a href="#employees-table" className="modal_close"> X </a>
            <div className="containerCurentEmpl">
              <p> Current Employees </p>
              <div className="table-container">
<table onSubmit={handleAddFormSubmit}>
  <thead>
    <tr>
  {/*   <TablePaginationUnstyled  component="div" rowsPerPageOptions={[10, 50]}/> */}
    <th>First Name</th>
    <th>Last Name</th>
    <th>Start Date</th>
    <th>Departement</th>
    <th>Date of Birthday</th>
    <th>Street</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{firstName}</td> 
      <td>{lastName}</td>
      <td>{birthDate}</td>
      <td>{startDate}</td>
      <td>{street}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{zipCode}</td>
      <td>{departement}</td>
    </tr>
  </tbody>
</table>
<Pagination className="box-pagination" pageCount={totalPages} currentPage={page} onPageChange={onPageChange} />
</div>

              </div>
              </div>
              </aside>

      </div>
      <div className="App-body-plugins">
      </div>
    </div>
  );
}
export default Home;