import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
} from "firebase/firestore";

const RepMaxForm = () => {

    const repmaxCollectionRef = collection(db, "repmaxdata")
    const [squat, setSquat] = useState("")
    const [deadlift, setDeadlift] = useState("")
    const [bench, setBench] = useState("")
    const [ohp, setOhp] = useState("")
    const [pullUp, setPullUp] = useState("")
    const [incline, setIncline] = useState("")

    const addStats = async () => {
        await addDoc(repmaxCollectionRef, {
            squat: squat,
            deadlift: deadlift,
            bench: bench,
            ohp: ohp,
            pullUp: pullUp,
            incline: incline
        });
    }

    const updateStats = async (id, sets) => {
        const exerciseDoc = doc(db, "exercises", id);
        const newFields = { sets: sets + 1 };
        await updateDoc(exerciseDoc, newFields);
    };

    const handleData = (event) => {
        event.preventDefault();
        addStats()
        clear()
    };

    const clear = () => {
        setSquat("")
        setDeadlift("")
        setBench("")
        setOhp("")
        setPullUp("")
        setIncline("")
    }

    return (
        <div className=" bg-gray-800 border border-gray-500 flex flex-col items-center gap-5 px-2 py-3 rounded-lg">
            <h1 className="text-white text-xl">Enter your 1RMs:</h1>
            <form onSubmit={handleData} className="flex flex-col gap-3 items-center">
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Squat" value={squat} onChange={(e) => setSquat(e.target.value)} />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Deadlift" value={deadlift} onChange={(e) => setDeadlift(e.target.value)} />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Bench Press" value={bench} onChange={(e) => setBench(e.target.value)} />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="OverHead press" value={ohp} onChange={(e) => setOhp(e.target.value)} />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Pull ups(weighted)" value={pullUp} onChange={(e) => setPullUp(e.target.value)} />
                <input className="bg-gray-500 rounded-md  p-2 text-white" type="number" placeholder="Incline Bench Press" value={incline} onChange={(e) => setIncline(e.target.value)} />
                <button type="submit" className="border-2 border-gray-300 text-gray-300 text-lg py-2 px-3 rounded-lg hover:bg-gray-300 hover:text-black"><i class="bi bi-box-arrow-in-right"></i></button>
            </form>
            <button><i class="bi bi-arrow-clockwise"></i></button>
            <p className="text-white text-sm">You can calculate your estimated one-rep maxes <Link to="/calculator"><span className="text-gray-500 hover:underline">here</span></Link> </p>
        </div>
    )
}

export default RepMaxForm