import React, { use } from 'react';

const Players = ({playerPromise}) => {

    console.log(playerPromise);
    
    const data = use(playerPromise);
    console.log(data);

    return (
        <div>
            Players
        </div>
    );
};

export default Players;