/*
* Google Hangouts Utility
* Douglas J. Smith
* 05-05-2019
* Copyright (C) 2019 Douglas J. Smith
* Licensed under GNU GPL-3.0-or-later
*/
addModule(launchHangouts,
[
  "hang",
  "hangouts"
]);

// navigates to google calendar webapp
function launchHangouts(params){
  navigateGoogleWebapp("https://hangouts.google.com/webchat/u/",params)
}
