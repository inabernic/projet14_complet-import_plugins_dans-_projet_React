import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { addEmployee } from '../store/user'
import { optionStates, optionDepartment } from './../data/data'

//modal
//import Modal from 'react-modal';
import {Modal} from '@bernic/npm-modal'

//dataPicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

//dropdown
import Select from 'react-select'
import { format } from 'date-fns'


function FormHRnet() {
  //redux
  const dispatch = useDispatch()
  //reference formulaire
  const form = useRef(null)
  // use useForm
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm()
console.log(errors);

  //format date datepicker
  const dateFormated = (date) => {
    return `${format(new Date(date), 'dd/MM/yyyy')}`
  }

  // opening  of the modal
 const [displayModal, setDisplayModal] = useState(false);

 function openModal() {
  setDisplayModal(true);
   console.log("functioa openModal"+displayModal)
 }

 function closeModal() {
  setDisplayModal(false);
 }

  //submite button
  const createEmployee = (data) => {
    //verication of the form
     if (isValid) {
      const formatData = {
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: dateFormated(data.birthDate),
        startDate: dateFormated(data.startDate),
        street: data.street,
        city: data.city,
        state: data.state.value,
        zipCode: parseInt(data.zipCode),
        department: data.department.value,
      }
      openModal()
      //visibility of the employee list
      dispatch(addEmployee(formatData))

      //localstorage logic for persist redux
      //1. retrieve what actually is in the store
      //2. add the new employee (FormatData)
      //3. on the refresh , keep the localstorage

      localStorage.setItem(
        'persist:user',
        JSON.stringify('formatData', formatData)
      ) 
      reset({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        zipCode: null,
        department: ''
      })
      //condition for open the modal
    } else {
      console.log(data)
      alert('form inalid')
      console.log('The form is incomplete !')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(createEmployee)} ref={form} >
        <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Your First Name, min 2 and max 10 characters"
            {...register(
            'firstName',
            { required: true },
            { pattern: /^[A-zÀ-ú-]{2,10}$/ }
            )}
          />
        {errors.firstName && (
          <span className="style_messageError">Firstname must contain upper and lower case </span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Your Last Name, min 2 and max 10 characters"
          {...register(
            'lastName',
            { required: true },
            { pattern: /^[A-zÀ-ú-]{2,10}$/ }
          )}
        />
        {errors.lastName && (
          <span className="style_messageError">Last Name must contain upper and lower case</span>
        )}

        <label htmlFor="birthDate">Date of Birth</label>
        <div className="flex">
          <Controller
            control={control}
            name="birthDate"
          
            rules={{ required: 'BirthDate required, dd/MM/yyyy' }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                id="birthDate"
              />
            )}
          />
        </div>
        <span className="style_messageError">
          {errors.birthDate && errors.birthDate.message}
        </span>

        <label htmlFor="startDate">Start Date</label>
        <div className="flex">
          <Controller
            control={control}
            name="startDate"
            rules={{ required: 'StartDate required, dd/MM/yyyy ' }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                id="startDate"
              />
            )}
          />
        </div>
        <span className="style_messageError">
          {errors.startDate && errors.startDate.message}
        </span>

        <fieldset className="container_adress">
          <legend>Adress</legend>
          <div className="legend_Adress">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              placeholder="Your Street Name"
              {...register(
                'street',
                { required: true },
                { pattern: /^[A-zÀ-ú-]{2,}$/ }
              )}
            />
            {errors.street && (
              <span className="style_messageError">Street must contain upper and lower case, min 2  characters</span>
            )}
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Your City"
              {...register(
                'city',
                { required: true },
                { pattern: /^[A-zÀ-ú-]{2,}$/ }
              )}
            />
            {errors.city && (
              <span className="style_messageError">City must contain upper and lower case, min 2 characters</span>
            )}
            <label htmlFor="state">State</label>
            <Controller
              name="state"
              id="state"
              control={control}
              defaultValue=""
              rules={{ required: 'Select a state' }}
              render={({ field }) => (
                <Select
                  options={optionStates}
                  {...field}
                  label="Text field"
                  inputId="state"
                  
                />
              )}
            />
            <span className="style_messageError">
              {errors.state && errors.state.message}
            </span>

            <label htmlFor="zipcode">Zip Code</label>
            <input
              type="number"
              id="zipCode"
              placeholder="Your Zip Code"
              {...register('zipCode', { required: true })}
            />
            <div>
            {errors.zipCode && (
             <span className="style_messageError">Zip Code incorrect</span>
            )}</div>
          </div>
        </fieldset>
        <label htmlFor="department">Department</label>
        <Controller
          name="department"
          control={control}
          defaultValue=""
          rules={{ required: 'Select a department' }}
          render={({ field }) => (
            <Select
              options={optionDepartment}
              {...field}
              label="Text field"
              inputId="department"
              id="department"
            />
          )}
        />
        <span className="style_messageError">{errors.department && errors.department.message}</span>

        <button type="submit" onSubmit={() => setDisplayModal(true)} > Save </button>
      </form>
            <Modal  className="style-modal" message="The employee has been created !" showModal={displayModal}        hideModal={() => closeModal(false)} buttonOk='Ok'/>
    </div>
  )
}

export default FormHRnet
