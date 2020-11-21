<?php
/*
  Template Name: Temporary Page
*/

/*
?>
<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Untitled Document</title>
	<style>
		.overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 99999999;
		}
	</style>
</head>

<body style="margin: 0;">
<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
<div class="wrapper" style="pointer-events: none; position: relative; width:640px;height:360px;">
	<div class="overlay"></div>
	<div class="wistia_embed wistia_async_kfv7du9rp4" style="width:640px;height:360px; pointer-events: none; z-index: -1;"></div>
</div>

<script>
    window._wq = window._wq || [];
    _wq.push(
        {
	        id: 'kfv7du9rp4',
	        options: {
                controlsVisibleOnLoad: false,
                copyLinkAndThumbnailEnabled: false,
                fakeFullscreen: true,
                fullscreenOnRotateToLandscape: false,
                fullscreenButton: false,
                playbackRateControl: false,
                playbar: false,
                playButton: false,
                playsinline: true,
                settingsControl: false,
		        autoPlay: true
	        },
	        onReady: function(video) {
		        console.log("I got a handle to the video!", video);
		    }
        });
</script>
</body>
</html>
*/
?>

<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Untitled Document</title>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
</head>

<body style="margin: 0;">
<script charset="ISO-8859-1" src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
<div style="position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 1;"></div>
<div class="wistia_embed wistia_async_5bbw8l7kl5
videoFoam=true playerColor=ff0000 controlsVisibleOnLoad=false chromeless=true"
     style="width:640px;height:360px;">&nbsp;</div>
<button id="toggleSound" style="z-index: 9999; position: fixed; top: 10px; right: 10px;">Sound button</button>
<script>
    window._wq = window._wq || [];
    _wq.push(
        {
            id: '5bbw8l7kl5',
            options: {
                controlsVisibleOnLoad: false,
                copyLinkAndThumbnailEnabled: false,
                fakeFullscreen: true,
                fullscreenOnRotateToLandscape: false,
                fullscreenButton: false,
                playbackRateControl: false,
                playbar: false,
                playButton: false,
                playsinline: true,
                settingsControl: false,
                // autoPlay: true
            },
            onReady: function(video) {
                console.log("I got a handle to the video!", video);
                video.time(100);
                video.play();
	            console.log(video.duration());
                jQuery('#toggleSound').click(function (e) {
                    video.unmute();
                });
            }
        });

    // function toggleMute(video) {
    //     video.muted = !video.muted;
    // }
</script>
</body>
</html>
