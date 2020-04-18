
// export const GetEmployeeInterests = (id) => {
// 	return fetch('/v1/employees/' + id + '/interests')
// 		.then(employee_interests => employee_interests.json())
// 		.then((employee_interests) => {
// 			this.setState(() => ({ interests: employee_interests }))
// 	})
// }

// export const GetEmployeeDetails = (id) => {
// 	return fetch('/v1/employees/' + id)
// 		.then(employee_details => employee_details.json())
// 		.then((employee_details) => {
// 			this.setState(() => ( { employee: employee_details }))
// 	})
// }

import {useState, useEffect} from 'react'

export function GetEmployeeDetails(id) {
  const [employee_details, setData] = useState([]);

  useEffect(() => {
    fetch('/v1/employees/' + id)
      .then(response => response.json())
      .then(employee_details => setData(employee_details));
  }, []);

  return employee_details;
}

export function GetEmployeeInterests(id) {
  const [employee_interests, setData] = useState([]);

  useEffect(() => {
    fetch('/v1/employees/' + id + '/interests')
      .then(response => response.json())
      .then(employee_interests => setData(employee_interests));
  }, []);

  return employee_interests;
}