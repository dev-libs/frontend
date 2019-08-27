import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions';


const MadlibPage = (props) => {
    const[play, setPlay] = useState(false)
    const[form, setForm] = useState(false)
    console.log(props.story)
  

    return(
        <div>
            hello world
            {props.test}
            <button onClick={()=>setPlay(true)}>play</button>
            {play && <div><button onClick={()=>{
                props.getData(1)
                setForm(!form)
                }} >general</button>  
                <button onClick={()=>props.getData(3)}>javascript</button> 
                 <button onClick={()=>props.getData(3)} >python</button></div>}
                 {form && <form>
                     <input
                     placeholder="adjective"
                     type="text"
                     name="adjective"
                     />
                     <input
                     placeholder="noun"
                     type="text"
                     name="noun"
                     />
                     <input
                     placeholder="verb"
                     type="text"
                     name="verb"
                     />
                     <input
                     placeholder="noun"
                     type="text"
                     name="noun"
                     />
                     <button>submit your words</button>
                 </form>}
            
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
export default connect(mapStateToProps, {getData})(MadlibPage);