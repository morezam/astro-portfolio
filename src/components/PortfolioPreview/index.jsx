import react from 'react';
import Styles from './styles.module.scss';

function PortfolioPreview({ project }) {
	const { frontmatter } = project;
	return (
		<div
			className={`${Styles.card} ${
				frontmatter.featured ? Styles.featured : ''
			}`}>
			<div
				className={`${Styles.titleCard} ${
					frontmatter.featured ? Styles.featureHeight : Styles.normalHeight
				}`}
				style={{
					backgroundImage: `url(${frontmatter.imgPreview})`,
				}}></div>
			<div>
				<a className={Styles.link} href={project.url}>
					<h1 className={Styles.title}>{frontmatter.title}</h1>
					<span className={Styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
