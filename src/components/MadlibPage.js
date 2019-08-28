import React from 'react';
import {connect} from 'react-redux';

const MadlibPage = (props) => {
    return(
        <div>
            hello world
            {/* {props.test} */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test
    }
}
export default connect(mapStateToProps, {})(MadlibPage);