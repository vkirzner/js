<script>
var theWindow = $(window);
var winHeight = theWindow.height();
var scrollS = theWindow.scrollTop;
var animDuration = winHeight * 1.5;
var animData0 = {
	container: document.getElementById('lottie-1'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://gist.githubusercontent.com/vkirzner/d22cac15a02be6478a4b4557f6d1fff7/raw/7f529e1a31c146aeb6304755a669ed1e4b467b5b/4k.bearing.json'
};
var animData1 = {
	container: document.getElementById('lottie-axle-module'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://gist.githubusercontent.com/vkirzner/0ab0f8451c6319c0ede1e8b964e980c5/raw/23b14ed8aa62458cbf56e058b655e33e0ff4535c/lottie-axle-module.json'
};
var animData2 = {
	container: document.getElementById('lottie-hub-unite'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://gist.githubusercontent.com/vkirzner/b9582b3d41b2f627d2af826e5267e97f/raw/96b9bc562fbc9f6c7f36b675c48c7a1d075e30f0/lottie-hub-unite.json'
};
var animData3 = {
	container: document.getElementById('lottie-trb'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://gist.githubusercontent.com/vkirzner/79c99e2427f26ee2eed8e0951f3b608a/raw/1889e646a245f0c403947f8b0a9dd2ce024d5539/lottie-trb.json'
};
var animData4 = {
	container: document.getElementById('lottie-ball'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://gist.githubusercontent.com/vkirzner/6861f892638bfe3a1729aed41e40d38e/raw/b7d6fa71328c48f8fdc5b29dd5c90c99f4ff2a09/lottie-ball.json'
};
var anim0 = bodymovin.loadAnimation(animData0);
var anim1 = bodymovin.loadAnimation(animData1);
var anim2 = bodymovin.loadAnimation(animData2);
var anim3 = bodymovin.loadAnimation(animData3);
var anim4 = bodymovin.loadAnimation(animData4);
var block0 = document.getElementById('lottie-1');
var block1 = document.getElementById('rec733395988');
var block2 = document.getElementById('rec733423280');
var block3 = document.getElementById('rec733424705');
var block4 = document.getElementById('rec733428485');
$( window ).scroll(function() {
 	animatebodymovin(0, animDuration, anim0);
	animatebodymovin2(300, 2000, anim1, block1, 1.2);
	animatebodymovin2(300, 2000, anim2, block2, 1.2);
	animatebodymovin2(300, 2000, anim3, block3, 1.2);
	animatebodymovin2(300, 1800, anim4, block4, 1.0);
});
function animatebodymovin(delay, duration, animObject) {
   	var scrollPosition = theWindow.scrollTop() - delay;
	var maxFrames = animObject.totalFrames;
	var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
	if (frame >= maxFrames) {
	    frame = maxFrames - 1
	    return frame
	} else if (frame <=0) {
	    frame = 1
	    return frame
	}
	animObject.goToAndStop(frame, true);
}
function animatebodymovin2(delay, duration, animObject, animBlock, speed) {
    	var topPosition = animBlock.getBoundingClientRect().top;
    	var scroll = winHeight - topPosition;
 	var maxFrames = animObject.totalFrames;
    	var frame = maxFrames * (((scroll - delay)) / (duration - delay)) * speed;
	if (frame >= maxFrames) {
	    frame = maxFrames - 1
	    return frame
	} else if (frame <=0) {
	    frame = 1
	    return frame
	}
	animObject.goToAndStop(frame, true);
}
</script>
