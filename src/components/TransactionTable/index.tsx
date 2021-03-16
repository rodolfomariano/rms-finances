import { Container } from "./styles";

export default function TransactionTable() {
  return (
    <Container>
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
            <td>R$1.800,00</td>
            <td>Entrada</td>
            <td><button>Editar</button><button>Excluir</button></td>
          </tr>
          <tr>
            <td>20/02/2021</td>
            <td>Salário</td>
            <td>R$1.800,00</td>
            <td>Entrada</td>
            <td><button>Editar</button><button>Excluir</button></td>
          </tr>
          <tr>
            <td>20/02/2021</td>
            <td>Salário</td>
            <td>R$1.800,00</td>
            <td>Entrada</td>
            <td><button>Editar</button><button>Excluir</button></td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
