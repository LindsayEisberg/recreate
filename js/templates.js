var templates= {};

templates.sidebar = [

'<img src=<%= userInfo.avatar_url %> />',
'<h1><%= userInfo.name %></h1>',
'<h3><%= userInfo.login %></h3>',
'<ul>',
'<li><span class="octicon octicon-location"></span> <%= userInfo.location %></li>',
'<li><span class="octicon octicon-mail"></span> <%= userInfo.email %></li>',
'<li><span class="octicon octicon-clock"></span> <%= userInfo.created_at %></li>',
'</ul>',
'<%= userInfo.followers %>',
'<%= userInfo.starred_url %>',
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
'</div>'
].join("");
