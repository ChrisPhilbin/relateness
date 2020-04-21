import { useState, useEffect } from "react";

export function UpdateAllInterests(id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/v1/employees/' + id + "/interests/newsfeed")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}

export function UpdateSingleInterests(interest) {
  const [data, setData] = useState([]);
  const { id } = this.props.match.params

  useEffect(() => {
    fetch('/v1/interests/' + id + "/newsfeed")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}