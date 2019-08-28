import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getData, postData} from '../actions';


   
const MadlibPage = (props) => {
    const types = {noun: 1, verb: 2, adjective: 3, adverb: 4, number: 5, color: 6}
    const dataSetUp = (e)=> {
        e.preventDefault()
        const data =[];
        for(let i= 0; i <wordTypes.length; i++){
            data.push({lib_id: libId, type_id: types[wordTypes[i]], answer: userAnswer[i], order: i})

        }
        console.log(data)
        props.postData(data)
    }
    const[libId, setLibId]= useState(null)
    const[play, setPlay] = useState(false)
    const[form, setForm] = useState(false)
    const[userAnswer, setUserAnswer]= useState({})
    console.log(props.story.story)
    const story = props.story.story;
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
                setForm(!form)
                }} >general</button>  
                <button onClick={()=>{
                    setLibId(2)
                    props.getData(2)}}>javascript</button> 
                 <button onClick={()=>{
                     setLibId(3)
                     props.getData(3)}} >python</button></div>}
                 <form onSubmit={dataSetUp}>
                 {form && wordTypes.map((wordType,i) => {
                     return (<div key={i}><label>{wordType}</label><input name={i} value={userAnswer[i]} onChange={(e)=> {
                         setUserAnswer({...userAnswer, [e.target.name]: e.target.value})
                     }}/></div>)
                 })
                }
                     <button >submit your words</button>
                     </form>
                 
    
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test,
        story: state.story, 
        error: state.error
    }
}
export default connect(mapStateToProps, {getData, postData})(MadlibPage);