import React, {useState, useEffect} from 'react'
import CoinProfile from '../utilities/CoinProfile'
import CyptoDetail from '../utilities/CyptoDetail'
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
        .then(res => { setCryptoCoins(res.data) })
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
            
            {selected.length >0 ? <div className='bg-gray-50 '>< CyptoDetail id={selected}  price={price} mcap={mcap} supply={supply}/></div>:<div className='grid grid-col-1 bg-gray-100 text-center py-2 px-6 mt-2'><p>please select a  coin</p></div> }
            <div className='flex justify-center text-xl font-bold m-6'>Crypto Options</div>
            <div className='lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-1'>
                {cryptoCoins.map((coin)=>(<div className='' onClick={e=>{handleClick(coin)}}>< CoinProfile   id={`${coin.id}`} symbol={`${coin.symbol}`} image={`${coin.image}`} /></div>))}
            </div>
        </div>
    )
}
export default IndexView;