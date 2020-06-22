import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBirthdays } from '../actions/birthdayActions'

const ShowEmployeeUpcomingBirthdays = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBirthdays())
    }, [])

    const employees = useSelector(state => state.birthdays.employees)
    const loading = useSelector(state => state.birthdays.loading)
    const hasErrors = useSelector(state => state.birthdays.hasErrors)

    console.log(employees)
 
    const renderBirthdays = () => {
        if (loading) return <p>Loading upcoming birthdays...</p>
        if (hasErrors) return <p>Something went wrong getting birthday information...</p>
        if (employees.length > 0) return(
            <div>
                <strong>Upcoming birthdays....</strong><br />
                {employees[0].upcoming.map( (employee) => (
                    <div key={employee.id}>
                        {employee.fullname} - {employee.date}
                    </div>
                ))}
            </div>
        )
    }

    return(
        <section>
            {renderBirthdays()}
        </section>
    )

}

export default ShowEmployeeUpcomingBirthdays