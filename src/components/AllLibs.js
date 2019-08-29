import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';



/*crud operations*/

class AllLibs extends React.Component {
    state={libs: []};
    componentDidMount () {
        for (var category=1;category<=3;category++){
            axiosWithAuth()
            .get(`https://bw-dev-libs.herokuapp.com/libs/${category}`)
            .then (res => {
                console.log("lib",res.data);
                this.setState({libs: [...this.state.libs, res.data]});
                console.log("libs",this.state.libs);        
            })
            .catch(err=>{
                console.log(err);
            }) 
        }
        
        
    }
    render (){
        return (
           <div>{this.state.libs.map((lib,idx)=>(<div key="{idx}">{lib.lib.category}</div>))}</div>
        )
    }
}
export default AllLibs




