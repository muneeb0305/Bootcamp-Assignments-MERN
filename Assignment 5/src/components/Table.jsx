import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext, useState } from "react";
import Context from "../Context/Context";

function TableComponent() {
  const {handleDelete, handleViewData, handleUpdateData, City} = useContext(Context)
  const [Search, setSearch] = useState("")
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const filteredData = handleViewData().filter(row => {
    if (row.name.toLowerCase().includes(Search.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <div className="container mt-4">
      <div className="p-1 bg-light rounded rounded-pill border border-2  shadow-sm mb-4 w-25">
        <input value={Search} onChange={handleSearch} type="search" placeholder="Search by Name" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
      </div>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{data.ID}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{City[data.city]}</td>
              <td>
                <span
                  style={{ cursor: "pointer" }}
                  className="text-primary mx-2"
                  onClick={() => handleUpdateData(data.ID)}
                >
                  <BiEdit />
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  className="text-danger"
                  onClick={() => handleDelete(data.ID)}
                >
                  <AiOutlineDelete />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
