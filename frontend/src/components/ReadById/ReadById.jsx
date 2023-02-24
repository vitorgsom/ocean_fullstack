import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'

export default function ReadById() {
  const [item, setItem] = useState()

  const id = "63f773c956d46e126a4dcb78"

  async function realizarRequisicao() {
    const url = "http://localhost:3000/item/" + id
    // const url = "https://ocean-fullstack.onrender.com/item"
  
    const response = await fetch(url)
    const data = await response.json()

    setItem(data)
  }

  useEffect( () => {
    realizarRequisicao()
  }, [])

  if (!item) {
    return <div>Carregando . . .</div>
  }

  return (
    <div className="ReadById">
      <Card item={item} />
    </div>
  )

}
