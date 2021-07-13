import React from 'react'
import {Doughnut} from 'react-chartjs-2'
type props ={
    btc:number,
    eth:number,
    bnb:number,
    ada:number,
    doge:number,
    uni:number,
    xlm:number,

}
const MarketCap = ({btc,eth,bnb,ada,doge,uni,xlm}:props) =>{
    const data = {
        labels: [
            'btc','eth','bnb','ada','doge','uni','xlm'
        ],
        datasets: [{
          label: 'Marketcap',
          data: [btc,eth,bnb,ada,doge,uni,xlm],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(54, 192, 215)',
            'rgb(154, 16, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    return(
        <div className='bg-white p-12 m-1 border border-2 '>
            <h1 className='flex justify-center font-semibold text-xl'>MarketCap</h1>
            < Doughnut type='Doughnut' data={data}/>

        </div>
    )
}
export default MarketCap;