import React,{useState,useEffect} from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alrt from './Alrt'
import { useHistory } from 'react-router-dom';
import { clear } from 'console';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Axios from 'axios';




const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function Dashborad() {
  const [user, setUser ] = useState<any>(true)
  let history = useHistory()
  useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      history.push('/')
    }
},[])


const Logout = () =>{
  console.warn("logout was invoked")
  localStorage.clear()
  history.push('/')
}
// const [users, setUsers] = useState<any>([]);
// const [value, setValue] = useState<any>("")
// const getApis = async () => {
//         const response = await fetch(' https://api.exchangeratesapi.io/v1/latest');
//         setUsers(await response.json());
//        console.log(data)

// }
// useEffect(() => {
//     getApis();
// }, []);
// const handleChange = (e) =>{
//   setValue( e.targit.value)
// }

useEffect (() =>{
  // console.log("TEST")
  getRates()
},[]);
const [rateList , setRateList] = useState<any>([])

const getRates = async () =>{
   const res = await Axios.get(
     "http://api.exchangeratesapi.io/v1/latest?access_key=128f93aa7e604c27d09d0433d7a73002")
     const {rates} = res.data;
     const ratesTemp = [];
     for(const [symbol, rate] of Object.entries(rates)){
       ratesTemp.push({symbol, rate});
    
    }
       setRateList(ratesTemp)
    };
 
  return (
    <div>
         <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Dollars Price</Tab>
        <Tab>Coal Price</Tab>
        <Tab>Crodoil</Tab>
      </TabsList>
      <TabPanel value={0}>
      <h3>About Dollar</h3>
        The US Dollar is the currency of United States. Our currency rankings show that the most popular US Dollar exchange rate is the USD to EUR rate. The currency code for Dollars is USD, and the currency symbol is $. Below, you'll find US Dollar rates and a currency converter.
        <hr />
        <div className='d-flex justify-content-evenly '>

   
      <ul className='list-group'>
                {
                 rateList.map((d:any) =>(
                  <li className='list-group-item'>
                     {d.symbol}  = {d.rate}
                     {/* {console.warn(d.symbol, d.rate)} */}

                  </li>
                 ))
              }
        </ul>
        </div>
</TabPanel>
      <TabPanel value={1}><h3>About Coal</h3>
        Coal is a combustible black or brownish-black sedimentary rock with a high amount of carbon and hydrocarbons. Coal is classified as a nonrenewable energy source because it takes millions of years to form. Coal contains the energy stored by plants that lived hundreds of millions of years ago in swampy forests.</TabPanel>
       
      <TabPanel value={2}><h3>About Crodoil</h3>
      Crude oil prices & gas price charts. Oil price charts for Brent Crude, WTI & oil futures. Energy news covering oil, petroleum, natural gas and investment ...
     
      </TabPanel>

    </TabsUnstyled>
      {/* <h2>You are successfully logedIn Welcome to Dashboard</h2> */}
      
      <hr />
      <TabsUnstyled defaultValue={0}>
      <TabsList>
        
        <Tab>Weekly</Tab>

        <Tab>Monthly</Tab>
        <Tab>Yearly</Tab>
      </TabsList>
      <TabPanel value={0}>
        <ul className='list group'>
                {
                rateList.slice(0,7).map((data:any) =>(
                  <li className='list-group-item'>
                    {data.symbol} {data.rate}
                    {
                      console.log(data.Symbol, data.rate)
                    }
                  </li>
                ))
              }
        </ul>
     
      </TabPanel>
      <TabPanel value={1}>
      
      <ul className='list group'>
                {
                rateList.slice(0,30).map((data:any) =>(
                  <li className='list-group-item'>
                    {data.symbol} {data.rate}
                    {
                      console.log(data.Symbol, data.rate)
                    }
                  </li>
                ))
              }
        </ul>
      </TabPanel>
      <TabPanel value={2}>
      <ul className='list group'>
                {
                rateList.map((data:any) =>(
                  <li className='list-group-item'>
                    {data.symbol} {data.rate}
                    {
                      console.log(data.Symbol, data.rate)
                    }
                  </li>
                ))
              }
        </ul>
      </TabPanel>
   
    </TabsUnstyled>
    {/* <hr />
                {
                rateList.map((data:any) => {
                  {

                    {data.Symbol} {data.rate}
                  }

                
                  // console.log(data.Symbol , data.rate)
                })
              }; */}

      <button className='my-4 btn btn-primary' onClick={Logout}>Logout</button>
      </div>
  )
}

export default Dashborad