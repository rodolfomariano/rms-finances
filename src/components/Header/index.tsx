
import logo from '../../assets/logo.svg';
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }:HeaderProps) {

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="logo do site"/>
          <h1>Minhas Finanças</h1>
        </div>

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>

        
      </Content>
    </Container>
  )
}
