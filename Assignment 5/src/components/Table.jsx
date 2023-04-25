import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function TableComponent(props) {
  const Data = props.Data;
  const setData = props.setData;
  const SessionData = props.SessionData;
  const City = props.City;
  const handleEdit = props.EditData

  const handleDelete = (id) => {
    const newData = Data.filter((data) => data.ID !== id);
    setData(newData);
  };

  return (
    <div className="container mt-4">
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
          {SessionData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{City[data.city]}</td>
              <td>
                <span
                  style={{ cursor: "pointer" }}
                  className="text-primary mx-2"
                  onClick={() => handleEdit(data.ID)}
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
