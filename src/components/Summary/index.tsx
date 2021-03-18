import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export default function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <Container>
      <div className="container">
        <div className="content">
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas"/>
          </header>
          <strong className="strong income">R$1000,00</strong>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="Saidas"/>
          </header>
          <strong className="strong outcome">-R$500,00</strong>
        </div>
      </div>

      <div className="container">
        <div className="content highLight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total"/>
          </header>
          <strong className="strong total">R$500,00</strong>
        </div>
      </div>
      
    </Container>
  )
}
