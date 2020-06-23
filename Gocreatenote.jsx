import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Gocreatenote = (props) =>{

    const [ note, setNote ] = useState({
        title: "",
        content: ""
    })
    
    const InputEvent = (event) =>{
        // const name = event.target.name;
        // const content = event.target.content;

//============================
// This is use to extract value 
//============================

const { name, value } = event.target;

setNote((olditems) =>{
    return{
        ...olditems,[name]:value
    }
})
    }
        
const addEvent = () =>{
     props.passNote(note);
     setNote({
        title: "",
        content: ""
     })
}    

    return(
        <React.Fragment>
         <form className="login">
           <input type="text"
            placeholder="Title" 
            autoComplete="off"
            onChange={InputEvent}
            name="title"
            value={note.title}
            />
           
           <textarea 
           rows="5" 
           maxlength = "200" 
           column="5" 
           name="content"
           placeholder="Take a note ..."
           onChange={InputEvent}
            value={note.content}
            />
           <Button className="add" onClick={addEvent}>Add</Button>
         </form>
        </React.Fragment>
    )
}



export default Gocreatenote;

