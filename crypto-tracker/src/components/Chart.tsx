import React from 'react'
import { Doughnut } from 'react-chartjs-2'
interface Props  {

    checking:number;
    savings:number;
    stocks:number;
    realEstate:number;
    creditCard:number;
    studentLoans:number;
    mortages:number;
}

const Chart = ({checking,savings,stocks,realEstate,creditCard,studentLoans,mortages}:Props) =>{
    const data = {
        labels: [
          'Checkings',

        ],
        datasets: [{
          label: `Financial Pie`,
          data: [checking,savings,stocks,realEstate,creditCard,studentLoans,mortages],
          backgroundColor: [
            'rgb(250, 225, 221)',
            'rgb(232, 232, 228)',
            'rgb(216, 226, 220)',
            'rgb(236, 228, 219)',
            'rgb(255, 229, 217)',
            'rgb(216, 226, 220)',
            'rgb(255, 215, 186)'
          ],
          hoverOffset: 20
        }]
      };
    return (<div>
        <Doughnut data={data} options={{}} type='doughnut'/>
    </div>)
}
export default Chart;