import React from 'react';
import ArrowIcon from '../commom/ArrowIcon';

const Card = ({ imagePath, title, description, actionArrow, height, width }) => {
    return (
        <div className="flex flex-col p-6">
            <img
                className={`h-auto max-w-[${width ? width : '200px'}] object-cover rounded-md mb-4`}
                src={imagePath}
                alt="Jeans"
                style={{ height: height ? height : '240px', width: width ? width : '200px' }}
            />
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-[16px] p-1">{title}</p>
                    {description && (
                        <p className="text-[12px] px-1 text-gray-600">{description}</p>
                    )}
                </div>
                {actionArrow && (
                    <span className='cursor-pointer pr-2 flex items-center'>
                        <ArrowIcon />
                    </span>
                )}
            </div>
        </div>
    );
};

export default Card;
