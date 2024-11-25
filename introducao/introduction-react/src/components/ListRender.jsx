import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Joao", "Tobias", "Marcos"])

    const [users] = useState([
        {id: 1, name: "Joaquim", age: 23},
        {id: 2, name: "Miguel", age: 28},
        {id: 3, name: "Messias", age: 42}
    ])

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

    </div>
  )
}

export default ListRender
