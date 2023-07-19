import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import { Layout,Typography,Space} from 'antd';
import { Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News, Homepages } from './component';
import './App.css';
//import 'antd/dist/reset.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route exact path='/' element={<Homepages/>}/>
                        <Route exact path='/exchanges' element={<Exchanges/>}/>
                        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                        <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}/>
                        <Route exact path='/news' element={ <News/>}/>                           
                    </Routes>
                </div>
            </Layout>
        <div className='footer'>
            <Typography.Title level={5} style={{ color: 'white',textAlign: 'center'}}>
                Cryptoanalys<br/>
                All rights reserverd
            </Typography.Title>
            <space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
            </space>
        </div>
        </div>
    </div>
  )
}

export default App
