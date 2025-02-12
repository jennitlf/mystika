import React, { useState } from "react";
import '../css/MyData.css';
import DataUser from "./DataUser.jsx";
import QueryHistory from "./QueryHistory.jsx";
import ScheduledAppointments from "./ScheduledAppointments.jsx";

const MyData = () => {

    const [ element, setElemnt ] = useState("DataUser")
    const colorSelect = {backgroundColor: 'rgb(208, 225, 233)'}
    

    const onClick = (e) => {
        setElemnt(e.target.name)
    }

    const renderContent = () => {
        switch (element) {
            case "DataUser":
                return <DataUser />;
            case "QueryHistory":
                return <QueryHistory />;
            case "scheduledAppointments":
                return <ScheduledAppointments />;
            default:
                return <DataUser />;
        }
    };

    return(
        <div className="container-my-data">
            <nav className="nav-my-data">
                <button name="DataUser" onClick={onClick} style={element === "DataUser" ? colorSelect : {backgroundColor: 'inherit'}}>Meus dados</button>
                <button name="scheduledAppointments" onClick={onClick} style={element === "scheduledAppointments" ? colorSelect : {backgroundColor: 'inherit'}}>Consultas agendadas</button>
                <button name="QueryHistory" onClick={onClick} style={element === "QueryHistory" ? colorSelect : {backgroundColor: 'inherit'}}>historico de consultas</button>
                
            </nav>
            <div>
                <div className="content-main-my-data">{renderContent()}</div>
            </div>
        </div>
    )
}

export default MyData;