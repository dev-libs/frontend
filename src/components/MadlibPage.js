import React, { useState } from "react";
import { connect } from "react-redux";
import {Route, Link } from "react-router-dom";
import Story from "./StoryPage";
import styled from "styled-components";
import {getData, postData, handleTask} from '../actions';

const CategoryBtn = styled.button`
  border-radius: 6px;
  border: 1px solid #6a9955;
  background-color: #ededed;
  color: #6a9955;
  width: 7%;
  margin: 5px;
  padding: 5px;
`;

const Category2Btn = styled.button`
  border-radius: 6px;
  border: 1px solid #7bdcfe;
  background-color: #ededed;
  color: #7bdcfe;
  width: 7%;
  margin: 5px;
  padding: 5px;
`;

const Category3Btn = styled.button`
  border-radius: 6px;
  border: 1px solid #568ca1;
  background-color: #ededed;
  color: #568ca1;
  width: 7%;
  margin: 5px;
  padding: 5px;
`;

const PlayBtn = styled.button`
  background-color: #ededed;
  color: #007ACC;
  border-radius: 6px;
  width: 6%;
  margin: 5px;
  padding: 5px;
  align-items: center;
`;

   
const MadlibPage = (props) => {
    const types = {noun: 1, verb: 2, adjective: 3, adverb: 4, number: 5, color: 6}
    const dataSetUp = (e)=> {
        e.preventDefault()
        const data =[];
        for(let i= 0; i <wordTypes.length; i++){
            data.push({lib_id: libId, type_id: types[wordTypes[i]], answer: userAnswer[i], order: i})

        }
        console.log(data)
        props.handleTask(userAnswer)
        props.postData(data)
    }
    const[libId, setLibId]= useState(null)
    const[play, setPlay] = useState(false)
    const[form, setForm] = useState(false)
    const[userAnswer, setUserAnswer]= useState({})
    console.log(props.story.story)
    const story = props.story.story;
    console.log("user answer", userAnswer)
    console.log(story)
    let wordTypes = []
    let badCharacters = ["(", ")", ",", ".", "!", ";", "?", ":"]
    if (story) wordTypes = story.split(' ').filter(word => word.includes("("))
    if (wordTypes.length > 0){

         wordTypes = wordTypes.map(word =>{
             return word.split('').filter(letter =>  !badCharacters.includes(letter)).join('').toLowerCase()
        })
        
    }
    console.log(wordTypes)
  
const logout = ()=> {
    localStorage.removeItem('token');
    props.history.push('/');

}
    return(
        <div>
            hello world
            <button onClick={logout}>log out</button>
            {props.test}
            <button onClick={()=>setPlay(true)}>play</button>
            {play && <div><button onClick={()=>{
                props.getData(1)
                setLibId(1)
                setForm(true)
                }} >general</button>  
                <button onClick={()=>{
                    setLibId(2)
                    setForm(true)
                    props.getData(2)}}>javascript</button> 
                 <button onClick={()=>{
                     setLibId(3)
                     setForm(true)
                     props.getData(3)}} >python</button></div>}
                 <form onSubmit={dataSetUp}>
                 {form && wordTypes.map((wordType,i) => {
                     return (<div key={i}><label>{wordType}</label><input name={i} value={userAnswer[i]} onChange={(e)=> {
                         
                         setUserAnswer({...userAnswer, [e.target.name]: e.target.value})
                        //  props.handleTask(userAnswer)
                     }}/></div>)
                 })
                }
                     <button >submit your words</button>
                     </form>
                     <Story story={props.story.story} input={userAnswer}  wordArray={wordTypes}/>
                     {/* <Link to={`/protected/${id}`}>your story</Link> */}
                     {console.log("answers connected to redux", props.userAnswers)}
                 
        </div>
     
   
  );
};

const mapStateToProps = state => {

  return {
    test: state.test,
    story: state.story,
    error: state.error,
    userAnswers: state.userAnswers
  };
};


export default connect(mapStateToProps, {getData, postData, handleTask})(MadlibPage);

