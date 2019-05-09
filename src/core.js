// Copyright (C) 2019 Douglas J. Smith
// Licensed under GNU GPL-3.0-or-later
/*
 * core utilities for DABS, the functions here
 * are not mission critical for a DABS build, but they are rather
 * useful for debuging/usability.
 */

addModule(modulesHelp, [
  "h",
  "help"
]);

function modulesHelp(params) {
  let keys = Object.keys(modules).sort()
  let numCommands = keys.length;
  let numColumns = 1;
  if (numCommands > 10) {
    numColumns = 2;
  }
  if (numCommands > 20) {
    numColumns = 3;
  }
  let outStr = "";
  for (let i = 0; i < numCommands; i += numColumns) {
    for (let j = 0; j < numColumns; j += 1) {
      if (keys[i+j] === undefined || keys[i+j].length < 1) continue;
      outStr += keys[i+j];
      for (let k=keys[i+j].length; k < 15; k += 1 ) {
        outStr += " ";
      }
    }
    outStr += "\n";
  }
  alert(outStr);
}
