import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary text-white mt-5">
            {children}
        </button>
    );
};

export default PrimaryButton;