import React, { useState } from 'react';
import axios  from 'axios';
import {Form, Input, Select,Row, Col, Button, InputNumber, message} from 'antd'



export default function Addproduct() {

  const onFinish=(e)=>{
     let state={
      code:e.ProductCode,
      name:e.Name,
      status:e.status,
      qty:e.Quantity,
      price:e.Price,
      date:Date()
     }
    axios.post("/new",state)
    .then(()=>alert(`Product Added Succesfully`))
    .catch(err=>console.log(err))
    
  }

  return (
    <div>
        <div><h2><b>New Products</b></h2></div>
        <div>
          <Form  onFinish={onFinish} layout='vertical'>
            <Row>
            <Form.Item name="ProductCode" label="Product Code" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/^\d+$/g),
                message: "Wrong format!"

              },{
                min:4,
                message:"Code must be grster than 3 digit"
              }
            ]}>
             <Input style={{width:"400px",height:"50px"}} placeholder='Product Code' />
             </Form.Item>
            
             <Form.Item name="status" label="Status" style={{marginLeft:"40px"}}
              rules={[
                {
                  required:true
                }

              ]}
             >
              <Select style={{width:"150px"}}>
                <Select.Option style={{color:"orange"}}  shape='round' value="active"><b>Active</b></Select.Option>
                <Select.Option style={{color:"red"}} value="Inactive"><b>InActive</b></Select.Option>
              </Select>
              </Form.Item>
            </Row>
            

            <Form.Item name="Name" label="Name" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp (/^[A-Za-z]+$/),
                message: "Wrong format!"

              },{
                min:3,
                message:"Name must be grster than 2 letter"
              }
            ]}>
              <Input  style={{width:"595px",height:"50px"}} placeholder='Name'/>
            </Form.Item>
            <Form.Item name="Quantity" label="Quantity" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/^\d+$/g),
                message: "Wrong format!"

              },{
                max:100,
                message:"qty shoild be less thab 100"
              },{
                min:1,
                message:"quantiiy must be more than 1"
              }
            ]}>
              <Input style={{width:"400px",height:"50px"}} placeholder='Quantity'/>
            </Form.Item>
            <Form.Item name="Price" label="Price"rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/^\d+$/g),
                message: "Wrong format!"

              }
            ]}>
              <Input style={{width:"400px",height:"50px"}} placeholder='Price'/>
            </Form.Item>
            <Form.Item>
            <Button type='primary' htmlType='reset' shape='round' style={{color:"darkgray", backgroundColor:"grey",width:"175px" ,height:"40px"}}>Cancel</Button>
              <Button type='primary' htmlType='submit' shape='round' style={{marginLeft:"20px",width:"175px" ,height:"40px"}}>Submit</Button>
            </Form.Item>

            
          </Form>
        </div>
      
    </div>
  );
}
