import { Container } from "./styles";

import { MdDeleteForever, MdCreate } from "react-icons/md"
import { useEffect } from "react";
import { api } from "../../services/api";

export default function TransactionTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

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
          <tr>
            <td>20/02/2021</td>
            <td>Salário</td>
            <td className="deposit">R$1.800,00</td>
            <td>Entrada</td>
            <td>
              <div>
                <button className="editBtn"> <MdCreate size={22} /> </button>
                <button className="deletBtn"> <MdDeleteForever size={22} /> </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>20/02/2021</td>
            <td>Mercado</td>
            <td className="withdraw">R$500,00</td>
            <td>Saida</td>
            <td>
              <div>
                <button className="editBtn"> <MdCreate size={22} /> </button>
                <button className="deletBtn"> <MdDeleteForever size={22} /> </button>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  )
}
