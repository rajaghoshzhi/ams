import React, { Component } from 'react';
import Classes from './Login.css';
import { Button, Form } from 'reactstrap';
import InputBox from '../../components/FormElements/InputBox/InputBox';
import SelectBox from '../../components/FormElements/SelectBox/SelectBox';


class Login extends Component {
    state = {
        Options:["Admin","Teacher","Student"]
    }
    render(){
        return (
            <div className={Classes.flexContainer} >

           <div className={Classes.FormLayout}>
               <div className={Classes.FormHeader}>
                    <header>Log In</header>
               </div>
               <div className={Classes.FormBody}>
                    <Form>
                            
                            <InputBox 
                            LabelName = "Email"
                            InputType = "email"
                            InputName = "email"
                            InputID = "exampleEmail"
                            PlaceHolder = "Enter your Email ID"
                            />
                            <InputBox 
                            LabelName = "Password"
                            InputType = "password"
                            InputName = "password"
                            InputID = "examplePassword"
                            PlaceHolder = "Enter your Password"
                            />
                            <SelectBox Options= {this.state.Options}/>
                            <Button>Submit</Button>
                        </Form>
               </div>
                
           </div>
            
          </div>
        )
    }
}

export default Login;