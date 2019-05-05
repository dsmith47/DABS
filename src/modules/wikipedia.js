/*
* Wikipedia Utility
* Douglas J. Smith
* 06- 05 - 2017
*/

addModule(wikipedia_search,
[
  "wiki"
]);

// runs wikipedia search through navigation
function wikipedia_search( params ){
  url="https://en.wikipedia.org/wiki/Special:Search?search=";
  for (i in params){
    url += params[i]+"+";
  }
  url += '\b';
  navigate(url);
}

