import { useState } from 'react'
import './App.css'
import ListaDePessoas from './components/ListaDePessoas'

function App() {
  const [pessoas] = useState([
    {nome: "Giovanna", idade: 27, cargo: "RH"},
    {nome: "Pedro", idade: 34, cargo: "Senior Developer"},
    {nome: "Marta", idade: 24, cargo: "Designer"},
    {nome: "Maria", idade: 42, cargo: "Designer"},
    {nome: "Carlos", idade: 17, cargo: "Junior Developer"},
    {nome: "Gustavo", idade: 26, cargo: "Mid-level Developer"},
    {nome: "Gabriel", idade: 34, cargo: "Tech Lead"},
    {nome: "Larissa", idade: 15, cargo: "Designer"},
    {nome: "Matheus", idade: 22, cargo: "Mid-level Developer"},
    {nome: "Ana", idade: 48, cargo: "Manager"}
  ])

  return (
    <>
      <ListaDePessoas pessoas={pessoas} />
    </>
  )
}

export default App
