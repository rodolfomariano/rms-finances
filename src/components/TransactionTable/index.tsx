

import { MdDeleteForever, MdCreate } from "react-icons/md"
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";


export default function TransactionTable() {
  const { transactions } = useTransactions()
  

  return (
    <Container>
      <h2>Transações</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Ação</th>
          </tr>
        </thead> 

        <tbody>

          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>

                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                
                <td>{transaction.title}</td>

                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>

                <td>{transaction.category}</td>
                <td>
                  <div>
                    <button className="editBtn"> <MdCreate size={22} /> </button>
                    <button className="deletBtn"> <MdDeleteForever size={22} /> </button>
                  </div>
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </Container>
  )
}
