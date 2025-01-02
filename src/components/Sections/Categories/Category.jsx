import React, { act } from 'react';
import SeactionHeading from '../SectionsHeading/SeactionsHeading';
import Card from '../../Card/Card';
import ArrowIcon from '../../commom/ArrowIcon';

const Category = ({ title, data }) => {
    return (
        <>
            <SeactionHeading title={title} />
            <div className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data &&
                    data.map((item, index) => (
                        <Card
                            key={index}
                            title={item?.title}
                            description={item?.description}
                            imagePath={item?.image}
                            actionArrow={true}
                            height="280px"
                            width="240px"
                        />
                    ))}
            </div>
        </>
    );
};

export default Category;
