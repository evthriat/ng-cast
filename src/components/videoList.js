angular.module('video-player')
.component('videoList', {
  bindings: {
    changevideo: '<'
  },
  controller: function() {
    this.data = exampleVideoData;
  },
  templateUrl: 'src/templates/videoList.html'
  // TODO
});
