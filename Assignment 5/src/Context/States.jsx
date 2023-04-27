import React, { useEffect, useState } from 'react';
import Context from './Context';

const States = ({ children }) => {
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
        <div>
            <Context.Provider value={{ alert, SessionData, setSessionData, City, handleSetData, handleViewData, handleDelete, handleUpdateData, UpdateData, setUpdateData, showAlert }}>
                {children}
            </Context.Provider>
        </div>
    );
}
export default States;
