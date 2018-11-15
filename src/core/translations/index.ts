import * as i18n from 'i18n';

export class TranslationsService {
	public static getTranslationData(locale: string = 'ES', path: string): any {
		i18n.configure({
			locales: ['ES', 'EN'],
			defaultLocale: 'es',
			directory: `${path}/i18n`,
			objectNotation: true
		});
		i18n.setLocale(locale);
		return i18n.getCatalog();
	}
}
