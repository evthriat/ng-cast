angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    videodata: '<'
  },
  controller: function() {
    this.data = exampleVideoData;
  },

  templateUrl: 'src/templates/videoPlayer.html'
  
  // TODO
});
