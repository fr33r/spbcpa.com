var navigationManager = (function(utility){

	var navItemElements = [];

	var internalSettings = {
		navigationElement: null,
		changedStateClass: "scrolled",
		navigationItemElementClass: "nav-item",
		activeNavItemClass: "active"
	};

	return {

		configure: function(settings){

			if(settings.navigationElement != null && settings.navigationElement != undefined){
				internalSettings.navigationElement = settings.navigationElement;
				navItemElements = internalSettings.navigationElement.getElementsByClassName(internalSettings.navigationItemElementClass);
			}

			if(settings.changedStateClass != null && settings.changedStateClass != undefined){
				internalSettings.changedStateClass = settings.changedStateClass;
			}
		},

		changeState: function(){
			if(!utility.hasClass(internalSettings.changedStateClass, internalSettings.navigationElement)){
				utility.addClass(internalSettings.changedStateClass, internalSettings.navigationElement);
			}	
		},

		changeBack: function(){
			if(utility.hasClass(internalSettings.changedStateClass, internalSettings.navigationElement)){
				utility.removeClass(internalSettings.changedStateClass, internalSettings.navigationElement);
			}
		},

		activateNavItem: function(navItemIndex){
			if(!utility.hasClass(internalSettings.activeNavItemClass, navItemElements[navItemIndex])){
				utility.addClass(internalSettings.activeNavItemClass, navItemElements[navItemIndex]);
			}
		},

		deactivateNavItem: function(navItemIndex){
			if(utility.hasClass(internalSettings.activeNavItemClass, navItemElements[navItemIndex])){
				utility.removeClass(internalSettings.activeNavItemClass, navItemElements[navItemIndex]);
			}
		}

	};

})(globalUtility);