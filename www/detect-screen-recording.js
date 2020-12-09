var detector = {
  onCaptureStatusChanged: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'DetectScreenRecording', 'onCaptureStatusChanged', []);
  },
  isCaptured: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'DetectScreenRecording', 'isCaptured', []);
  }
}


cordova.addConstructor(function () {
  if (!window.plugins) {window.plugins = {};}

  window.plugins.DetectScreenRecording = detector;
  return window.plugins.DetectScreenRecording;
});
