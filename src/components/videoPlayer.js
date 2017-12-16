angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentvideo: '<',
    videourl: '<'
  },
  controller: function($sce) {
    this.youtube = () => $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + this.currentvideo.id.videoId);
  },

  templateUrl: 'src/templates/videoPlayer.html'
  
  // TODO
});
