import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const [sortdata, setSortdata] = useState([]);
  const [city, setCity] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8080/pets?page=${page}&size=1`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setSortdata(res);
      })
      .catch((err) => console.log(err.message));
  }, [page]);

  // console.log("data", data);

  const handleSort = () => {
    let temp = [...data];
    temp.sort((a, b) => a.costperday - b.costperday);
    setSortdata(temp);
  };
  const handleRating = () => {
    let temp = [...data];
    temp.sort((a, b) => b.rating - a.rating);
    setSortdata(temp);
  };
  const handleVerified = () => {
    let temp = data.filter((e) => e.verified == true);
    setSortdata(temp);
  };
  const handleReset = () => {
    setSortdata(data);
  };
  const handleSearch = () => {
    let temp = data.filter((e) => e.city == city);
    setSortdata(temp);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Filter by City</button>
      <br />
      <br />
      <button onClick={handleSort}>Sort by Cost per day</button>
      <button onClick={handleRating}>Sort by Rating</button>
      <button onClick={handleVerified}>Filter by Verified</button>
      <button onClick={handleReset}>Reset</button>

      {/* {sortdata.map((e) => (
        <div key={e.id} style={{ border: "1px solid red" }}>
          <p>Name : {e.Name}</p>
          <p>City : {e.City}</p>
          <p>Address : {e.Address}</p>
          <p>Capacity : {e.Capacity}</p>
          <p>CostPerDay : {e.CostPerDay}</p>
          <p>Rating : {e.Rating}</p>
          <p>Verified : {e.Verified}</p>
        </div>
      ))} */}

      <table style={{ border: "1.5px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid gray" }}>S.No</th>
            <th style={{ border: "1px solid gray" }}>Name</th>
            <th style={{ border: "1px solid gray" }}>City</th>
            <th style={{ border: "1px solid gray" }}>Address</th>
            <th style={{ border: "1px solid gray" }}>Capacity</th>
            <th style={{ border: "1px solid gray" }}>Cost Per Day</th>
            <th style={{ border: "1px solid gray" }}>Verified</th>
            <th style={{ border: "1px solid gray" }}>Rating</th>
            <th style={{ border: "1px solid gray" }}>Details Page</th>
          </tr>
        </thead>

        <tbody>
          {sortdata.map((e, i) => (
            <tr key={e._id}>
              <td style={{ border: "1px solid gray" }}>{i + 1}.</td>
              <td style={{ border: "1px solid gray" }}>{e.name}</td>
              <td style={{ border: "1px solid gray" }}>{e.city}</td>
              <td style={{ border: "1px solid gray" }}>{e.address}</td>
              <td style={{ border: "1px solid gray" }}>{e.capacity}</td>
              <td style={{ border: "1px solid gray" }}>{e.costperday}</td>
              <td style={{ border: "1px solid gray" }}>
                {e.verified ? "True" : "False"}
              </td>
              <td style={{ border: "1px solid gray" }}>{e.rating}</td>
              {/* <Link to={`/listing/${e.id}`}> */}
              <td style={{ border: "1px solid gray" }}>
                <Link to={`/listing/${e._id}`}>Details</Link>
              </td>
              {/* </Link> */}
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => {
          setPage(page - 1);
          console.log(page);
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
          console.log(page);
        }}
      >
        next
      </button>
    </div>
  );
};
