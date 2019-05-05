/*
* Google Drive utility
* Douglas J. Smith
* 05-05-2019
* Copyright (C) 2019 Douglas J. Smith
* Licensed under GNU GPL-3.0-or-later
*/

// Module declaration.
addModule(launchDrive,
[
  "drive"
]);


// launches drive application
function launchDrive(params){
  navigateGoogleWebapp("https://drive.google.com/u/",params);
}
