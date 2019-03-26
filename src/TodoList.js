import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component{

    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue}
                    />
                    <button>submit</button>
                </div>
                <ul>
                    <li>
                        hello
                    </li>
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }

};


//store.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            console.log(e.target.value)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);