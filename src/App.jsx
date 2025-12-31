 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 const App = () => {
 const [userdata, setuserData] = useState([])
 const [index, setIndex] = useState(1)

 const userGetdata= async()=>{
 
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setuserData(response.data)
  
  }
 

   

  useEffect(function(){
    userGetdata()
    
      },[index])

  let printUserData =  <h3 className='font-xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.....</h3>
   if(userdata.length>0){
    printUserData = userdata.map(function(elem,idx){
     
     
     return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44b overflow-hidden rounded-xl'>
         <img className='h-full w-full  object-cover' src={elem.download_url} key={idx} alt="" />
       </div>
       <h2 className='font-medium text-lg text-white'>{elem.author}</h2>
     
        </a>

          </div>
    })
   }

   return (
     <div className='  h-screen w-full overflow-auto bg-black'>
              <h1 className='font-extrabold text-6xl px-130 h-30 bg-black text-sky-300 flex items-center'>Galary UI</h1>
          <div className='flex flex-wrap m-10 gap-4 h-[65%]'>
         {printUserData}
       </div>
          
           <div className='flex items-center justify-center gap-10'>
            <button 
             onClick={()=>{
              if(index>1){
                 setIndex(index-1)
                  printUserData([])
              }
             }}
            className='bg-amber-300  rounded-2xl h-10 w-25'>prev</button>
            <h4 className='text-white font-bold text-xl'>page {index}</h4>
       <button
        onClick={()=>{
         setIndex(index+1)
           printUserData([])
        }}
       className='bg-amber-300  active:scale-95 rounded-2xl h-10 w-25' >Next</button>
     
           </div>
         
     </div>
   )
 }
 
 export default App
 