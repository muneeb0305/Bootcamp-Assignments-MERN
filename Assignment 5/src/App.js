import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";
import { useContext } from "react";
import Alert from "./components/Alert";
import Context from "./Context/Context";

function App() {
  const { alert, SessionData } = useContext(Context)
  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <Form />
      {SessionData && SessionData.length > 0 && (
        <Table />
      )}
    </>
  );
}

export default App;
