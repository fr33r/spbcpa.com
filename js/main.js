window.onload = function(){
	initializeMap();

	var aboutUs = window.document.getElementById("aboutUs");
	var services = window.document.getElementById("services");
	var contactUs = window.document.getElementById("contactUs");

	var scrollNavButtons = window.document.getElementsByClassName("scroll-nav-button");

	var whoWeAre = window.document.getElementById("who-we-are-section");
	var servicesSection = window.document.getElementById("services-section");
	var contactUsSection = window.document.getElementById("contact-info-section");

	scrollNavButtons[0].addEventListener("click", function(){
		scrollManager.scrollToTop();
	});

	aboutUs.addEventListener("click", function(){
		scrollManager.scrollTo(whoWeAre.offsetTop);
	});

	scrollNavButtons[1].addEventListener("click", function(){
		scrollManager.scrollTo(whoWeAre.offsetTop);
	});

	services.addEventListener("click", function(){
		scrollManager.scrollTo(servicesSection.offsetTop);
	});

	scrollNavButtons[2].addEventListener("click", function(){
		scrollManager.scrollTo(servicesSection.offsetTop);
	});

	contactUs.addEventListener("click", function(){
		scrollManager.scrollTo(contactUsSection.offsetTop);
	});

	scrollNavButtons[3].addEventListener("click", function(){
		scrollManager.scrollTo(contactUsSection.offsetTop);
	});

	var topNav = window.document.getElementById("top-nav-bar");

	navigationManager.configure({ navigationElement: topNav, changedStateClass: "scrolled"});

	window.onscroll = function(){
		if(window.scrollY != 0){
			navigationManager.changeState();
		}else{
			navigationManager.changeBack();
		}
	}

};

