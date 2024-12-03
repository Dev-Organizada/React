const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        {idade >= 18 ? (
            <p>Usuario pode tirar carteira de habilitação</p>
        ) : (
            <p>Usuario nao tem idade surficiente para tirar carteira de habilitação</p>
        )}
    </div>
  )
}

export default UserDetails