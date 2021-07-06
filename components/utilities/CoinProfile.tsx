import React from 'react'

interface Props {
    id:string,
    symbol:string,
    image:string,

}

const CoinProfile = ({ id,symbol,image,}:Props) =>{
    return(<div>
        <div className='border border-2 m-2 p-8 bg-white'>
            <div className='flex justify-center mt-8'><img src={image} style={{height:'100px'}}/></div>
            < br />
            <div className='text-3xl text-center font-semibold'>{symbol}</div>
            <div className='text-xl text-center	text-gray-500'>{id}</div>
            <br/>


        </div>

    </div>)
}
export default CoinProfile