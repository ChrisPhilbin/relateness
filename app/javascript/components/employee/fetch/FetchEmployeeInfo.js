import {useState, useEffect} from 'react'

export const GetEmployeeDetails = (id) => {
  const [employee_details, setData] = useState([]);

  useEffect(() => {
    fetch('/v1/employees/' + id)
      .then(response => response.json())
      .then(employee_details => setData(employee_details));
  }, []);

  return employee_details;
}

export const GetEmployeeInterests = (id) => {
  const [employee_interests, setData] = useState([]);

  useEffect(() => {
    fetch('/v1/employees/' + id + '/interests')
      .then(response => response.json())
      .then(employee_interests => setData(employee_interests));
  }, []);

  return employee_interests;
}
