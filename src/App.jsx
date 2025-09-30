import React, { useState } from 'react'
//import { InputBox } from '../../06CurrencyConvertor/src/components';
import { Form } from 'react-router-dom';

function App() {

  const [height, setHeight]= useState(0);
  const [weigth, setweight]= useState(0);
  const [bmi, setbmi]= useState(0);
  const [message, setmessage]=useState('');

  const bmicalculate =  () =>{
    const bmi= ((weigth/ (height*height))*10000).toFixed(2);
    setbmi(bmi);
    
    if(bmi < 18.5){
      setmessage('Under Weigth ');
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
      setmessage('Normal weigth');
    }
    else if( bmi >= 24.9 && bmi <= 30){
      setmessage('Over Weight');
    }
    else if (bmi > 30 && bmi < NaN){
      setmessage('Obese');
    }
     else {
      setmessage('Please enter height and weigth ')
    }
   

  }




  return (
    
    <div  className='  w-screen h-screen  bg-white border-spacing-1 border-yellow-500 flex justify-start'>

          {/* image */}
          <div className=' w-140 h-60 px-5 py-5 '>
            <img  className='w-100  h-80  rounded-lg' src="https://prognohealth.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-07-at-6.30.02-PM.webp" alt="" srcset="" />
            <div className='py-8 text-justify text-3xl  text-red-800 font-bold font-l font-serif tracking-tight text-pretty underline underline-offset-6 decoration-5 decoration-yellow-300 '>
              <p> "Track your BMI, transform your health — stay fit, stay strong." </p>
            </div>
            <div className=' bg-orange-200 py-4 px- 5 rounded-lg'>
              <h1 className='text-center text-4xl font-bold text-gray-900 font-serif'> BMI Weight Guide</h1>
              <h2 className='ml-4 text-2xl font-semibold font-serif mt-3'> Under Weigth : Less than 18.5 </h2>
              <h2 className='ml-4 text-2xl font-semibold font-serif mt-3' > Normal Weigth :  18.5 - 24.9 </h2>
              <h2 className='ml-4 text-2xl font-semibold font-serif mt-3'> Over Weigth : Greater than 24.9 </h2>

            </div>
          </div>

      <div>
        <h1 className=' text-yellow-800 text-center text-6xl md font-extrabold mt-5  h-12 ml-48 underline underline-offset-4 decoration-8 decoration-yellow-300' > BMI CALCULATOR </h1>
      
        <div className='bg-green-300 py-12 px-8  mt-15 ml-56 mr-10 h-120'>

                        {/* height */}
          < div className='mt-8 ml-2  text-red-800 font-bold text-2xl h-12'>
            <label className='text-2xl bg-white rounded-xl px-3 py-1' htmlFor='Height' > Enter your height </label>
            <input type='number' placeholder='height (cm)' className='bg-white rounded-xl px-4 py-1 ml-8 w-60' onChange={(e)=> setHeight(e.target.value)}/>

          </div>
                             {/* weigth */}
          <div className='mt-8 ml-2 text-red-800 font-bold text-2xl h-12 '>
            <label className='bg-white px-3 py-1  rounded-xl text-2xl' htmlFor='Weight'> Enter your weight </label>
            <input type='number' placeholder='weight (kg)' className='bg-white rounded-xl px-4 py-1 ml-8 w-60' onChange={(e) => setweight(e.target.value)}/>

          </div>

                       {/* button for calcuation */}
          <div>
            <button className=' flex justify-center ml-36 bg-blue-500  mt-8 font-extrabold text-2xl rounded-xl w-60 px-4 py-2 font-serif' onClick={bmicalculate}>  Calculate  </button>
          </div>
                      {/* result  */}
          <div className=' mt-15'>
            <h2 className='w-full h-12 text-center bg-violet-900  px-4 py-1  text-2xl mt-8 rounded-lg text-white font-sans font-semibold '> BMI VALUE : {bmi ? bmi : " "}</h2>
             <h2 className='w-full h-12 text-center bg-violet-900  px-4 py-1  text-2xl rounded-lg text-white font-sans font-semibold'> RESULT :  {bmi ? message : " "}</h2>
          </div>

        </div>
        

          
      </div>
    </div>
    

   
   
  )
}

export default App
