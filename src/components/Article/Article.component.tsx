import React from 'react';
import { Article } from '../../interfaces/IArticle.interface';
import './_article.scss';

export const ArticleCard: React.FC<Article> = ({
	id,
	title,
	content,
	tags,
	date,
	statistics,
	...rest
}) => {
	return (
		<div className='article-card' id={`id${id}`} {...rest}>
			<h3 className='h3 primary-text article-card__h3'>{title}</h3>
			<p className='article-card__text'>{content}</p>
			<p className='article-card__tags'> Tags: {tags.join(', ')}</p>
			<p className='article-card__date'>Date: {date.toLocaleDateString()}</p>
			<p className='article-card__statics'>
				<strong>Eng</strong>: {statistics.engTime}m; <strong>Prog</strong>:{' '}
				{statistics.progTime}m; <strong>Total</strong>: {statistics.totalTime}m;
			</p>
		</div>
	);
};
