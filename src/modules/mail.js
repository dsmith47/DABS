/*
* Google Mail Utility
* Douglas J. Smith
* 05-05-2019
* Copyright (C) 2019 Douglas J. Smith
* Licensed under GNU GPL-3.0-or-later
*/
addModule(launchMail,
[
  "mail"
]);

// navigates to google calendar webapp
function launchMail(params){
  navigateGoogleWebapp("https:mail.google.com/mail/u/",params)
}
