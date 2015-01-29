var templates= {};
var dateArray = userInfo.created_at.split('-');
var y = dateArray[0];
var m = dateArray[1];
var d = dateArray[2].split('').splice(0, 2).join('');
var createDate = m + '/' + d + '/' + y;

templates.sidebar = [

'<img src=<%= userInfo.avatar_url %> />',
'<h1><%= userInfo.name %></h1>',
'<h3><%= userInfo.login %></h3>',
'<ul>',
'<li><span class="octicon octicon-location"></span> <%= userInfo.location %></li>',
'<li><span class="octicon octicon-mail"></span> <%= userInfo.email %></li>',
'<li><span class="octicon octicon-clock"></span> Joined on <%= createDate %></li>',
'</ul>',
'<%= userInfo.followers %>',
'<%= userInfo.starred_url.length %>',
'<%= userInfo.following %></div>',
'<p><%= userInfo.organizations_url %></p>'


].join("");




templates.repo = [
'<div class=repoPost>',
'<ul>',
'<li><h2><%= name %></h2></li>',
'<li><%= language %></li>',
'<li><span class="octicon octicon-star"></span><%= stargazers_count %></li>',
'<li><span class="octicon octicon-git-branch"></span><%= forks %></li>',
'</ul>',
'<h4><%= updated_at %></h4>',
'</div>'
].join("");


templates.activity = [
'<div class=eventPost>',
'<h3><span class="octicon octicon-git-commit"></span><%= actor.login %> pushed to <%= payload.ref %> at <%= repo.name %></h3>',
'<div class=gravatar><img src=<%= actor.avatar_url %> /></div>',
'</div>'



].join("");
