import React, {useState, useEffect} from 'react'
import CoinProfile from './CoinProfile'
import CyptoDetail from './CyptoDetail'
import axios from 'axios'

const IndexView = () =>{
    const [cryptoCoins, setCryptoCoins] = useState([])
    const [selected, setSelected] = useState('');
    const [price, setPrice] = useState(0);
    const [mcap, setMCap] = useState(0);
    const [supply, setSupply] = useState(0);
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cdogecoin%2Ccardano%2Cbinancecoin%2Cripple%2Cstellar%2C%20uniswap&order=market_cap_desc&per_page=100&page=1&sparkline=false
        `)
        .then(res => { setCryptoCoins(res.data) 
            console.log(res.data) })
        .catch(error => console.log(error))
    },[])
    const handleClick=(coin)=>{
        setSelected(coin.id)
        console.log(coin.market_cap)
        setPrice(coin.current_price)
        setMCap(coin.market_cap)
        setSupply(coin.circulating_supply)
    }

    return (
        <div className='mx-8 pb-4'>
            
            {selected.length >0 ? <div className='bg-gray-50 '>< CyptoDetail id={selected}  price={price} mcap={mcap} supply={supply}/></div>:<p>please select a  coin</p> }
            <div className='flex justify-center text-xl font-bold m-6'>Crypto Options</div>
            <div className='grid grid-cols-4'>
                {cryptoCoins.map((coin)=>(<div className='' onClick={e=>{handleClick(coin)}}>< CoinProfile   id={`${coin.id}`} symbol={`${coin.symbol}`} image={`${coin.image}`} /></div>))}
            </div>
        </div>
    )
}
export default IndexView;