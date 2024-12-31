import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({ title }) => {
    return (
        <div className="flex flex-wrap px-10 my-5">
            <div>
                <p className="text-3xl">{title}</p>
            </div>
        </div>
    );
};

SectionHeading.defaultProps = {
    title: 'Default Title',
};

SectionHeading.propTypes = {
    title: PropTypes.string,
};

export default SectionHeading;
