import { Statistics } from './IStatistics.interface';
import { Tags } from './ITags.interface';

export interface Article {
	title: string;
	content: string;
	tags: Tags[];
	date: Date;
	statistics: Statistics;
}
