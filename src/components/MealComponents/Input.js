import React, { useState } from 'react'
import "./mc.css"
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
    setDoc,
} from "firebase/firestore";


const Input = () => {
    const [tdee, setTdee] = useState()
    const [protein, setProtein] = useState()
    const [carbs, setCarbs] = useState()
    const [fat, setFat] = useState()

    const addStats = async () => {

        await setDoc(doc(db, "input", "mealdata"), {
            tdee: tdee,
            protein: protein,
            carbs: carbs,
            fat: fat
        });

    }


    const handleSubmit = (event) => {
        event.preventDefault()
        addStats()
        clear()
    }

    const clear = () => {
        setTdee("")
        setProtein("")
        setCarbs("")
        setFat("")
    }
    return (
        <div className='w-fit mx-auto'>

            <form onSubmit={handleSubmit}>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={tdee}
                        onChange={(e) => setTdee(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">TDEE</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={protein}
                        onChange={(e) => setProtein(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Protein</label>

                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={carbs}
                        onChange={(e) => setCarbs(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Carbohydrates</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={fat}
                        onChange={(e) => setFat(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Fat</label>
                </div>
                <button type="submit" className=" bg-emerald-700 py-2 px-3 text-gray-200 rounded-lg hover:bg-emerald-600">
                    Save
                </button>
            </form>
        </div>
    )
}

export default Input