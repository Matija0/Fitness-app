import React from 'react'
import { Link } from 'react-router-dom'

const RepMaxForm = () => {
    return (
        <div className=" bg-gray-800 border border-gray-500 flex flex-col items-center gap-5 px-2 py-3 rounded-lg">
            <h1 className="text-white text-xl">Enter your 1RMs:</h1>
            <form className="flex flex-col gap-3 items-center">
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Squat" />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Deadlift" />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Bench Press" />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="OverHead press" />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Pull ups(weighted)" />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Incline Bench Press" />
                <button type="submit" className="border-2 border-gray-300 text-gray-300 text-lg py-2 px-3 rounded-lg hover:bg-gray-300 hover:text-black"><i class="bi bi-box-arrow-in-right"></i></button>
            </form>
            <p className="text-white text-sm">You can calculate your estimated one-rep maxes <Link to="/calculator"><span className="text-gray-500 hover:underline">here</span></Link> </p>
        </div>
    )
}

export default RepMaxForm