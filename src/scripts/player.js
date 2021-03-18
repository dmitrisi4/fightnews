function loadPlayer() {
	if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		window.onYouTubePlayerAPIReady = function () {
			onYouTubePlayer();
		};
	}
}

var player;
function onYouTubePlayer() {
	// let playerContainer = document.querySelectorAll()
	player = new YT.Player('ytplayer', {
		// height: '360',
		// width: '640',
		videoId: '5qap5aO4i9A',
		playerVars: {
			'autoplay': 1,
			'controls': 0,
			'wmode': 'opaque',
			'origin': 'https://dmitrisi4.github.io/'
		},
		events: {
			'onReady': onPlayerReady,
		}
	});
}

function onPlayerReady(event) {
	console.log(event.target)
	event.target.h.setAttribute('srcdoc', `<style>*{padding:0;margin:0;overflow:hidden}
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    html,body{height:100%}
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    </style>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    <a href=https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    <img src='https://a.espncdn.com/photo/2020/1024/official_mma_power_rankings_v1_1296x729.jpg' alt='Demo video'>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    <span>▶</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    </a>`);
	event.target.playVideo();
}

	loadPlayer();
