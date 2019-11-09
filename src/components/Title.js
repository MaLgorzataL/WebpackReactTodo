import React from 'react';
import { PropTypes } from 'prop-types';


const Title = ({props}) => (
    <div>
        <h1> Application To do </h1>
        <ul>
            <h3> remain <big>({props})</big> tasks to do</h3>
        </ul>
    </div>
);

Title.propTypes = {
    props: PropTypes.number.isRequired,
};

export default Title;
