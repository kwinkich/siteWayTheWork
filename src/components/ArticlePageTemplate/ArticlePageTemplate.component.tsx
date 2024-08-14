import { MouseEventHandler } from 'react';
import { datapost } from '../../data/data';
import './_article-tempate.scss';

// Изменение: деструктуризация пропсов и правильная типизация
export default function ArticleTemplate({
	index,
	returned,
}: {
	index: number;
	returned: MouseEventHandler;
}) {
	const article = datapost[index];

	const contentLines = article.content
		.split('\n')
		.filter((line) => line.trim() !== '');

	return (
		<section className='article-template'>
			<a onClick={returned} className='link'>
				--Back--
			</a>
			<h2 className='h2 primary-text article-template__title'>
				{article.title}
			</h2>
			<div className='article-template__tags'>
				<p>Tags: {article.tags.map((tag) => `#${tag}; `)}</p>
			</div>
			<div className='article-template__content'>
				{contentLines.map((line, i) => (
					<p key={i}>{line}</p>
				))}
			</div>
			<div className='article-template__date'>
				<p>Date: {article.date.toDateString()}</p>
			</div>
			<div className='article-template__statistic'>
				<p>Eng:{article.statistics.engTime}</p>
				<p>Prog:{article.statistics.progTime}</p>
				<p>Total:{article.statistics.totalTime}</p>
			</div>
		</section>
	);
}
