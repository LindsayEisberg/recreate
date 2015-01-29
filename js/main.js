
var profilePage = {
  init: function (){
    profilePage.initStyling();
    profilePage.initEvents();
    profilePage.renderAllRepos(repoActivity);
    profilePage.renderEvent(events);

  },

  initStyling: function () {
    profilePage.renderSidebar(userInfo);
  },

  initEvents: function () {

  },

  renderSidebar: function() {

    var sidebar = _.template(templates.sidebar);
    $('aside').append(sidebar);

  },



  renderRepo: function (myRepo, index, array) {
    myRepo.idx = index;
    var repoContent = _.template(templates.repo);
    // console.log(arrayNameRepo);
    $('.repo').append(repoContent(myRepo));

  },

  renderAllRepos: function (repoInfo) {
    _.each(repoInfo, profilePage.renderRepo);
  },

  renderEvent: function (element, index, array) {
    element.idx = index;
    var eventContent = _.template(templates.activity);
    $('.activity').append(eventContent(element));

  },



};


$(document).ready(function(){

  profilePage.init();

  $('.activeClass a').click(function(event){
    event.preventDefault();

    var relatedClass = "." + $(this).attr('rel');
    $(this).closest("li").siblings().removeClass('activeNav');
    $(this).closest('li').addClass("activeNav");
    $(relatedClass).siblings().removeClass('active');
    $(relatedClass).addClass('active');
  });

});
