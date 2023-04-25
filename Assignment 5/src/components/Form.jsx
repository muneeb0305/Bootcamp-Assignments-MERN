import React, { useEffect, useState } from "react";

function FormComponent(props) {
  const [counter, setcounter] = useState(0);
  const [User, setUser] = useState({
    ID: counter,
    name: "",
    address: "",
    city: "",
  });
  const Data = props.Data;
  const setData = props.setData;
  const City = props.City;
  const UpdateData = props.UpdateData;
  const setUpdateData = props.setUpdateData;

  const handleChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (UpdateData) {
      const updatedUser = { ...User, ID: UpdateData.ID };
      console.log({ ...User, ID: UpdateData.ID} );
      const updatedData = Data.map((data) =>
        data.ID === UpdateData.ID ? updatedUser : data
      );
      setData(updatedData);
      setUpdateData(null);
    } else {
      setcounter(counter + 1);
      const newUser = { ...User, ID: counter + 1 };
      setData([...Data, newUser]);
    }
    setUser({ ID: counter, name: "", address: "", city: "" });
  };
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
