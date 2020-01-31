import React, { Component } from 'react';
import Classes from './Login.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Login extends Component {

    render(){
        return (
            <div className={Classes.flexContainer} >

            </div>
        //     <Form>
        //     <FormGroup>
        //       <Label for="exampleEmail">Email</Label>
        //       <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        //     </FormGroup>
        //     <FormGroup>
        //       <Label for="examplePassword">Password</Label>
        //       <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        //     </FormGroup>
        //     <FormGroup>
        //       <Label for="exampleSelect">Select</Label>
        //       <Input type="select" name="select" id="exampleSelect">
        //         <option>1</option>
        //         <option>2</option>
        //         <option>3</option>
        //         <option>4</option>
        //         <option>5</option>
        //       </Input>
        //     </FormGroup>
        //     <Button>Submit</Button>
        //   </Form>
        )
    }
}

export default Login;