import { useState } from 'react';
import { datapost } from '../../data/data';
import { Article } from '../../interfaces/IArticle.interface';
import { ArticleCard } from '../Article/Article.component';
import ArticleTemplate from '../ArticlePageTemplate/ArticlePageTemplate.component.tsx';
import Header from '../Header/Header.component';
import './_notes-main.scss';

export default function NotesMain() {
	const [isSelectArticle, setIsSelectArticle] = useState<boolean>(false);
	const [indexSelectArticle, setIndexSelectArticle] = useState<number>(0);

	return (
		<div className='container'>
			<Header />
			<main className='main'>
				{!isSelectArticle && (
					<section className='main-grid'>
						{datapost.map((post: Article, index: number) => (
							<ArticleCard
								key={post.id}
								id={post.id}
								title={post.title}
								content={post.content}
								tags={post.tags}
								date={post.date}
								statistics={post.statistics}
								onClick={() => {
									setIsSelectArticle(true);
									setIndexSelectArticle(index);
								}}
							/>
						))}
					</section>
				)}

				{isSelectArticle && (
					<ArticleTemplate
						returned={() => setIsSelectArticle(false)}
						index={indexSelectArticle}
					/>
				)}
			</main>
		</div>
	);
}
