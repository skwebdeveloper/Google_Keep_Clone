import React, {useState} from 'react';
import Goheader from './Goheader';
// import Gofooter from './Gofooter'
import Gocreatenote from './Gocreatenote'
import Gonote from './Gonote'
import Gsidenav from './Gsidenav'


const Google = () =>{
    const [addItem, setAddItem] = useState([]);
    const addnote = (note) =>{     
        setAddItem((prevData) =>{
            return [...prevData, note]
        })
    }
  const onDelete = (id) =>{
      setAddItem((olddata) =>{
          olddata.filter((currdata, index) =>{
              return index !== id;
          })
      })
  }  
    return(
        <React.Fragment>
       <Goheader />
       <Gsidenav />
       <Gocreatenote  passNote={addnote}  />
       { addItem.map((val,index) => {
               return(
               <Gonote 
               key={index}
               id={index}
               title={val.title}
               content={val.content}
               deleteItem={onDelete}
               />
               )
           })
           }
        </React.Fragment>
    )
}



export default Google;

