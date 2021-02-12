import Quill from "quill/dist/quill";
import * as Emoji from "quill-emoji";
import {iconsList} from "./icons";

Quill.register("modules/emoji", Emoji);
let icons = Quill.import('ui/icons');

const replacementIcons = () => {
	let arrayIcons = ['redo', 'undo', 'link', 'image', 'bold', 'italic', 'blockquote', 'list', 'indent'];
	arrayIcons.forEach(element => {
		switch (true) {
			case element === 'undo': {
				icons[element] = iconsList.redo;
				break;
			}
			case element === 'bold': {
				icons[element] = 'B';
				break;
			}
			case element === 'list': {
				icons.ordered = iconsList.ordered;
				icons.bullet = iconsList.bullet;
				break;
			}
			case element === 'indent': {
				icons['-1'] = iconsList.indentMinus;
				icons['+1'] = iconsList.indentPlus;
				break;
			}
			default: {
				icons[element] = iconsList[element];
				break;
			}
		}
	})
};
replacementIcons();

let emojiIcon = iconsList.emojis;

let quill;
let container = document.getElementById('editor-comments');
let viewPort = window.matchMedia("(max-width: 700px)");

function toolbarGrid(viewPort) {
	if (viewPort.matches) { // If media query matches
		return [
			['undo', 'redo'],
			['emoji', 'link', 'image'],
		];
	}
	return [
		['undo', 'redo'],
		['emoji', 'link', 'image'],
		['bold', 'italic'],      // toggled buttons
		[{'align': []}, 'blockquote'],
		[{'list': 'bullet'}, {'list': 'ordered'}, {'indent': '-1'}, {'indent': '+1'}],
	];
}

const createEditor = () => {
	let options = {
		modules: {
			toolbar: {
				container: toolbarGrid(viewPort),
				handlers: {
					undo: function () {
						this.quill.history.undo();
					},
					redo: function () {
						this.quill.history.redo();
					},
					emoji: function () {
					}
				},
			},
			"emoji-toolbar": {
				buttonIcon: emojiIcon
			},
		},
		theme: 'snow',
	};
	return new Quill(container, options);
}

const removePrevEditorElements = () => {
	let toolbar = container.previousSibling;

	if(toolbar?.classList.contains('ql-toolbar')) {
		toolbar.remove();
	}
}

quill = createEditor();

viewPort.addEventListener('change', (e) => {
	removePrevEditorElements();
	quill = createEditor();
});
