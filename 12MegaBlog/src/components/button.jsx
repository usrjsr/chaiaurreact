import React from 'react';

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    classname='',
    ...props
}) {
    return (
        <button
            className={`px-6 py-2 rounded-full duration-200 ${bgColor} ${textColor} ${classname}`}> {children}
        </button>
    );
}

export default Button;