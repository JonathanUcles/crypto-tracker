import React from 'react'
import {Line} from 'react-chartjs-2'

interface Props {
    priceHistory:any
}
const LineChart = ({priceHistory}:Props)=>{
    return(
        <div className=''>
          <Line type='line' data={priceHistory} width={100} height={300}
	options={{ maintainAspectRatio: false }}/>
            
        </div>)
}
export default LineChart