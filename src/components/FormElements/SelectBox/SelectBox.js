import React from 'react';
import {FormGroup, Label, Input } from 'reactstrap';
import Classes from './SelectBox.css';
const SelectBox = (props) => {
    console.log(props.Options);
    let selectOptions = props.Options.map(function(el){
            return (<option key={el}>{el}</option>)
    })
    return (
        <FormGroup>
        <Label for="exampleSelect" className={Classes.FormLabel}>Login as</Label>
        <Input type="select" name="select" id="exampleSelect">
            {selectOptions}
        </Input>
        </FormGroup>
    )
}

export default SelectBox;