import React from "react";
import { useState } from "react";

export default function Form(){

    let [formData,setFormData] = React.useState({
        email:"",
        password:"",
        conpass:"",
        check: false
    
      })
      
      function handleChange(event){
    let {name,type,value,checked} = event.target
        setFormData(prevState => {return{
            ...prevState,
            [name] : type === "checkbox" ? checked : value
        }})
      }

      function handleSubmit(event){
        event.preventDefault()
        
        console.log(formData)
        if(formData.password === formData.conpass)
            console.log("Successfully signed up")
        else
            {console.log("Failed! Passwords do not match")
            return}

           
        if(formData.check == true){
            console.log("Thanks for reading the terms and conditions") 
        }

      }
    return(
        <>
            <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                
                <input type="email" name='email' className="formInput" placeholder="@email" value={formData.email} onChange={handleChange}/>
                


                <input type="password" name='password' className="formInput" placeholder="Create a strong password" value={formData.password} onChange={handleChange}/>
                


                <input type="password" name='conpass' className="formInput" placeholder="Re-enter your password" value={formData.conpass} onChange={handleChange}/>

                

                <div className="terms">
                <input type="checkbox" name="check" id="check1" checked ={formData.check}  onChange={handleChange}/><label htmlFor="check1" >Read the Terms and Condition</label>
                </div>

                <br />
                <button className="button">Sign Up</button>
            
        
                </form>
            </div>
        </>
    )
}