import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";


export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

