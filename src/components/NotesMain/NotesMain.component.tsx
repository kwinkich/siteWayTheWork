import Header from '../Header/Header.component';

import { datapost } from '../../data/data.js';
import { Article } from '../../interfaces/IArticle.interface.ts';
import { ArticleCard } from '../Article/Article.component';
import './_notes-main.scss';

export default function NotesMain() {
	return (
		<div className='container'>
			<Header />
			<main className='main'>
				<section className='main-grid'>
					{datapost.map((post: Article) => (
						<ArticleCard
							title={post.title}
							content={post.content}
							tags={post.tags}
							date={post.date}
							statistics={post.statistics}
						/>
					))}
				</section>
			</main>
		</div>
	);
}
