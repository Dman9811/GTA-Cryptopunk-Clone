import './App.css';
import Header1 from './components/Header1';
import React, { useState, useEffect } from 'react';
import PunkList from './components/PunkList';
import Main from './components/Main';
import axios from 'axios'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xb4b161f9ec552e5b0078f5d2998271F9c3092bef&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets.reverse())
    }
    getMyNfts()
  },[]);

  return( 
    <div className='app'>
      <Header1 />
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
      
    </div>
  );
}

export default App;
