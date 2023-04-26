import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [SessionData, setSessionData] = useState([]);
  const [UpdateData, setUpdateData] = useState(null);
  const [alert, setAlert] = useState(null);
  const City = ["Peshawar", "Lahore", "Karachi", "Islamabad"];

  // Set Data to local Storage
  const handleSetData = (data) => {
    localStorage.setItem("Data", JSON.stringify(data));
    setSessionData(data);
  };
  // View Data
  const handleViewData = () => {
    return SessionData;
  };
  // Update Data
  const handleUpdateData = (id) => {
    const Update = handleViewData().filter((data) => data.ID === id);
    setUpdateData(Update[0]);
  };
  // Delete Data
  const handleDelete = (id) => {
    const newData = handleViewData().filter((data) => data.ID !== id);
    handleSetData(newData);
    showAlert(" Data Deleted Successfully", "danger");
  };
  // If there's data in local storage it displays on first render
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Data"));
    setSessionData(data || []);
  }, []);
  // Alerts
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <Form
        handleSetData={handleSetData}
        handleViewData={handleViewData}
        City={City}
        UpdateData={UpdateData}
        setUpdateData={setUpdateData}
        showAlert={showAlert}
      />
      {SessionData && SessionData.length > 0 && (
        <Table
          handleViewData={handleViewData}
          handleUpdateData={handleUpdateData}
          handleDelete={handleDelete}
          City={City}
        />
      )}
    </>
  );
}

export default App;
