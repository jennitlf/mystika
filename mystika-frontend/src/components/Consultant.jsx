import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../css/Consultant.css"

const Consultant = () => {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [consultant, setConsultant] = useState(null);

    useEffect(()=>{

        const fetchConsultant = async () =>{
            try{
                const response = await fetch(`http://localhost:3001/consultant-specialty?idConsultant=${id}&page=1&limit=9`);
                const data = await response.json();
                setConsultant(data.data)
            }catch(error){
                console.error(error)
            }finally {
                setLoading(false);
            }
        }
        
    fetchConsultant()

    }, [id])

    if (loading) {
        return <p>Carregando consultores...</p>;
        }

    return (
        <div className="content-consultant">
            <div className="container-1">
                <div className="image">
                    <img src={consultant[0].consultant.image_consultant} alt="foto do consultor" />
                </div>
                <div className="name-assessment-status">
                    <div className="name-assessment">
                        <div className="name-assessment-sub"><p className="name-consultant">{consultant[0].consultant.name}</p> <div className="status">Online</div></div>
                        <div className="assessment">
                            <i className="material-icons star">star</i>
                            <i className="material-icons star">star</i>
                            <i className="material-icons star">star</i>
                            <i className="material-icons star">star</i>
                            <i className="material-icons star">star</i>
                        </div>
                        <div className="content-occurred">
                            <p>Consultas Realizadas</p>
                            <div className="content-occurred-sub">
                                <i className="material-icons occurred">question_answer</i>
                                <p>{consultant[0].consultant.consultations_carried_out}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
            <div className="container-2">
                <div className="data-profile">
                    <h3>Sobre o especialista</h3>
                    <p>{consultant[0].consultant.profile_data}</p>
                    <h3>Sobre suas especialidades</h3>
                    <p>{consultant[0].consultant.about_specialties}</p>
                    <h3>História</h3>
                    <p>{consultant[0].consultant.consultants_story}</p>
                </div>
                <div className="c-specialties">
                    <h3>Especialista em:</h3>
                    {consultant.map((specialty)=>(
                        <div id={specialty.specialty.name_specialty} key={specialty.specialty.name_specialty} className="c-specialties-unit">
                            <h2>{specialty.specialty.name_specialty}</h2>
                            <div>
                                <p>Duração:{specialty.duration} minutos</p>
                                <p>Valor: R${specialty.value_per_duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Consultant;