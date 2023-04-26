import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";

function FormComponent() {
  const {City, handleSetData, handleViewData, UpdateData, setUpdateData, showAlert} = useContext(Context)
  let IDCounter = Object.keys(handleViewData()).length +1;
  const [User, setUser] = useState({
    ID: IDCounter,
    name: "",
    address: "",
    city: "",
  });
  //Set User
  const handleChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  // Submit User Form
  const handleSubmit = (e) => {
    e.preventDefault();
    // If there's data in Update state then this condition True 
    if (UpdateData) {
      const updatedUser = { ...User };
      const updatedData = handleViewData().map((data) =>
        data.ID === UpdateData.ID ? updatedUser : data
      );
      showAlert(" Data Updated Successfully", "primary");
      handleSetData(updatedData);
      setUpdateData(null);
    }
    // If data is not exist then new data created 
    else {
      const newUser = { ...User, ID: IDCounter };
      const newData = [...handleViewData(), newUser];
      handleSetData(newData);
      showAlert(" Data Added Successfully", "success");
    }
    setUser({ ID: IDCounter, name: "", address: "", city: "" });
  };
  // Updated data shows in form
  useEffect(() => {
    if (UpdateData) {
      setUser({
        ID: UpdateData.ID,
        name: UpdateData.name,
        address: UpdateData.address,
        city: UpdateData.city,
      });
    }
  }, [UpdateData]);

  return (
    <div className="container w-50 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={User.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={User.address}
            className="form-control"
            required
          />
        </div>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          name="city"
          value={User.city}
          onChange={handleChange}
          required
        >
          <option defaultValue hidden>
            Select City
          </option>
          {City.map((data, index) => (
            <option key={index} value={index}>
              {data}
            </option>
          ))}
        </select>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            {UpdateData ? "Update User" : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
