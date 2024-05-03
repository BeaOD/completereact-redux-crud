import React from "react";
import './css/addUser.css'

class AddUserForm  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            name:'',
            email:'',
            gen:'',
            id:''
        };
    }

    handleChange = (e) => {
        //the set state is because we want to update the state
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value,
        });
       
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // passing the new user from app.js to adduserform 
        this.props.addUser(this.state)
        this.setState({
            name:'',
            email:'',
            gen:'',
            id:'',
            
        })
        //handles form submit
    
    };
    
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                     <br />
                    <input type='text' placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}></input>
                </div>

                <div>
                    <label>Email</label>
                    <br />
                    <input type='text' placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                </div>

                <div>
                    <label>Gen</label>
                    <br />
                    <input type='number' placeholder="gen" name="gen" value={this.state.gen} onChange={this.handleChange}></input>
                </div>

                <br/>
                <button >Submit</button>

            </form>
          )
    }
}
 
export default AddUserForm ;

