import React, { useEffect, useState } from 'react'

export default function Auxiliar() {

    const [items, setItems] = useState([])

    const peticion = async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const games = await res.json()
        setItems(games)
    }

    useEffect(()=>{
        peticion();
    },[])

  return (
    <div>
      {
        items.map(item => (
            <div key={item.id}>
                <h4>{item.name}</h4>
                <p>{item.username}</p>
            </div>
        ))
      }
    </div>
  )
}
