import QuillSrc from "quill/core/quill";
import Quill from "quill/dist/quill";

import * as Emoji from "quill-emoji";
Quill.register("modules/emoji", Emoji);

	let container = document.getElementById('editor-comments');
	let toolbarContainer = [
	['bold', 'italic', 'underline', 'strike'],        // toggled buttons
	['blockquote', 'code-block'],

	[{ 'header': 1 }, { 'header': 2 }],               // custom button values
	[{ 'list': 'ordered'}, { 'list': 'bullet' }],
	[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
	[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
	[{ 'direction': 'rtl' }],                         // text direction

	[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
	[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

	[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
	[{ 'font': [] }],
	[{ 'align': [] }],

	['clean', 'undo', 'redo'],                               // remove formatting button
		[{"emoji-toolbar": true}, {"emoji-textarea": true}, {"emoji-shortname": true}],
];
	let options = {
		modules: {
			toolbar: {
				container: toolbarContainer,
				handlers: {
					undo: function() {
						this.quill.history.undo();
					},
					redo: function() {
						this.quill.history.redo();
					},

				},

			},

		},
		theme: 'snow',
	};
	let quill = new Quill(container, options);

