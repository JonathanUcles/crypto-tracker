import React from 'react'

interface Props {
    id:string,
    symbol:string,
    image:string,

}

const CoinProfile = ({ id,symbol,image,}:Props) =>{
    return(<div>
        <div className='border border-2 m-1 p-2 bg-white'>
            <div className='flex flex-row space-x-8'>

                <div className=''><img src={image} style={{height:'50px'}}/></div>
                <div>
                    <div className='text-3xl font-semibold'>{symbol}</div>
                    <div className='text-xl text-gray-500'>{id}</div>
                </div>
                

            </div>
            
          


        </div>

    </div>)
}
export default CoinProfile