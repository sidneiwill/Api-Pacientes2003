import { NavigationHeader, AppTitle, NavButton } from './styles'

export const Header = () => {
  return(
    <NavigationHeader>
      <AppTitle>Pacientes2003</AppTitle>
      <NavButton>Início</NavButton>
      <NavButton>Pacientes</NavButton>
      <NavButton>Medicações</NavButton>
      <NavButton>Cidades</NavButton>
      <NavButton>Ajuda</NavButton>
    </NavigationHeader>
  )
}
