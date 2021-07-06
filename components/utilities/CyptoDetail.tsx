import React, {useState,useEffect} from 'react'
import LineChart from './LineChart'
import axios from 'axios'
interface Props {
    id:string,
    price:number,
    mcap:number,
    supply:Number
}

const CyptoDetail = ({id, price,mcap,supply}:Props) =>{
    
    const [result, setResult] = useState({})
    const [days,setDays] = useState('30')
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then(res => { 
            const data = res.data.prices
            var time:any[] = []
            var prices:any[] = []
            
            for (var i = 0; i < data.length; i++) {
                var d = new Date(data[i][0])
                var s = d.toLocaleString()
                time.push(s)
                prices.push(data[i][1].toFixed(2))
        

            }
        
            const resultData = {
                labels: time,
                datasets: [
                  {
                    label: `${id}`,
                    data: prices,
                    fill: false,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                  }
                ]
              };
              setResult(resultData)
         
            
         })
        .catch(error => console.log(error))
        
    },[id,days])
    
  
    return(
        <div>
           <div className='bg-white '>
               <div className='border border-2 p-4 mt-4'>
                   
                   <div className='text-3xl font-extrabold text-center mb-2'>{id}</div>
                   <div className='flex flex-row flex-wrap justify-evenly justify-center'>
                        <div className='text-xl'><span className='font-extrabold'>Current Price:</span> ${price.toFixed(2).toLocaleString()}</div>
                        <div className='text-xl '><span className='font-extrabold'>Market Cap:</span> ${mcap.toLocaleString()}</div>
                        <div className='text-xl '><span className='font-extrabold'>Cirrculating Supply: </span> {supply.toLocaleString()}</div>
                   </div>
               </div>
               <div className='text-center'><h2>{id}'s {days} day view</h2></div>
           < LineChart priceHistory={result}/>
           <br/>
         
           <div className='flex flex-row space-x-8 justify-center border border-2 py-2'>
                
                <div onClick={e=>{setDays('1')}}>1</div>
                <div onClick={e=>{setDays('30')}}>30</div>
                <div onClick={e=>{setDays('90')}}>90</div>
                <div onClick={e=>{setDays('180')}}>180</div>
                <div onClick={e=>{setDays('365')}}>365</div>
                <div onClick={e=>{setDays('max')}}>max</div>


           </div>
           </div>
           
        </div>
        )
}
export default CyptoDetail;