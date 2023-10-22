import { Contract } from 'ethers';
import React, { useEffect } from 'react'
import { InfoAbi, infoAddress } from './constants';
const { Web3 } = require('web3');
const Myweb = () => {
   let provider=window.ethereum
//
   const call=async()=>{
    await provider.request({ method: "eth_requestAccounts" });
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const ii=await new web3.eth.Contract(InfoAbi,infoAddress )._methods.get()
    console.log("obssk",ii);
   }
   useEffect(()=>{
call()
},[])
  return (
    <div>Myweb</div>
  )
}

export default Myweb