import React from 'react';

const Card = ({ imagePath, title, description, actionArrow }) => {
    return (
        <div className="flex flex-col p-6">
            <img
                className="h-[240px] w-[200px] bg-cover bg-center border rounded hover:scale-105 cursor-pointer"
                src={imagePath}
                alt={title} // Thay 'Jeans' bằng {title} cho tính linh hoạt
            />
            <div className="flex justify-between">
                {/* Nếu cần thêm các phần tử ở đây, có thể viết vào */}
            </div>
            <div className="flex flex-col p-5">
                <p className="text-[16px]">{title}</p>
                {description && <p className="text-[14px]">{description}</p>}
            </div>
            {actionArrow && <div>{/* Thêm các biểu tượng hoặc nội dung cho actionArrow */}</div>}
        </div>
    );
};

export default Card;
