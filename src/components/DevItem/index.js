import React from 'react'
import './styles.css';

function DevItem({ stat }) {

    return (

        <li>
            <img height="180em" alt="githubstats_img" src={stat.imgSrc} />
        </li>
    );
}

export default DevItem;