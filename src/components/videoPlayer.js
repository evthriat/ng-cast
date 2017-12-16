angular.module('video-player')

.component('videoPlayer', {
  // bindings: {
  //   videodata: '<'
  // },
  controller: function() {
    this.data = exampleVideoData;
    this.youtube = 'https://www.youtube.com/embed/' + this.data[0].id.videoId;
  },

  templateUrl: 'src/templates/videoPlayer.html'
  
  // TODO
});
