import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeesSaved: [
    {
      // id: 0,
      firstName: 'Adam',
      lastName: 'Smith',
      startDate: '01/01/2011',
      department: 'Sales',
      birthDate: '01/01/1988',
      street: 'Columbia St',
      city: 'San DIego',
      state: 'SD',
      zipCode: 92101,
    },
    {
      // id: 1,
      firstName: 'Ilona ',
      lastName: 'Mercer',
      startDate: '12/10/2000',
      department: 'Marketing',
      birthDate: '10/12/1987',
      street: 'Merchant St',
      city: 'Trenton',
      state: 'TR',
      zipCode: 98628 ,
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
      console.log(addEmployee)
    },
  },
})
export const { addEmployee } = userSlice.actions

export default userSlice.reducer