import React from 'react';

const About = ({match}) => {
    return(
        <div>
            <h3>어바웃 {match.params.name}</h3>
        </div>
    );
}

export default About;