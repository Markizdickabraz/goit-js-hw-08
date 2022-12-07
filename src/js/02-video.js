import Player from '../../node_modules/@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', function (e) {
        // console.log(e.seconds);
        localStorage.setItem("videoplayer-current-time", e.seconds);
    });
   
const localStorageItem = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(localStorageItem).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
    
        default:
            // some other error occurred
            break;
    }
    });

// console.dir(saveTimePlayedVideoInLocalStorage(EventTarget));

