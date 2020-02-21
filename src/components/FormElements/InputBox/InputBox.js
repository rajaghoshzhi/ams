import React from 'react';
import {FormGroup, Label, Input } from 'reactstrap';
import Classes from './InputBox.css';

const InputBox = (props) => {

    return (
        <FormGroup>
            <Label for={props.InputID} className={Classes.FormLabel}>{props.LabelName}</Label>
            <Input type={props.InputType} name={props.InputName} id={props.InputID} placeholder={props.PlaceHolder} />
        </FormGroup>
    )
}

export default InputBox;

