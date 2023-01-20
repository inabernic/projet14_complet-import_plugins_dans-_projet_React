import * as React from "react";
import logo from"./../../assets/logo.PNG";

import './home.css';

function Home() {
  return (
<div className="body">
<div className="App-nav-vertical">
  <img src={logo} className="App-logo" alt="logo" />
  <p>Welcome to</p>
  <p className="nameOfCompany">WEALTH HEALTH</p>

  <a
    className="link form"
    href="#form_create_employee"
  >
    Create a New Employee (plugin: date_picker, tables_données, modal)
  </a>
  <aside className="modal"  /* style="display:none;"  */ aria-hidden="true" role="dialog" aria-labelledby="titlemodal" >
    <div className="modal-wrapper">
    <a href="#form_create_employee" className="modal_close"> X </a>
      <div className="container">
        <p> Create Employee  HRnet </p>
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your First Name" />

          <label htmlFor="sujet">Last Name</label>
          <input type="text" id="lname" name="sujet" placeholder="Your Last Name" />

          <label htmlFor="date">Date of Birth</label>
          <input id="date" type="date" name="date" placeholder="Your birthday" />
{/* 
          <label htmlFor="date">Start Date</label>
          <input id="date" type="date" name="date" placeholder="Your STar Day" />
 */}

<fieldset className="address">
<legend>Address </legend>
           <label htmlFor="streat">Street</label>
          <input type="text" id="streat" name="streat" placeholder="Your Street Name" />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="Your City" />

           <label htmlFor="state">State<br></br>
           <select name="selectedState">
           <option valeur="fr">Français</option>
           <option valeur="nl">Néerlandais</option>
           <option valeur="en">Anglais</option>
           <option valeur="other">Alabama</option>
           </select>
           </label>

          {/* <label htmlFor="zcode">Zip Code</label>
          <input type="text" id="zcode" name="zcode" placeholder="Your Zip Code" /> */}
     </fieldset>

          <label id="departement" htmlFor="state">Departement<br></br>
           <select name="selectedDepartement">
           <option valeur="">Sales</option>
           <option valeur="">Marketing</option>
           <option valeur="">Engineering</option>
           <option valeur="">Human Resources</option>
           <option valeur="">Legal</option>
           </select>
           </label>

          <input type="submit" value="Envoyer" />
        </form>
      </div>

    </div>
  </aside>

  <a
    className="link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Current Employees table (plugin: menu deroulant)
  </a>
</div>

<div className="App-body-plugins">


</div>

</div>
  );
}
export default Home;