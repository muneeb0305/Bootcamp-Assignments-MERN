import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";
import { useEffect, useState } from "react";

function App() {
  const [Data, setData] = useState([]);
  const [UpdateData, setUpdateData] = useState(null);
  const [SessionData, setSessionData] = useState([]);
  const City = ["Peshawar", "Lahore", "Karachi", "Islamabad"];
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(Data));
    setSessionData(JSON.parse(localStorage.getItem("Data")));
  }, [Data]);
  const handleEdit = (id) => {
    const Update = Data.filter((data) => data.ID === id);
    setUpdateData(Update[0]);
  };
  return (
    <>
      <Navbar />
      <Form
        Data={Data}
        setData={setData}
        City={City}
        UpdateData={UpdateData}
        setUpdateData={setUpdateData}
      />
      {Data.length > 0 && (
        <Table
          Data={Data}
          setData={setData}
          SessionData={SessionData}
          City={City}
          EditData={handleEdit}
        />
      )}
    </>
  );
}

export default App;
