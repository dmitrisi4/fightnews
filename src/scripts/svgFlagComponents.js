import flagIcons from '../../public/icons/flag.svg';
class SvgFlag extends HTMLElement {
	_defaultHeight = 20;
	_defaultWidth = 20;
	_defaultViewBox = '0 0 20 20';

	get type() {
		return this.getAttribute('type');
	}

	get height() {
		return this.getAttribute('height') ?? this._defaultHeight;
	}

	get width() {
		return this.getAttribute('width') ?? this._defaultWidth;
	}

	get viewBox() {
		return this.getAttribute('viewBox') ?? this._defaultViewBox;
	}

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._template = document.createElement('template');
		this._template.innerHTML = `
			  <svg width="${this.width}" height="${this.height}" class="icon" viewBox="${this.viewBox}">
					<use xlink:href="${flagIcons}#flag-${this.type}"/>
				</svg>
			`;
		this._shadowRoot.appendChild(this._template.content.cloneNode(true));
	}

}
customElements.define('svg-flag', SvgFlag);