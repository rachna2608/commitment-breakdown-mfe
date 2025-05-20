import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommitmentTable from './components/commitmentTable'
import './index';

function App() {
  return (
    <>
      <CommitmentTable investorId={1} />
    </>
  )
}

export default App
