angular.module('video-player')
.component('videoList', {
  bindings: {
    changevideo: '<',
    videos: '<'
  },
  // controller: function() {
  //   this.data = exampleVideoData;
  // },
  templateUrl: 'src/templates/videoList.html'
  // TODO
});
