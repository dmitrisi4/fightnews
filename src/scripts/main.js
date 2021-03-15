import '@webcomponents/webcomponentsjs';
import 'bootstrap';

import Swiper from 'swiper/bundle';
import Sliders from './sliders';
import burgerMenu from "./burgerMenu";
import responsiveElementCarrier from "./responsiveElementCarrier";
import './overflowEllipsis';
import './submenu';
import './btn-checkbox';
import './input-search';
import './notificationBar';

import icons from '../../public/icons/icons.svg';

Sliders();
burgerMenu();
responsiveElementCarrier();

class SvgIcon extends HTMLElement {
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
					<use xlink:href="${icons}#icon-${this.type}"/>
				</svg>
			`;
		this._shadowRoot.appendChild(this._template.content.cloneNode(true));
	}
	//
	// attributeChangedCallback() {
	// 	this._updateView();
	// }
	//
	// connectedCallback() {
	// 	this._updateView();
	// }

	// _updateView() {
	// 	if (this.type) {
	// 		this._template.innerHTML = `
	// 		  <svg width="${this.width}" height="${this.height}" class="icon" viewBox="${this.viewBox}">
	// 				<use xlink:href="../../public/icons/icons.svg#icon-${this.type}"/>
	// 			</svg>
	// 		`;
	// 	} else {
	// 		this._template.innerHTML = '';
	// 	}
	//
	// 	this._shadowRoot.appendChild(this._template.content.cloneNode(true));
	// }
}

customElements.define('svg-icon', SvgIcon);




