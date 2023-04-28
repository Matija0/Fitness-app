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
    setDoc,
} from "firebase/firestore";
import { useToast } from '@chakra-ui/react';


const RepMaxForm = () => {



    const [time, setTime] = useState("")
    const [muscle, setMuscle] = useState("")
    const [location, setLocation] = useState("")
    const [equipment, setEquipment] = useState("")
    const [data, setData] = useState([])

    const toast = useToast()





    const notf = () => {
        toast({
            title: 'Data saved!.',

            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }


    const url = 'https://workout-planner1.p.rapidapi.com/?time=30&muscle=biceps&location=gym&equipment=dumbbells';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '12f7d92fcdmshb29dc70d54946e3p182334jsnd9a69db0fb7a',
            'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
        }
    };

    const getData = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setData(result);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getData()
    }, [])


    return (
        <div className=" bg-gray-800 border border-gray-500 flex flex-col items-center gap-5 px-2 py-3 rounded-lg">
            <h1 className="text-white text-xl">Enter data:</h1>
            <form className="flex flex-col gap-3 items-center">
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Time</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={muscle}
                        onChange={(e) => setMuscle(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Muscle</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Location</label>
                </div>
                <div class="group">
                    <input
                        className="body-input"
                        type="text"
                        required
                        value={equipment}
                        onChange={(e) => setEquipment(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="body-label">Equipment</label>
                </div>

                <button type='submit' className=' bg-sky-600 py-2 px-3 w-fit rounded-lg hover:bg-sky-500 text-gray-800'>Get workout</button>
            </form>
            <div>

            </div>

        </div>
    )
}

export default RepMaxForm