import React from 'react';

function DevForm({ dev }) {

    document.title = dev.name;

    return (
        <div>
            <header>
                <div className="user-info">
                    <img src={dev.avatar_url} alt={dev.name} />
                    <strong>{dev.name}</strong>
                    <span>{dev.login}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
        </div>
    );
}

export default DevForm;