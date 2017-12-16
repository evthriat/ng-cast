angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    // video: '<',
    index: '<'
  },
  controller: function() {
    this.data = exampleVideoData;

   },
  templateUrl: 'src/templates/videoListEntry.html'
  // TODO
});
