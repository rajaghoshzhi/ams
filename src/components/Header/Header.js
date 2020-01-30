import React from 'react';
import Classes from './Header.css';

const Header = (props) => {

    console.log(props.fields);

    let menuList = props.fields.values.map(function(el){
        return <div key={el}>{el}</div>
    })

    return (
        <div className={Classes.FlexContainer}>
              <div>Attendence Management System</div>
              {menuList}
        </div>
    );
}

export default Header;