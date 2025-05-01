import { IModel } from './IModel';

export interface IArchive extends IModel {
	userId: string; // Bu arşivin sahibi olan kullanıcı
	typeId: string; // İçerik türü (film, dizi, vs.)
	title: string; // İçerik başlığı
	season?: number; // Sezon sayısı (dizi/anime için)
	completed: boolean; // Tamamlandı mı?
}
