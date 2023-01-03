import MDBReader from "mdb-reader";
import { readFileSync, writeFile } from 'fs'

const buffer = readFileSync('dados.mdb');
const reader = new MDBReader(buffer);

let result = []


const tabelasDesejadas = [
  'AgendaCompromissos',
  'ArquivosTipos',
  'Cidades',
  'Consulta_Documentos',
  'Consultas',
  'ConsultasAtestados',
  'ConsultasDoencas',
  'ConsultasReceitasPrescricoes',
  'ConsultasSolicitacoes',
  'ConsultasSolicitacoesDocumentos',
  'ConsultasSolicitacoesParagrafos',
  'DocGrupos',
  'ESTACAO',
  'EstadosCivis',
  'JANELAS',
  'Layout',
  'Layout_Direitos',
  'LICENCIADO',
  'ModelosAtestados',
  'ModelosReceitasPrescricoes',
  'ModelosSolicitacoes',
  'ModelosSolicitacoesParagrafos',
  'Opcoes',
  'Pacientes_Default_Backup',
  'Profissionais',
  'Profissionais_Direitos',
  'Profissoes',
  'Remedios',
  'SolicitacoesTipos',
  'ConsultasReceitas',
  'Convenios',
  'DocTipos',
  'ModelosReceitas',
  'Pacientes',
  'Receitas'
]



// Mapear todas as tabelas
// tabelas.map((tab) => result.push(reader.getTable(tab).getData()));



// Mapear somente tabelas definidas em tabelasDesejadas.
function extractOne(){
  tabelasDesejadas.map((tab) => result.push(reader.getTable(tab).getData()));
  writeFile("pacientesData.json", JSON.stringify(result), 'utf-8', (()=>console.log("Finished")))
}

// Extrair todos as tabelas e salvar cada uma em um arquivo JSON específico.
function extractAll(){
  for (const table of tabelasDesejadas) {
    let result = [];
    result.push(reader.getTable(table).getData())
    writeFile(table + ".json", JSON.stringify(result), 'utf-8', (()=>console.log("Finished")))
  }
}