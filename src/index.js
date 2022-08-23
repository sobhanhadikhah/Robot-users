import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import {Users_Face} from './database-normal.js';
import {Card} from './index2';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Card  id = {Users_Face[0].id} 
        name = {Users_Face[0].name} 
        email= {Users_Face[0].email}   />
  <Card  id = {Users_Face[1].id} 
        name = {Users_Face[1].name} 
        email= {Users_Face[1].email} />
  <Card  id = {Users_Face[2].id} 
        name = {Users_Face[2].name} 
        email= {Users_Face[2].email} />
  <Card  id = {Users_Face[3].id} 
        name = {Users_Face[3].name} 
        email= {Users_Face[3].email}/>
  </div>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
