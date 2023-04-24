import { CircularProgress, CircularProgressLabel, Progress } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,

} from "firebase/firestore";


const DashBoard = () => {

    const [eaten, setEaten] = useState()

    const [remaining, setRemaining] = useState(1200)
    const [inputData, setData] = useState([])


    const [currentCB, setCB] = useState()
    const [currentPT, setPT] = useState()
    const [currentFT, setFT] = useState()
    const inputCollectionRef = collection(db, "input");
    const breakfastCollectionRef = collection(db, "breakfast");



    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(inputCollectionRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };




        getData();


    }, [])


    return (
        <div className="text-gray-300 bg-gray-800 border border-gray-500 shadow-sm rounded-lg self-center py-4 px-3">

            <>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-lg font-bold'>{(eaten)}</h1>
                        <span className='text-sm'>Eaten</span>
                    </div>
                    <div>
                        <CircularProgress value={40} color='purple.500' size={"150px"}>
                            <CircularProgressLabel color={"gray.200"} fontWeight={"bold"}><div className='text-lg text-gray-300'>{remaining}</div> <span className='text-sm text-gray-300 font-normal'>Remaining</span></CircularProgressLabel>
                        </CircularProgress>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold'>{inputData.map((item) => {
                            return (
                                item.tdee
                            )
                        })}</h1>
                        <span>Total</span>
                    </div>
                </div>
                <div className='flex flex-row gap-4 w-full justify-center  mx-auto md:w-2/4'>
                    <div className='flex flex-col gap-3 w-1/3'>
                        <span className='text-sm'>Carbs</span>
                        <Progress value={20} size='md' colorScheme='yellow' borderRadius={"7px"} />
                        <span className='text-lg font-bold'>200/{inputData.map((item) => {
                            return (
                                item.carbs
                            )
                        })}</span>
                    </div>
                    <div className='flex flex-col gap-3 w-1/3'>
                        <span className='text-sm'>Protein</span>
                        <Progress value={20} size="md" colorScheme='red' borderRadius={"7px"} />
                        <span className='text-lg font-bold'>35/{inputData.map((item) => {
                            return (
                                item.protein
                            )
                        })}</span>
                    </div>
                    <div className='flex flex-col gap-3 w-1/3'>
                        <span className='text-sm'>Fat</span>
                        <Progress value={20} size='md' colorScheme='green' borderRadius={"7px"} />
                        <span className='text-lg font-bold'>20/{inputData.map((item) => {
                            return (
                                item.fat
                            )
                        })}</span>
                    </div>
                </div>
            </>



        </div>
    )
}

export default DashBoard