import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeesSaved: [
    {
      // id: 0,
      firstname: 'Adam',
      lastname: 'Smith',
      startdate: '01/01/2011',
      department: 'Sales',
      birthdate: '01/01/1988',
      street: 'Columbia St',
      city: 'San DIego',
      state: 'SD',
      zipcode: 92101,
    },
    {
      // id: 1,
      firstname: 'Ilona ',
      lastname: 'Mercer',
      startdate: '12/10/2000',
      department: 'Marketing',
      birthdate: '10/12/1987',
      street: 'Merchant St',
      city: 'Trenton',
      state: 'TR',
      zipcode: 98628 ,
    },
  ],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addEmployee(state, action) {
      // add in my table the new employees
      state.employeesSaved.push(action.payload)
    },
  },
})
export const { addEmployee } = userSlice.actions

export default userSlice.reducer