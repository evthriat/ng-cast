angular.module('video-player')
.component('videoList', {
  bindings: {
    exampleVideoData: '<'
  },
  controller: function() {
    this.data = exampleVideoData;
  },
  templateUrl: 'src/templates/videoList.html'
  // TODO
});
