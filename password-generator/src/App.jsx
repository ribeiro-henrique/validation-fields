import copy from 'clipboard-copy';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [password, setPassword] = useState('')

  const handleClick = () => {
    setPassword(nanoid());
  }

  const handleCopy = (event) => {
    copy(event.target.innerHTML)
    Swal.fire(
      'Senha Copiada!'
    )
  }

  return (
    <main>
      <h1>🔐 Gerador de Senhas Seguras</h1>
      <button
      className='btn-pass'
      onClick={handleClick}
      >
        GERAR SENHA
      </button>
      <h2
        onClick={handleCopy}
      >
        {
          password ? password : '...'
        }
      </h2>
    </main>
  )
}

export default App
