import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';



/*crud operations*/

class AllLibs extends React.Component {
    state={libs: [], id:0, answers: []};
    
    
    componentDidMount () {
        for (var category=1;category<=3;category++){
            axiosWithAuth()
            .get(`https://bw-dev-libs.herokuapp.com/libs/${category}`)
            .then (res => {
                console.log("lib",res.data);
                res.data.answers.map(lib=> this.setState({answers:[...this.state.answers, lib.answer]}))
                this.setState({libs: [...this.state.libs, res.data]});
                console.log("libs",this.state.libs);        
            })
            .catch(err=>{
                console.log(err);
            }) 
        }
        
        
    }
    render ()
    {
        console.log("Answers state",this.state.answers);
        if (this.state.libs === []) 
        {
            return (<h1>Loading...</h1>);   
        }
        console.log("return", this.state.libs);
        const sentence="TEST (TEST) TEST"
        
        const extracted = ()=>{
            return /\((.*?)\)/
        }
        const Test=sentence.match(extracted)
        console.log(Test);
        return (
        
           <div>{
                this.state.libs.map((lib,idx)=>(<div key={idx}>
                <button onClick={()=>{this.setState({id:idx+1});}}>{lib.lib[0].category}</button> 
                  {/* {console.log(lib.lib.match(extracted))}  */}
                <div>
                 <p>{lib.lib[0].story}</p> 
                

                    </div>
                   </div>))  
                                    
            }
            </div>


        )
    }
}



export default AllLibs




