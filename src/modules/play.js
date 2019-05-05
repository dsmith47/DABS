/*
* Google ____ Utility
* Douglas J. Smith
* 05-05-2019
* Copyright (C) 2019 Douglas J. Smith
* Licensed under GNU GPL-3.0-or-later
*/

// Google Play music submod.
addModule(launchPlayMusic,
[
  "music",
  "play-music"
]);

function launchPlayMusic(params){
  if (params[0] == "store") {
    navigate("https://play.google.com/store/music");
  } else {
    navigateGoogleWebapp("https://play.google.com/music/listen?u=",params)
  }
}


// Manages access to google play
addModule(launchPlay,
[
  "play"
]);

function launchPlay(params){
  if (params[0] == "music") {
    launchPlayMusic(params.slice(1));
  } else if (params[0] == "store" ) {
    navigate("https://play.google.com/store/");
  } else {
    navigate("https://play.google.com/");
  }
}
