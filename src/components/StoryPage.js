import React from 'react';
import { connect } from "react-redux";

const Story = (props)=> {
    console.log("props in story component", props)
    console.log(props.input)
    let place = 0
    let story = ''
    if(props.story){
        story = props.story.split(' ').map(word => {
            if(word.split('').includes('(')){ 
                return props.input[place++]
            }else {
                return word
            }
            }).join(' ')
    }
    return (
        <div>
            story time!
            <p>{story}</p>

        </div>
    )
}
export default Story
