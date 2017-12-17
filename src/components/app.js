angular.module('video-player', [])

  .component('app', {

    controller: function($sce) {
      this.changevideo = (video) => {
        this.currentvideo = video;
        console.log('i clicked ', video);
        //this.currentvideo = this.data[video];
        //this.videourl = 'https://www.youtube.com/embed/' + this.data[video].id.videoId;
      };
      //this.index = this.index || 0;
      this.videourl = '';
      this.data = exampleVideoData;
      this.currentvideo = this.data[0];
    },
      
    templateUrl: 'src/templates/app.html'
    
  // TODO
  });