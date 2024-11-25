import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Joao", "Tobias", "Marcos"])

    const [users, setUsers] = useState([
        {id: 1, name: "Joaquim", age: 23},
        {id: 2, name: "Miguel", age: 28},
        {id: 3, name: "Messias", age: 42}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4) //gera um numero aleatorio de acordo com o tamanho da lista de users

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                //Forma de usar key com mal pratica
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                //Forma correta de usar Key
                <li key={user.id}> {user.name} - {user.age} </li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>

    </div>
  )
}

export default ListRender
