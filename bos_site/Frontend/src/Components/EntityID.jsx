import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EntityID = () => {
  const [data, setData] = useState([]);

  const id = useParams();
  console.log("id:", id);

  useEffect(() => {
    fetch(`http://localhost:8080/Lists/${id.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <p>Address : {data.Address}</p>
      <p>Capacity : {data.Capacity}</p>
      <p>City : {data.City}</p>
      <p>Cost Per Day : {data.CostPerDay}</p>
      <p>Name : {data.Name}</p>
      <p>Rating : {data.Rating}</p>
      <p>Verified : {data.Verified}</p>
    </div>
  );
};
