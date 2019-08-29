import React from 'react';
import { connect } from "react-redux";

const Story = (props)=> {
    console.log("props in story component", props)
    console.log("props in story with input", props.input)
    let place = 0
    let story = ''
    if(props.story.story){
        story = props.story.story.split(' ').map(word => {
            if(word.split('').includes('(')){ 
                return props.userAnswers[place++]
            }else {
                return word
            }
            }).join(' ')
    }
    return (
        <div>
            story time!
            <p>{story}</p>
            <button onClick={()=> props.history.push("/protected")}>play again!</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      test: state.test,
      story: state.story,
      error: state.error,
      userAnswers: state.userAnswers
    };
  };
export default connect(mapStateToProps, {})(Story);

