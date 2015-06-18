
var templates = {};

templates.placeMeResult = [
"<div class='resultHeader col-md-12'>",
"<h2><%= name %></h2>",
"<h2>  score: <%= score %></h2>",
"</div>",
"<div class='resultsContent col-md-12'>",
"<div id='resultsImage'class='col-md-7'>",
"<img src=<%= image %> alt='' />",
"</div>",
"<div id='resultsText'class='col-md-5'>",
"<p><%= size %></p>",
"<p><%= activities %></p>",
"<p><%= food %></p>",
"<p><%= climate %></p>",
"<p><%= geography %></p>",
"<p><%= sports %></p>",
"<p><%= shopping %></p>",
"</div>"
].join("");

templates.radioQuestion= [
  "<div class='Option'><input type='radio' class='answerChoice' name = 'myChoice' value='<%= value %>'>&nbsp;&nbsp;&nbsp;<%= choice %></div>",
].join();

templates.checkQuestion= [
  "<div class='Option'><input type='checkbox' class='answerChoice' name='myChecks' value='<%= value %>'>&nbsp;&nbsp;&nbsp;<%= choice %></div>",
].join();
