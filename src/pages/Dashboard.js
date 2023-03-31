import React, { useState, useEffect } from 'react'
import DetailsList from '../compponents/DetailsList'



export default function Dashboard() {

    const [details,setDetails] = useState(null)

    useEffect(() => {
      const fetchDetails = async () => {
         
          
          const search = window.location.search; // returns the URL query String
          const params = new URLSearchParams(search); 
          const emailFromURL = params.get('email');

          const res = await fetch(`/api/workouts/${emailFromURL}` )
          const json = await res.json()
          console.log(json)

          if (res.ok) {
            setDetails(json)
          }
      }

      fetchDetails()
    }, [])


  return (
    <div className='container'>

      <div>
        <h1 className='heading'>User Details</h1>
      </div>
      <div className='form'>

        {/* {details && details.map((detail) => (
              <DetailsList key={detail._id} detail={detail}/>
        ))} */}

        {details && 
              <DetailsList key={details._id} detail={details}/>
        }
              
      </div>
            
    </div>
  )
}
