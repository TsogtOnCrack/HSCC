import db from '../../firebase/clientApp'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'

export default function Out() {
  const dbRef = collection(db, 'messages')

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const adData = () => {
    addDoc(dbRef, {
      name: name,
      age: age,
    })
      .then(() => {
        alert('data sent')
      })
      .catch((er) => {
        console.log(er)
      })
  }
  const readData = async () => {
    const data = await getDocs(dbRef)

    console.log(data)

    data.forEach((doc) => {
      console.log(doc.data())
    })
  }
  return (
    <div className="flex flex-col h-28 justify-around w-40">
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />

      <button
        onClick={() => {
          adData()
          readData()
        }}
      >
        button
      </button>
    </div>
  )
}
