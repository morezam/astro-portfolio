import React from 'react';
import Styles from './styles.module.scss';

const Back = ({ to, text }) => {
	return (
		<a href={`/${to}`} className={Styles.wrapper}>
			<img
				className={Styles.img}
				src="/assets/back-arrow.svg"
				alt="back arrow"
			/>
			<p className={Styles.text}>Back to {text}</p>
		</a>
	);
};

export default Back;
