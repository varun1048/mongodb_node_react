import React, { useState } from "react"
import ax from "axios"

export default function PostMessage(){

    const [input,setInput] = useState({
        title:"",
        message:"",
    })

    function handleChange(event){
        const {name,value} = event.target 
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input)
        let newV={
            title : input.title,
            message : input.message
        }
        ax.post("http://localhost:5000/postMessages/",newV)
        
    }
    return (
    <div className="container"> 
        <form >
            <div class="form-group">
                <label for="title">title</label>
                <input type="text" class="form-control" onChange={handleChange}  placeholder="Enter title" name="title" id="title" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="message" onChange={handleChange}  placeholder="Enter title" id="title" />
            </div>
           
            <button type="submit" onClick={handleClick} class="btn btn-primary">Submit</button>
        </form>
    </div>)
}