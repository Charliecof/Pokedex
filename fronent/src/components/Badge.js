import React from 'react';

function Badge({text,colorCode}) {
    const styles ={
        backgroundColor: colorCode
    }
    return (
        <div className="box p-2 has-text-centered m-1" style={styles}>
            {text}
        </div>
    );
}

export default Badge;