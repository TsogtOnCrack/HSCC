import { useContext } from 'react'
import { CartContext } from '../../context/maincontext'
import Link from 'next/link'
import db from '../../firebase/clientApp'
import { addDoc, collection, getDocs } from 'firebase/firestore'

export default function Check() {
  let { data, setData } = useContext(CartContext)
  const dbRef = collection(db, 'Data')
  const adData = () => {
    addDoc(dbRef, {
      name: data.name,
      grade: data.grade,
      email: data.email,
      reason: data.reason,
      whatyouknow: data.whatyouknow ? data.whatyouknow : 'none',
      xp: data.xp ? data.xp : 'none',
    })
      .then(() => {})
      .catch((er) => {
        console.log(er)
      })
  }

  const index = 2
  const all = 32

  const Name = data.name
  const Grade = data.grade
  const Reason = data.reason
  const Whatyouknow = data.whatyouknow
  const xp = data.xp
  return (
    <div className="w-scren h-screen bg-[#14B4B4] flex justify-center items-center flex-col">
      <div className="flex flex-row justify-center items-center">
        {' '}
        <div className="bg-[#D1E3E4] w-[80vw] h-[80vh] rounded-[20px] flex flex-col text-[30px] p-5 font-courier overflow-auto">
          <p>name: {Name}</p>
          <p>Grade : {Grade}</p>
          <p>Reason : {Reason}</p>
          <p className={`${xp ? 'block' : 'hidden'}`}>What else you can do : {Whatyouknow}</p>
          <p className={`${xp ? 'block' : 'hidden'}`}>XP : {xp}</p>
        </div>
      </div>
      <div className=" font-roboto text-[20px] flex flex-row w-[80vw] justify-around my-3">
        <Link href={'/form'}>
          <div className="cursor-pointer bg-red-500 p-1 rounded-[5px] text-white">i want to edit some stuff</div>
        </Link>
        <Link href="/done">
          <div
            onClick={() => {
              adData()
            }}
            className="cursor-pointer bg-green-500 p-1 rounded-[5px] text-white"
          >
            everything is good
          </div>
        </Link>
      </div>
    </div>
  )
}
