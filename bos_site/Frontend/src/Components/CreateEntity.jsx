import React, { useState } from "react";

export const CreateEntity = () => {
  const [details, setDetails] = useState({
    Name: "",
    City: "",
    Address: "",
    Capacity: "",
    CostPerDay: "",
    Verified: "",
    Rating: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handlesubmit = () => {
    try {
      fetch(`http://localhost:8080/Lists`, {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.log("e:", e.message);
    }
    alert("Yay! Added Successfully!");
  };

  return (
    <div>
      <br />
      <input
        type="text"
        name="Name"
        placeholder="Name"
        value={details.Name}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="City"
        placeholder="City"
        value={details.City}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="Address"
        placeholder="Address"
        value={details.Address}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="Capacity"
        placeholder="Capacity"
        value={details.Capacity}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="CostPerDay"
        placeholder="Cost Per Day"
        value={details.CostPerDay}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="Rating"
        placeholder="Rating"
        value={details.Rating}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
};
