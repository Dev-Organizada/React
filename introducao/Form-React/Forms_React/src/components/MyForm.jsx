import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    {/* Gerenciamento de dados */}
    const [name, setName] = useState(user ? user.name : "") // Recebendo o valor da prop
    const [email, setEmail] = useState(user ? user.email : "")  
    const [bio, setBio] = useState("") 

    {/* Resgatar o valor digitado no input */}
    const handleName = (e) => {
        setName(e.target.value)
    }

    {/* Função para enviar o formulario */}
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Eviando o formulario")
        console.log(name, email, bio)

        //Limpar formulario
        setName("")
        setEmail("")
        setBio("")
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
                    value={name} 
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
                    value={email}
                />
            </label>

            {/* Textarea */}
            <label>
                <span>Bio</span>
                <textarea 
                    name='bio' 
                    placeholder='Descrição do usuario'
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                ></textarea>
            </label>

            <input type='submit' value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm