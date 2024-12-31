import React from 'react';
import SeactionsHeading from './SectionsHeading/SeactionsHeading';
import Card from '../Card/Card';
import Jeans from '../../assets/img/jeans.jpg';
import Shirts from '../../assets/img/shirts.jpg';
import Tshirt from '../../assets/img/tshirts.jpeg';
import Dresses from '../../assets/img/dresses.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const items = [
    {
        title: 'Jeans',
        imagePath: Jeans,
    },
    {
        title: 'Shirts',
        imagePath: Shirts,
    },
    {
        title: 'T-Shirts',
        imagePath: Tshirt,
    },
    {
        title: 'Dresses',
        imagePath: Dresses,
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4, // Số lượng sản phẩm hiển thị trên màn hình desktop
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2, // Số lượng sản phẩm hiển thị trên màn hình tablet
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Số lượng sản phẩm hiển thị trên màn hình mobile
    },
};

const NewArrivals = () => {
    return (
        <section className="px-8 py-12">
            <SeactionsHeading title="New Arrivals" />
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
                {items.map((item, index) => (
                    <Card
                        key={`${item.title}-${index}`}
                        title={item.title}
                        imagePath={item.imagePath}
                    />
                ))}
            </Carousel>
        </section>
    );
};

export default NewArrivals;
