import axios from "axios"
import { useState } from "react"
import { Container, SearchBar, SearchField,
  PacientName,
  ControlButton,
  ControlButtonGroup,
  PacientAge, } from "./styles"
const emptyPatient = {
  "Nome": '',
  "IDPaciente": '',
  "SobreNome": '',
  "Telefone": '',
  "Sexo": '',
  "HistoricoMorbido": '',
  "Nascimento": ''
}

export const InfoBox = () => {
  const [patient, setPatient] = useState(emptyPatient)
  
  const requestApi = async (id: number) => {
    const response = await axios.get('http://localhost:3001/api/Pacientes?IDPaciente=' + id);
    
    if(response.data[0] !== undefined) {
      setPatient(response.data[0]);
    } else {
      setPatient(emptyPatient)
    }
  }
  
    let patientNumberInputValue = document.querySelector('.patientNumberInput') as HTMLInputElement;
    
    const changePatientNumber = (amount : number) =>{
      if(parseInt(patientNumberInputValue.value) + amount < 1) return
      patientNumberInputValue.value = (parseInt(patientNumberInputValue.value) + amount).toString()
      requestApi(parseInt(patientNumberInputValue.value))
    }

    return(
      <Container>
        <ControlButtonGroup>

          <PacientName>{(patient.Nome ? (patient.Nome + ' ' + patient.SobreNome).toUpperCase() + ' ' : "Paciente não encontrado ")}
            <PacientAge>{patient.Nascimento
                ? new Date().getFullYear() - new Date(patient.Nascimento).getFullYear() + " anos" 
                : "Idade não informada"
              }
            </PacientAge>
          </PacientName>
          
          <SearchBar>
            <SearchField className="patientNumberInput" type="number" min={1} defaultValue={1} onChange={(e) => {
              if(e.target.value !== "") {
                requestApi(parseInt(e.target.value))
              } else{
                requestApi(1)
              }
            }} />
            <ControlButton onClick={()=> changePatientNumber(-1)}>-</ControlButton>
            <ControlButton onClick={()=> changePatientNumber(1)}>+</ControlButton>
          </SearchBar>

        </ControlButtonGroup>

        <h3>Sexo: {patient.Sexo.toUpperCase() === "M" ? "Masculino" : "Feminino"}</h3>

        <h2>Número de Telefone: {patient.Telefone
          ? patient.Telefone
          : "Telefone não informado"
      }</h2>

        <p>
          <strong>Histórico: </strong>{patient.HistoricoMorbido}
        </p>

      </Container>
    )
}
