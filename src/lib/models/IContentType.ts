import { IModel } from './IModel';

export interface IContentType extends IModel {
	typeEn: string;
	typeTr: string;
	score: number;
}
