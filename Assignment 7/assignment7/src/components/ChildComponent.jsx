import React, { useContext } from 'react'
import Context from '../contextAPI/context'

const ChildComponent = () => {
    const context = useContext(Context)
    const { add, subtract, divide } = context
    return (
        <div className='mx-28 my-5'>
            <p>Your Sum is : {add}</p>
            <p>Your Subtraction is : {subtract}</p>
            <p>Your Division is : {divide}</p>
        </div>
    )
}
export default ChildComponent
