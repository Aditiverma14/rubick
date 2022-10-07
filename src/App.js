import './App.css';
import Home1 from './components/Home.js';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Product from './components/Product.js';
import Settings from './components/Settings';
import Addproduct from './components/Addproduct';

const { Header, Sider, Content } = Layout;




function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Header style={{color:"white",background:"#3265fa",paddingInline:"25px",display:"flex",justifyContent:"space-between"}}>
          <NavLink to = '/' style={{color:"white"}}><h3><b style={{color:"white"}}>Rubick.ai</b></h3></NavLink>
          <div><Avatar  icon={<UserOutlined />} /> Admin</div>
          </Header>
          <Layout style={{height:"30px",backgroundColor:"white"}}>
            <Sider style={{backgroundColor:"white",paddingInline:"25px",height:"100vh",position:"fixed"}}>
              <ul>
                <li><NavLink to="/home"  style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Home</NavLink></li>
                <li><NavLink to="/Product" style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Products</NavLink></li>
                <li><NavLink to='/settings' style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Settings</NavLink></li>
               
              </ul>
            </Sider>
            <Content style={{marginLeft:"200px",width:"100%",backgroundColor:"lightgray",paddingInline:"40px",height:"120vh",paddingBlock:"50px",wordWrap:"break-word"}}>
                <Routes>
                  <Route path = '/home' element={<Home1 />} />

                  <Route path ='/Product' element={<Product/>}/>
                  <Route path ='/settings' element={<Settings/>}/>
                  <Route path ='/add' element={<Addproduct/>}/>
                 
                  
                </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
      
    
    </div>
      
  );
}

export default App;
