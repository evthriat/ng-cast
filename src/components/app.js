angular.module('video-player', [])

  .component('app', {

    controller: function($sce) {
      this.changevideo = function(index) {
        console.log('you click me ' + JSON.stringify(index));
        this.index = index;
        //console.log($sce)
        //this.videourl = () => $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + this.currentvideo.id.videoId);
        
      };
      this.index = this.index || 0;
      //this.videourl;
      this.data = exampleVideoData;
      //this.index !== undefined ? this.currentVideo = exampleVideoData[this.index] : this.currentVideo = exampleVideoData[0];
      this.currentvideo = exampleVideoData[this.index];
    },
      
    templateUrl: 'src/templates/app.html'
    
  // TODO
  });