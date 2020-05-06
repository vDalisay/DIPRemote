import React from 'react';
import './LabelStyles.css';

const TeamMember = (props) => {
    return (
        <div className='member'>
            <label className='membername'>{props.name}</label>
            <label className='memberrole'>{props.role}</label>
        </div>
    );
};

export default TeamMember;