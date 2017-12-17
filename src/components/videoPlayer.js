angular.module('video-player')


.controller('videoController', function($sce) {
  this.youtube = () => {
    return this.currentvideo ? $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + this.currentvideo.id.videoId) : '';
  };

})
.component('videoPlayer', {
  bindings: {
    currentvideo: '<',
  },
  controller: 'videoController',
  templateUrl: 'src/templates/videoPlayer.html'

  
  // TODO
});
