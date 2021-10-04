import { useState } from "react"
import React from 'react'
import {Form,Button, Col,Container,Row} from 'react-bootstrap'
import { Redirect } from "react-router-dom"
import {AiFillFacebook,AiFillApple} from 'react-icons/ai'

const LogIn=()=>{


    const [registration, setRegistration] = useState({email:'',password:''})
    const [shopComplete, setShopComplete] = useState(false)
    const [redirect, setRedirect] = useState(false)

 const handleInput = (key,value)=>{
          setRegistration(
             { ...registration,
            [key]:value}
            )
 }
 const handleSubmit =async(e)=>{
       e.preventDefault()
   
  
         const response = await fetch('http://localhost:3000/authors/login',{
               method:'POST',
               headers:{"Content-Type": "application/json"},
            //    credentials:'include',
               body:JSON.stringify({
                   email:registration.email,
                   password:registration.password})
           })
           if(response.ok){
               const data = await response.json()
               localStorage.setItem('data',"Bearer " + (data.accessToken))
                
                console.log('token',data.accessToken)
                setRedirect(true)
           }else{
               console.log('bad request')
           }
    
 }
 if(redirect){
     return <Redirect to='/Home'/>
 }

 const isButtonDisabled = ()=>{
    let isDisabled = true
     if(registration.password)
     {
         isDisabled=false
     }
     return isDisabled
 }
    return(
         <Container  id='logIn'>
                <img className='trivalogo' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1448891356/jybdj1d8b5g7uhzs96pl.png" alt="" />
            <Row >
                <Col md={6}>
                <Form onSubmit={handleSubmit}>
                      <h2>Log in or create an account</h2>
                       <h5 className="mb-4">Enter your e-mail address to start</h5>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleInput('email',e.target.value)}  value={registration.email}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>handleInput('password',e.target.value)}  value={registration.password}/>
                        </Form.Group>
                <Button disabled={isButtonDisabled()} variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
                </Col>
                <Col className="right-login" md={6}>
                    <div className='d-flex mb-4'>
                    <a href="http://localhost:3000/authors/googleLogin"><button>Sign in to trivago with Google</button></a>
                    </div>
                    
                        <button className='d-flex mb-4'><AiFillFacebook style={{color:'blue'}}/>continue with Facebook</button>
                    
                        <button><AiFillApple style={{color:'blue'}} />continue with Apple</button>
                </Col>
            </Row>
           
       
         </Container>
    )
}

export default LogIn