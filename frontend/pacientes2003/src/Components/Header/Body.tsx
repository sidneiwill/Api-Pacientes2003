import axios from "axios"
import { useState } from "react"
import { Container, SearchBar, SearchField, AppTitle, NavigationHeader, NavButton } from "./styles"
const emptyPatient = {
  "Nome": '',
  "IDPaciente": '',
  "SobreNome": '',
  "Telefone": '',
  "Sexo": '',
  "HistoricoMorbido": ''
}

export const Header = () => {
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
        <NavigationHeader>
          <NavButton>Início</NavButton>
          <NavButton>Pacientes</NavButton>
          <NavButton>Medicações</NavButton>
          <NavButton>Cidades</NavButton>
          <NavButton>Ajuda</NavButton>
          <AppTitle>Pacientes2003</AppTitle>
        </NavigationHeader>

          <SearchBar>
              <SearchField className="patientNumberInput" type="number" min={1} defaultValue={1} onChange={(e) => {
                if(e.target.value !== "") {
                  requestApi(parseInt(e.target.value))
                } else{
                  requestApi(1)
                }
              }} />
              <button onClick={()=> changePatientNumber(1)}>+</button>
              <button onClick={()=> changePatientNumber(-1)}>-</button>
          </SearchBar>
        <h1>{(patient.Nome + ' ' + patient.SobreNome).toUpperCase()}</h1>
        <h3>Sexo: {patient.Sexo.toUpperCase() === "M" ? "Homem" : "Mulher"}</h3>
        <h2>Número de Telefone: {patient.Telefone}</h2>
        <p>
          <strong>Histórico: </strong>{patient.HistoricoMorbido}
        </p>
      </Container>
    )
}
