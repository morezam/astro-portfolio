import react from 'react';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			<p>&copy; {new Date().getFullYear()} Mohammadreza Hamzehei</p>
			<div className={Styles.socialLinks}>
				<a href="https://www.linkedin.com/in/morezaham/">
					<img
						className={Styles.socialLogo}
						src="/social-logos/linkedin.svg"
						alt="linkden account"
					/>
				</a>
				<a href="https://github.com/morezam">
					<img
						className={Styles.socialLogo}
						src="/social-logos/github.svg"
						alt="github account"
					/>
				</a>
				<a href="mailto:mohammadrzva76@gmail.com">
					<img
						className={Styles.socialLogo}
						src="/social-logos/gmail.svg"
						alt="Email me"
					/>
				</a>
			</div>
		</footer>
	);
}
export default Footer;
