import './_header.scss';
export default function Header() {
	return (
		<header className='header'>
			<p className='header__logo'>way to work</p>
			<ul className='header__ul'>
				<li className='header__li'>
					<a className='header__link link' href='https://t.me/kwinkich_dev'>
						creater
					</a>
				</li>
				<li className='header__li'>
					<a className='header__link link' href='#'>
						bio
					</a>
				</li>
				<li className='header__li'>
					<a className='header__link link' href='#'>
						channel
					</a>
				</li>
				<li className='header__li'>
					<a className='header__link link' href='#'>
						sourceCode
					</a>
				</li>
			</ul>
		</header>
	);
}
