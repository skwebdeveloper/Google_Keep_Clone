import React from 'react';
import './gosidebar.css'

const Gsidenav = () =>{
return(
    <React.Fragment>
    <div className="sidebar">
    <ol>
    <li className="active"><img src="https://img.icons8.com/ios-glyphs/30/000000/light.png"/></li>
    <li><img src="https://img.icons8.com/windows/32/000000/appointment-reminders.png"/></li>
    <li><img src="https://img.icons8.com/material/24/000000/bookmark-outline.png"/></li>
    <li><img src="https://img.icons8.com/metro/26/000000/pen.png"/></li>
    <li><img src="https://img.icons8.com/windows/26/000000/save.png"/></li>
    <li><img src="https://img.icons8.com/material/24/000000/filled-trash.png"/></li>
    </ol>
    </div>
    </React.Fragment>
)
}


export default Gsidenav;