import './ReadAll.css'
import {Card} from "../Card/Card"
import { useEffect, useState } from 'react';

const itemsMock = [
    {
      _id: "63ee1e0b18f2b9a93da8435a",
      nome: "Rick Sanchez",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      tags: ["Status: vivo", "Espécie: humano", "Origem: Terra C-137"],
    },
    {
      _id: "63ef87c74522de2944ab1fa8",
      nome: "Morty Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      _id: "63ef87cc4522de2944ab1fa9",
      nome: "Summer Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      _id: "63ef87d44522de2944ab1faa",
      nome: "Beth Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      _id: "63ef87e24522de2944ab1fab",
      nome: "Jerry Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
  ];

export function ReadAll() {
    const [items, setItems] = useState([])

    async function realizarRequisicao() {
      const url = "http://localhost:3000/item"
      const response = await fetch(url)
      const data = await response.json()

      console.log(data)

      setItems(data)
    }

    useEffect(() => {realizarRequisicao()}, [])
    
    console.log(62, items)

    return (
    <div className="ReadAll">
        {items.map( (item) => {
        return <Card key={'card' + item._id} item={item} />
        })}
    </div>
    )
}