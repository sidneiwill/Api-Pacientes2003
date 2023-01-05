import react from "react"
import componentDidMount from "react"

import axios from "axios"


export const Header = () => {
  let patientInfo = ''
  
  
  componentDidMount() {
    const requestApi = async (id: number) => {
      const response = await axios.get('http://localhost:3001/api/Pacientes?IDPaciente=' + id)
      patientInfo = response.data
      return response.data
    }
  }
  

    return(
      <>
        <h1>Teste</h1>
        {patientInfo}
      </>
    )
}
