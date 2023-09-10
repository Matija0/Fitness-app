import React, { useEffect, useState } from 'react'
import "./mc.css"
import { auth, db } from "../../firebase-config";
import {
    
    collection,
    doc,
    
    onSnapshot,
    
    setDoc,
} from "firebase/firestore";


const Input = () => {
    const [tdee, setTdee] = useState()
    const [protein, setProtein] = useState()
    const [carbs, setCarbs] = useState()
    const [fat, setFat] = useState()
    
    const inputCollectionRef = collection(db, "input");

    const addStats = async () => {

        await setDoc(doc(db, "input", `${auth.currentUser.uid}`), {
            tdee: tdee,
            protein: protein,
            carbs: carbs,
            fat: fat,
            userId: auth.currentUser.uid
        });
        
        await setDoc(doc(db, "currentstats", `${auth.currentUser.uid}`),{
            calories: 0,
            carbs: 0,
            fat: 0,
            protein: 0,
            userId: auth.currentUser.uid
        })

    }
    useEffect(() => {
        const input = onSnapshot(inputCollectionRef, (snapshot) => {
            let items = [];
            snapshot.docs.forEach((doc) => {
              if (auth.currentUser.uid === doc.data().userId) {
                items.push({ ...doc.data(), id: doc.id });
              }
            });
            if (items.length === 0) {
              return;
            }
            setTdee(items[0].tdee)
            setProtein(items[0].protein)
            setCarbs(items[0].carbs)
            setFat(items[0].fat)

           
          });

          return () => {
            input();
          };
        }, []);      

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
                        value={tdee? tdee : ""}
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
                        value={protein? protein : ""}
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
                        value={carbs? carbs : ""}
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
                        value={fat? fat : ""}
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