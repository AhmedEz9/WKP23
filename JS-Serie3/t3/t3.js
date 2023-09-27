document.addEventListener("DOMContentLoaded", function() {
  var targetElement = document.getElementById('target');

  var browserInfo = getBrowserInfo();

  var osInfo = getOSInfo();

  var screenInfo = getScreenInfo();

  var dateTimeInfo = getFinnishDateTime();

  targetElement.innerHTML =
      '<p>Browser: ' + browserInfo.name + ' ' + browserInfo.version + '</p>' +
      '<p>Operating System: ' + osInfo + '</p>' +
      '<p>Screen Width: ' + screenInfo.width + 'px</p>' +
      '<p>Screen Height: ' + screenInfo.height + 'px</p>' +
      '<p>Available Screen Space: ' + screenInfo.availWidth + 'px x ' + screenInfo.availHeight + 'px</p>' +
      '<p>Date and Time: ' + dateTimeInfo + '</p>';
});

function getBrowserInfo() {
  var userAgent = navigator.userAgent;
  var name, version;

  if (userAgent.includes("Chrome")) {
      name = "Google Chrome";
      version = userAgent.split('Chrome/')[1].split(' ')[0];
  } else if (userAgent.includes("Firefox")) {
      name = "Mozilla Firefox";
      version = userAgent.split('Firefox/')[1];
  } else if (userAgent.includes("Edge")) {
      name = "Microsoft Edge";
      version = userAgent.split('Edge/')[1];
  } else {
      name = "Unknown Browser";
      version = "N/A";
  }

  return { name: name, version: version };
}

function getOSInfo() {
  var platform = navigator.platform;
  var os;

  if (platform.startsWith("Win")) {
      os = "Windows";
  } else if (platform.startsWith("Mac")) {
      os = "Mac OS";
  } else if (platform.startsWith("Linux")) {
      os = "Linux";
  } else {
      os = "Unknown OS";
  }

  return os;
}

function getScreenInfo() {
  return {
      width: screen.width,
      height: screen.height,
      availWidth: screen.availWidth,
      availHeight: screen.availHeight
  };
}

function getFinnishDateTime() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  var finnishDateTime = new Date().toLocaleDateString('fi-FI', options);
  return finnishDateTime;
}
