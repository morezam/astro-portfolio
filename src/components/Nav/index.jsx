import react, { useState } from 'react';
import Styles from './styles.module.scss';

function Nav({ home = false }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className={`${Styles.nav} ${home ? Styles.navHome : null}`}>
			<div className={Styles.left}>
				<a className={Styles.logolink} href="/">
					<img
						className={Styles.logo}
						src="/assets/logo.svg"
						alt="Websit Logo"
					/>
				</a>
			</div>
			<img
				onClick={() => setIsOpen(!isOpen)}
				className={Styles.menu}
				src="/assets/menu.svg"
				alt="menu"
			/>
			<div
				className={`${Styles.right} ${
					isOpen ? Styles.navOpen : Styles.navClose
				} `}>
				<div className={Styles.list}>
					<img
						onClick={() => setIsOpen(false)}
						className={Styles.close}
						src="/assets/close.svg"
						alt="close the nav"
					/>
					<a className={Styles.link} href="/projects">
						Portfolio
					</a>
					<a className={Styles.link} href="/about">
						About
					</a>
					<a className={Styles.link} href="/blog">
						Blog
					</a>
				</div>
			</div>
		</nav>
	);
}
export default Nav;
