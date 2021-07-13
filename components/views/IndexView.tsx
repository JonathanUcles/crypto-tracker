import React, {useState, useEffect} from 'react'
import CoinProfile from '../utilities/CoinProfile'
import CyptoDetail from '../utilities/CyptoDetail'
import MarketCap from '../utilities/MarketCap'
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
            
            <div className='bg-gray-50 '>< CyptoDetail id={selected}  price={price} mcap={mcap} supply={supply}/></div>
            <div className='text-xl font-bold my-4 ml-2'>Crypto Options</div>
            <div className='lg:flex lg:flex-row  lg:space-x-4'>
                <div className='flex flex-col lg:flex-grow'>
                    {cryptoCoins.map((coin)=>(<div className='' onClick={e=>{handleClick(coin)}}>< CoinProfile   id={`${coin.id}`} symbol={`${coin.symbol}`} image={`${coin.image}`} /></div>))}
                    
                </div>
                <div><MarketCap btc={620700813936} eth={234848917785} bnb={48280552215} ada={41757676612} doge={29266877977} uni={10001437836} xlm={5575928116} /></div>
            </div>
          
            
        </div>
    )
}
export default IndexView;