import { useState } from 'react'

import Header from './components/header';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
