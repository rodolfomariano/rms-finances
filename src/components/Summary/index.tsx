import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";


export default function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acumulator, transaction) => {
    if (transaction.type === 'deposit') {
      acumulator.deposits += transaction.amount
      acumulator.total += transaction.amount
    } else {
      acumulator.withdraws -= transaction.amount
      acumulator.total -= transaction.amount
    }

    return acumulator
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div className="container">
        <div className="content">
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas"/>
          </header>
          <strong className="strong income">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposits)}
          </strong>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="Saidas"/>
          </header>
          <strong className="strong outcome">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)}
          </strong>
        </div>
      </div>

      <div className="container">
        <div className="content highLight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total"/>
          </header>
          <strong className="strong total">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)}
          </strong>
        </div>
      </div>
      
    </Container>
  )
}
