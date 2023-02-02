import React from 'react'
import { useState, useRef } from 'react'

//modal
//import { Modal } from ''

//dataPicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

//dropdown
import Select from 'react-select'
import { format } from 'date-fns'

import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { addEmployee } from '../store/user'
import { optionStates, optionDepartment } from './../data/data'

function FormHRnet() {
  const [openModal, setOpenModal] = useState(false)
  //const message = `L'employé a été créé`
  const [message, setMessage] = useState('')
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
    defaultValues,
    formState: { errors, isValid },
  } = useForm()

  //format date datepicker
  const dateFormated = (date) => {
    return `${format(new Date(date), 'dd-MM-yyyy')}`
  }

  //submite button
  const createEmployee = (data) => {
    //verication of the form
    if (isValid) {
      const FormatData = {
        firstname: data.firstname,
        lastname: data.lastname,
        birthdate: dateFormated(data.birthdate),
        startdate: dateFormated(data.startdate),
        street: data.street,
        city: data.city,
        state: data.state.value,
        zipcode: parseInt(data.zipcode),
        department: data.department.value,
      }
      console.log(data)
      console.log(FormatData)
      //send to employee list
      dispatch(addEmployee(FormatData))

      //localstorage logic for persist redux
      //1. retrieve what actually is in the store
      //2. add the new employee (FormatData)
      //3. on the refresh , keep the localstorage

      //employeesLocalStorage.push(FormatData)
      localStorage.setItem(
        'persist:user',
        JSON.stringify('FormatData', FormatData)
      )
      // opening  of the modal and the message
      setOpenModal(true)
      setMessage(
        `Employee  ${data.firstname} ${data.lastname}  has been created `
      )
      reset({
        firstname: '',
        lastname: '',
        street: '',
        city: '',
        state: '',
        zipcode: null,
      })
    } else {
      console.log('incomplete form')
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(createEmployee)}
        ref={form}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Your First Name"
          {...register(
            'firstName',
            { required: true },
            { pattern: /^[A-zÀ-ú-]{2,10}$/ }
          )}
        />
        {errors.firstname && (
          <span className="style_messageError">Firstname must contain upper and lower case, min 2 and max 10 characters </span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Your Last Name"
          {...register(
            'lastName',
            { required: true },
            { pattern: /^[A-zÀ-ú-]{2,10}$/ }
          )}
        />
        {errors.lastname && (
          <span className="style_messageError">Last Name must contain upper and lower case, min 2 and max 10 characters</span>
        )}
        <label htmlFor="birthDate">Date of Birth</label>
        <div className="flex">
          <Controller
            control={control}
            name="birthDate"
            rules={{ required: 'BirthDate required' }}
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
          {errors.birthdate && errors.birthdate.message}
        </span>

        <label htmlFor="startdate">Start Date</label>
        <div className="flex">
          <Controller
            control={control}
            name="startdate"
            rules={{ required: 'StartDate required' }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                id="startdate"
              />
            )}
          />
        </div>
        <span className="style_messageError">
          {errors.startdate && errors.startdate.message}
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
              control={control}
              defaultValue=""
              rules={{ required: 'Select a state' }}
              render={({ field }) => (
                <Select
                  options={optionStates}
                  {...field}
                  label="Text field"
                  inputId="state"
                  id="state"
                />
              )}
            />
            <span className="style_messageError">
              {errors.state && errors.state.message}
            </span>

            <label htmlFor="zipcode">Zip Code</label>
            <input
              type="number"
              id="zipcode"
              placeholder="Your Zip Code"
              {...register('zipcode', { required: true })}
            />
            <div>
            {errors.zipcode && (
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
              id="departement"
            />
          )}
        />
        <span className="style_messageError">
          {errors.department && errors.department.message}
        </span>

        <button
          type="submit"
        >
          Save
        </button>
        {openModal 
        // && <Modal closeModal={setOpenModal} content={message} />
        } 
      </form>
    </div>
  )
}

export default FormHRnet
