import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* Criação de Formulario */}
        <form>
            <div>
                <label htmlFor='name'>Nome: </label>
                <input type='text' name='name' placeholder='Digite o seu Nome' />
            </div>

            {/* Label envolvendo o input */}
            <label>
                <span>E-mail</span>
                <input type='email' name='email' placeholder='Digite o seu E-mail' />
            </label>

            <input type='submit' value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm