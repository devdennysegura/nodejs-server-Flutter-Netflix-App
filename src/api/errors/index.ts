import { TranslationsService } from '../../core/translations';

export class ErrorService {
	private isTrustedError: boolean;
	private status: number;
	private code: string;
	private language: string;
	private message: string;
	private node_stack: any;

	constructor(value: any) {
		this.message = value.message;
		this.isTrustedError = value.isTrustedError || true;
		this.status = value.status || 500;
		this.code = value.code || '0';
		this.language = value.language || 'ES';
		this.node_stack = value.node_stack;
	}
	get Item() {
		const localesError = TranslationsService.getTranslationData(this.language, __dirname);
		return {
			response: localesError.errors[this.code],
			status: this.status,
			isTrustedError: this.isTrustedError,
			node_stack: {
				name: (this.node_stack || {}).name,
				message: (this.node_stack || {}).message,
				stack: (this.node_stack || {}).stack
			},
			message: this.message
		};
	}
}
