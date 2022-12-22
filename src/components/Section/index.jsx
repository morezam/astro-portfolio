import react from 'react';
import Button from '../Button';
import Styles from './styles.module.scss';

const Section = ({ title, more, children }) => {
	return (
		<section className={Styles.section}>
			<h2>{title}</h2>
			<div className={Styles.content}>{children}</div>
			<Button>{more}</Button>
		</section>
	);
};

export default Section;
