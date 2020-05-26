import React from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../actions';
//TODO: maybe needs to use redux form instead?

class UserForm extends React.Component {
//citation: https://reactjs.org/docs/forms.html#controlled-components
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }


   /*  handleChange = (event) => {
        //arrow notation to avoid JS function creating its own context for this (scoping)
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //Todo: function to pass this submitted value to add to list of messages
    } */

    

    render() {
       //TODO: implement handleSubmit
       //maybe replace submit button to general button component type
       //TODO: write separate handleChange function for message(CURRENTLY DISPLAYS THE SAME FOR BOTH USERNAME AND MESSAGE)
       return(<form onSubmit= {this.handleSubmit}>
           <label>
               Username:
               <input type="text" value={this.props.value} onChange={(e) => this.props.handleChange(e.target.value)}/>
           </label>
           <label>
               Enter Your Message:
               <input type="text" value={this.props.value} onChange={(e) => this.props.handleChange(e.target.value)}/>
           </label>
               <input type="submit" value="Submit"></input> 
       </form>
       );
       
    }
}

//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return{ value: state.value }; //now it will appear as props
}

export default connect(mapStateToProps, {handleChange}) (UserForm);
//calls a function that calls a function with Button as the param
