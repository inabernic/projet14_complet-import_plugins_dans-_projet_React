import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'

function List() {
  //table columns
  const columns = [
    {
      name: 'Firstname',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Lastname',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.birthDate,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ]

  //select user in reducer
  const userCreated = useSelector((state) => state.user.employeesSaved)
//console.log(userCreated)

  //SearchBar
  const [search, setNewSearch] = useState('')

  const searchItems = (e) => {
    setNewSearch(e.target.value)
  }
  const filtered = !search
    ? userCreated
    : userCreated.filter(
        (data) =>
          data.firstName.toLowerCase().includes(search.toLowerCase()) ||
          data.lastName.toLowerCase().includes(search.toLowerCase()) ||
          data.startDate.toLowerCase().includes(search.toLowerCase()) ||
          data.department.toLowerCase().includes(search.toLowerCase()) ||
          data.birthDate.toLowerCase().includes(search.toLowerCase()) ||
          data.street.toLowerCase().includes(search.toLowerCase()) ||
          data.city.toLowerCase().includes(search.toLowerCase()) ||
          data.state.toLowerCase().includes(search.toLowerCase()) ||
          data.zipCode.toString().includes(search)
      )

  return (
<div className="container_table">
        <div>
        <div>
      <div className="box_search">
        <label>Search</label>
        <input
          type="text"
          id="table_search"
          className="table_search"
          onChange={searchItems}
        />
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        striped
        highlightOnHover
        pagination
      />
    </div>
      </div>
    </div>
  )
}

export default List