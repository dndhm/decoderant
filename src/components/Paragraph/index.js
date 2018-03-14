import React from 'react';
import propTypes from 'prop-types';

const Paragraph = ({ children }) => (
	<p>{children}</p>
);

Paragraph.propTypes = {
	children: propTypes.node.isRequired,
	classes: propTypes.object,
};

export default Paragraph;
