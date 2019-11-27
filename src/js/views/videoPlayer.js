// videojs('ipfs-streaming-video', {}, function() {
//   var player = this;
//   player.controlBar.addChild('QualitySelector');
// });

var options, player;

options = {
  controlBar: {
    children: [
      'playToggle',
      'progressControl',
      'volumePanel',
      'qualitySelector',
      'fullscreenToggle'
    ]
  }
};

player = videojs('ipfs-streaming-video', options);
