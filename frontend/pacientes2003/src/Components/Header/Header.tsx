import axios from "axios"
import { useState } from "react"

// Código crasha quando não encontra o paciente

export const Header = () => {
  let patientInfo = {}
  const [patient, setPatient] = useState({
    "Nome": '',
    "IDPaciente": '',
    "SobreNome": '',
    "Telefone": '',
    "Sexo": '',
    "HistoricoMorbido": ''
  
  })

  
  const requestApi = async (id: number) => {
    const response = await axios.get('http://localhost:3001/api/Pacientes?IDPaciente=' + id)
    // const {Nome, IDPaciente, SobreNome} = response.data[0]
    setPatient(response.data[0]);
  }
    return(
      <>
        <input type="text" defaultValue={1} onChange={(e) => {
          if(e.target.value !== "") {
            requestApi(parseInt(e.target.value))
          } else{
            requestApi(1)
          }
        }} />

        <h1>{(patient.Nome + ' ' + patient.SobreNome).toUpperCase()}</h1>
        <h3>Sexo: {patient.Sexo.toUpperCase() === "M" ? "Homem" : "Mulher"}</h3>
        <h2>Número de Telefone: {patient.Telefone}</h2>
        <p>
          <strong>Histórico: </strong>{patient.HistoricoMorbido}
        </p>
      </>
    )
}
