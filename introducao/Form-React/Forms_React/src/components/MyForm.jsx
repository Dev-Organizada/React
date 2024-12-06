import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    {/* Gerenciamento de dados */}
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    {/* Resgatar o valor digitado no input */}
    const handleName = (e) => {
        setName(e.target.value)
    }

    {/* Função para enviar o formulario */}
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Eviando o formulario")
        console.log(name, email)
    }

  return (
    <div>
        {/* Criação de Formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Nome: </label>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Digite o seu Nome' 
                    onChange={handleName}
                />
            </div>

            {/* Label envolvendo o input */}
            <label>
                <span>E-mail</span>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Digite o seu E-mail' 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <input type='submit' value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm