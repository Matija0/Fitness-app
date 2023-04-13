import React, { useEffect, useState } from 'react'
import "./wpe.css"
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
    const [maxData, setData] = useState([])
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

    useEffect(() => {
        const getExercises = async () => {
            const data = await getDocs(repmaxCollectionRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getExercises();
    }, []);

    const docRef = doc(db, "repmaxdata", "nxZPoJtqfwpgO8Vdv8yY");

    const data = {
        bench: bench,
        deadlift: deadlift,
        incline: incline,
        ohp: ohp,
        pullUp: pullUp,
        squat: squat

    }

    const updateStats = () => {

        updateDoc(docRef, data);
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
            <form onSubmit={handleData} className="flex flex-col gap-3 w-1/2 items-center">
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={squat}
                        onChange={(e) => setSquat(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Squat</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={deadlift}
                        onChange={(e) => setDeadlift(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Deadlift</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={bench}
                        onChange={(e) => setBench(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Bench press</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={ohp}
                        onChange={(e) => setOhp(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">OHP</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={pullUp}
                        onChange={(e) => setPullUp(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Weighted pull up</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={incline}
                        onChange={(e) => setIncline(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Incline bench press</label>
                </div>
                <button type="submit" className="border-2 border-gray-300 text-gray-300 text-lg py-2 px-3 rounded-lg hover:bg-gray-300 hover:text-black"><i class="bi bi-box-arrow-in-right"></i></button>
            </form>
            <button className="border-2 border-gray-300 text-gray-300 text-lg py-2 px-3 rounded-lg hover:bg-gray-300 hover:text-black" onClick={updateStats}><i class="bi bi-arrow-clockwise"></i></button>
            <p className="text-white text-sm">You can calculate your estimated one-rep maxes <Link to="/calculator"><span className="text-gray-500 hover:underline">here</span></Link> </p>
        </div>
    )
}

export default RepMaxForm