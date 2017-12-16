angular.module('video-player')
.component('videoList', {
  bindings: {
    examplevideodata: '<'
  },
  controller: function() {
    this.data = exampleVideoData;
  },
  templateUrl: 'src/templates/videoList.html'
  // TODO
});
