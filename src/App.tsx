import { useState } from 'react';
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false)

  function handleOpenNewTransationModal() {
    setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransationModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

