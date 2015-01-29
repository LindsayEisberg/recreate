
var profilePage = {
  init: function (){
    profilePage.initStyling();
    profilePage.initEvents();
    profilePage.renderAllRepos(repoActivity);

  },

  initStyling: function () {
    profilePage.renderSidebar(userInfo);
  },

  initEvents: function () {},

  renderSidebar: function() {
    var sidebar = _.template(templates.sidebar);
    $('aside').append(sidebar);

  },




  renderRepo: function (myRepo, index, array) {
    myRepo.idx = index;
    var repoContent = _.template(templates.repo);
    // console.log(arrayNameRepo);


    $('section').append(repoContent(myRepo));

  },

  renderAllRepos: function (repoInfo) {
    _.each(repoInfo, profilePage.renderRepo);
  }


};


$(document).ready(function(){

  profilePage.init();

});
