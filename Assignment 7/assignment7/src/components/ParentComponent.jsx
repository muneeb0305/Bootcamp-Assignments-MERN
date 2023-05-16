import React, { useContext, useState } from 'react'
import Context from '../contextAPI/context'

export default function ParentComponent({ operation }) {

    const context = useContext(Context)
    const { Add, Subtraction, Division } = context
    const [Data, setData] = useState({
        number1: 0,
        number2: 0
    })
    const handleChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (operation === '+') {
            Add(Number(Data.number1), Number(Data.number2))
        }
        else if (operation === '-') {
            Subtraction(Number(Data.number1), Number(Data.number2))
        }
        else {
            Division(Number(Data.number1), Number(Data.number2))
        }
    }
    return (
        <div className='flex justify-center align-middle items-center mx-5'>
            <div className='flex justify-center align-middle items-center gap-5 my-5'>
                <input name='number1' value={Data.number1} onChange={handleChange} className="shadow appearance-none border border-blue-500 rounded w-52 py-5 px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Number 1" />
                {operation}
                <input name='number2' value={Data.number2} onChange={handleChange} className="shadow appearance-none border border-blue-500 rounded w-52 py-5 px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Number 2" />
                <button onClick={handleSubmit} className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Calculate
                </button>
            </div>
        </div>
    )
}
