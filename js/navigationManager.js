var navigationManager = (function(utility){

	var internalSettings = {
		navigationElement: null,
		changedStateClass: "scrolled"
	};

	return {

		configure: function(settings){

			if(settings.navigationElement != null && settings.navigationElement != undefined){
				internalSettings.navigationElement = settings.navigationElement;
			}

			if(settings.changedStateClass != null && settings.changedStateClass != undefined){
				internalSettings.changedStateClass = settings.changedStateClass;
			}
		},

		changeState: function(){
			utility.addClass(internalSettings.changedStateClass, internalSettings.navigationElement);
		},

		changeBack: function(){
			utility.removeClass(internalSettings.changedStateClass, internalSettings.navigationElement);
		}

	};

})(globalUtility);