import React from 'react';
export const DropDown = ({ options, aria }) => {



    return (
        <div
            aria-labelledby={aria}
            className={`dropdown w-full dropdown-container box-shadow-custom animated`}
            style={{marginTop: "2px" }}
        >
            <ul className='gap-3 w-full flex flex-col'>
                {options.map((option, index) => (
                    <li key={index} className='flex flex-row gap-3 items-center dropdown-item p-3 w-full text-left hover:bg-gray-200 h-full'>
                        <span className='icon-option'>{React.createElement(option.icon)}</span>
                        <span className='text-option'>{option.text}</span> 
                    </li>
                ))}
            </ul>
        </div>
    );
};
