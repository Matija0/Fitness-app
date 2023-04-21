import React from 'react'

const Test = (props) => {
    return (
        <div className=' bg-gray-800 rounded-lg text-gray-300 py-3 flex flex-col px-10 mb-4 items-center justify-center gap-4'>
            <div className='flex flex-col w-full'>
                <div className=' py-4 px-3'>
                    <h1 className='text-4xl  font-bold'>{props.item.name}</h1>
                    <span className='text-xl mt-2'>{props.item.serving_size_g} grams</span>
                </div>
                <div className='  flex flex-col gap-2 text-lg'>
                    <span className=' text-blue-500 '>Calories: {props.item.calories}</span>
                    <span className=' text-red-500'>Protein: {props.item.protein_g} gr</span>
                    <span className=' text-yellow-500'>Carbohydrates: {props.item.carbohydrates_total_g} gr</span>
                    <span className=' text-emerald-500'>Total fat: {props.item.fat_total_g} gr</span>
                    <span >Cholesterol: {props.item.cholesterol_mg} mg</span>
                    <span>Saturated fat: {props.item.fat_saturated_g} gr</span>

                    <span>Fiber: {props.item.fiber_g} gr</span>
                    <span>Potassium: {props.item.potassium_mg} mg</span>


                    <span>Sodium: {props.item.sodium_mg} mg</span>
                    <span>Sugar: {props.item.sugar_g} gr</span>
                </div>
            </div>

            <button className=" text-gray-300  w-1/2  text-2xl   rounded-md mt-auto" onClick={props.addFood}><i class="bi bi-database-add"></i></button>
        </div>
    )
}

export default Test