const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li>{nome}</li>
            <li>{idade} anos</li>
            <li>{profissao}</li>
        </ul>
        {idade >= 18 ? (
            <p>Usuario pode tirar carteira de habilitação</p>
        ) : (
            <p>Usuario nao tem idade surficiente para tirar carteira de habilitação</p>
        )}
    </div>
  )
}

export default UserDetails