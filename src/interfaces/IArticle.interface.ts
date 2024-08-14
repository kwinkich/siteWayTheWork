import { Statistics } from './IStatistics.interface';

export interface Article {
	id: number;
	title: string;
	content: string;
	tags: string[];
	date: Date;
	statistics: Statistics;
	[key: string]: any; // Дополнительные пропсы
}
