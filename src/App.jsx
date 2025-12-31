 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 const App = () => {
 const [userdata, setuserData] = useState([])
 const userGetdata= async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=300')
   setuserData(response.data)
  
  }

  useEffect(function(){
    userGetdata()
  })

  let printUserData =  <h3 className='font-xl text-red-600'>No data available</h3>
   if(userdata.length>0){
    printUserData = userdata.map(function(elem,idx){
       return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44b overflow-hidden rounded-xl'>
         <img className='h-full w-full  object-cover' src={elem.download_url} key={idx} alt="" />
       </div>
       <h2 className='font-medium text-lg'>{elem.author}</h2>
     
        </a>

          </div>
    })
   }

   return (
     <div className='  h-screen w-full overflow-auto'>

          <div className='flex flex-wrap m-10 gap-4'>
         {printUserData}
       </div>
       
     </div>
   )
 }
 
 export default App
 