import React from "react";
import "../css/Home.css"



const Consultant = ({consultants}) => {

    const specialty = ( consultant )=> { 
        if (consultant.specialties.length > 1) {  
          return (
            <p className="specialty-label"> {consultant.specialties[1].name} [...]</p> 
          )
        } else {
          return (
            <p className="specialty-label"> {consultant.specialties[0].name}</p> 
          )
        }
      }

    const lowestValue = (consultants) => {
      const value = consultants.specialties.reduce((menor, especialidade) => {
        return especialidade.value_per_duration < menor 
          ? especialidade.value_per_duration 
          : menor;
      }, Infinity);
      console.log(consultants, value)

      const formattedValue = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });

      return formattedValue
    }  

    return(
        <div className="Content-consultants">
            {consultants.map((consultant) => (

              <div key={consultant.consultant_id} className="consultant-card">
                <div className="container-img"><img src={consultant.img} alt="profile consultant" /></div>
                <h3>{consultant.consultant_name}</h3>
                <div className="box-specialty">
                 {specialty(consultant)}
                  <p className="value-minimum">A partir de<b>{lowestValue(consultant)}</b></p>
                </div>
                <div className="div-button"><button > Marcar consulta </button></div>
              </div>
            ))}
          </div>
    )
}

export default Consultant; 