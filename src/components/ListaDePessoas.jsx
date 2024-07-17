const ListaDePessoas = ({pessoas}) => {
  return (
    <>
      <h1>Lista de funcionários:</h1>

      <ul>
        {pessoas.map((pessoa, i) => (
          <li key={i} style={pessoa.idade >= 18 ? {color: "green"} : {color: "red"}}> | {pessoa.idade} anos | {pessoa.cargo}</li>
        ))}
      </ul>
    </>
  )
}

export default ListaDePessoas