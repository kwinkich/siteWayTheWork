import './_read-first.scss';

export default function ReadFirst({ ...props }) {
	const userId = new Date().getMilliseconds();

	return (
		<section className='container first'>
			<div className='first__text-block'>
				<h1 className='h1 white-text'>
					Привет, <span className='primary-text'>user{userId.toString()}!</span>
				</h1>
				<p className='first__description'>
					Это простой сайт. Сюда я буду публиковатьы посты про то, что и как я
					делаю, чтобы устроиться на работу (junior front-end)
				</p>
			</div>
			<button {...props} className='button active'>
				Читать посты
			</button>
		</section>
	);
}
