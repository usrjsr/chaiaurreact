import React, {useId} from 'react';

const Input = React.forwardRef(
    function Input({
        label,
        type = 'text',
        classname = '',
        ...props
    },ref){
        const id = useId();
        return (
            <div className='w-full'>
                {label && <label className='inline-block mb-2 pl-1' htmlFor={id}>{label}</label>}
                <input type={type} className={` ${classname} w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`} id={id} ref={ref} {...props} />
            </div>
        )
    }
)

export default Input;