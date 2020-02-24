'use strict';

const videoId = 't-wFKNy0MZQ';

const fetchVideoInfo = require('youtube-info');
fetchVideoInfo(`${videoId}`).then(function (videoInfo) {
  console.log(
    videoInfo.title,
    videoInfo.owner,
    videoInfo.duration,
    videoInfo.thumbnailUrl);
});