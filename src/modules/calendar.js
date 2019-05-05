/*
* Google Calendar Utility
* Douglas J. Smith
* 05-05-2019
* Copyright (C) 2019 Douglas J. Smith
* Licensed under GNU GPL-3.0-or-later
*/
addModule(launchCalendar,
[
  "cal",
  "calendar"
]);

// navigates to google calendar webapp
function launchCalendar(params){
  navigateGoogleWebapp("https:calendar.google.com/calendar/b/",params)
}
