import { CircularProgress, CircularProgressLabel, Progress } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,

} from "firebase/firestore";


const DashBoard = () => {




    const [inputData, setData] = useState([])



    const [statsData, setStatsData] = useState([])
    const inputCollectionRef = collection(db, "input");
    const currentstatsRef = collection(db, "currentstats")




    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(inputCollectionRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        const getStatsData = async () => {
            const data = await getDocs(currentstatsRef);
            setStatsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };


        getData();
        getStatsData()

    }, [])

    const count1 = inputData.map((item) => {
        return (
            item.tdee
        )
    })

    const count2 = statsData.map((item) => {
        return (
            item.calories
        )
    })

    const carbCount = statsData.map((item) => {
        return (
            item.carbs
        )
    })

    const carbTotal = inputData.map((item) => {
        return (
            item.carbs
        )
    })

    const protCount = statsData.map((item) => {
        return (
            item.protein
        )
    })

    const protTotal = inputData.map((item) => {
        return (
            item.protein
        )
    })

    const fatCount = statsData.map((item) => {
        return (
            item.fat
        )
    })

    const fatTotal = inputData.map((item) => {
        return (
            item.fat
        )
    })

    let res = (count1[0] - count2[0])


    return (
        <div className="text-gray-300 bg-gray-800 border border-gray-500 rounded-lg  py-4 px-3">

            <>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <div className='flex flex-col items-center gap-2'>
                        <h1 className='text-lg font-bold'>{Math.round(count2)}</h1>
                        <span className='text-sm'>Eaten</span>
                    </div>
                    <div>
                        <CircularProgress value={Math.round(count2)} max={count1} color='purple.500' size={"150px"}>
                            <CircularProgressLabel color={"gray.200"} fontWeight={"bold"}><div className='text-lg text-gray-300'>{Math.round(res)}</div> <span className='text-sm text-gray-300 font-normal'>Remaining</span></CircularProgressLabel>
                        </CircularProgress>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold'>{Math.round(count1)}</h1>
                        <span>Total</span>
                    </div>
                </div>
                <div className='flex flex-row gap-4 w-full justify-center  mx-auto md:w-2/4 '>
                    <div className='flex flex-col gap-3 w-1/3'>
                        <span className='text-sm'>Carbs</span>
                        <Progress value={Math.round(carbCount)} max={carbTotal} size='md' colorScheme='yellow' borderRadius={"7px"} />
                        <span className='text-lg font-bold'>{Math.round(carbCount)}/{carbTotal}</span>
                    </div>
                    <div className='flex flex-col gap-3 w-1/3'>
                        <span className='text-sm'>Protein</span>
                        <Progress value={Math.round(protCount)} max={protTotal} size="md" colorScheme='red' borderRadius={"7px"} />
                        <span className='text-lg font-bold'>{Math.round(protCount)}/{protTotal}</span>
                    </div>
                    <div className='flex flex-col gap-3 w-1/3'>
                        <span className='text-sm'>Fat</span>
                        <Progress value={Math.round(fatCount)} max={fatTotal} size='md' colorScheme='green' borderRadius={"7px"} />
                        <span className='text-lg font-bold'>{Math.round(fatCount)}/{fatTotal}</span>
                    </div>
                </div>
            </>



        </div>
    )
}

export default DashBoard