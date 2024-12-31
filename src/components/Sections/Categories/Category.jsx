import React from 'react';
import SeactionHeading from '../SectionsHeading/SeactionsHeading';
import Card from '../../Card/Card';

const Category = ({ title, data }) => {
    return (
        <section>
            <SeactionHeading title={title} />
            {data && data.map((item, index) => (
                <Card
                    key={`${item.title}-${index}`}
                    title={item.title}
                    description={item.description}
                    imagePath={item.imagePath}
                    actionArrow={item.actionArrow}
                />
            ))}
        </section>
    );
};

export default Category;
