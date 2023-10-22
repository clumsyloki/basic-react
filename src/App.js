import logo from './logo.svg';
import './App.css';
import { contractaddress ,abikey, infoAddress, InfoAbi} from './constants';
import { useState } from 'react';
const ethers = require("ethers")
const { ethereum } = window;

function App() {
  const createEthereumContract = async() => {
   
    const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractaddress, abikey, signer);
  
    return transactionsContract;
  };

  const sec = async() => {
   
    const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(infoAddress, InfoAbi, signer);
  
    return transactionsContract;
  };

const [count,setcount]=useState(0)

 async function call (){

   const count =await createEthereumContract()
   console.log((await count.getcount()));
   setcount(parseInt(count, 16));
  }

  async function callmee (){

    const count =await sec()
    console.log((await count.get()));
   }
  call()
  callmee()

  const callme=async()=>{
    await createEthereumContract().addage()
  }
const [anarray,setanarray]=useState([])
  const getall=async()=>{
console.log("ssss");
    const aray =await createEthereumContract().getallarray()
    const temparray=[]
    aray.forEach(element => {
      const date = new Date(parseInt(element._hex, 16) * 1000);

      // Now, you can format the date as needed, for example:
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      
      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      



      temparray.push(formattedDate)
    });



    setanarray(temparray)
  }
  
  console.log("ss",anarray);
  return (
    <div>

   <p> Total count: {count}</p>
   
      <button onClick={()=>{callme()}}>click to add</button>
<button onClick={()=>{getall()}}>update list if</button>
      {
        anarray.map((el,i)=>{
          return(
            <p>{i+1}  -  {el}</p>
          )
        })
      }
    </div>
  );
}

export default App;
