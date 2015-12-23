var scrollManager = (function(){

	var internalSettings = {
		animationDuration: 750,
		numOfPixelsPerMovement: 1,
		minDelay: 10
	};
	
	return {

		scrollTo: function(spotToScrollTo){

			//get current vertically scrolled position.
			var currentPosition = window.scrollY;

			//determine the distance to scroll.
			var distanceToScroll = Math.abs(spotToScrollTo - currentPosition);

			//determine how frequently to fire off interval.
			var interval = internalSettings.animationDuration / distanceToScroll;
			/*window.alert("current position = " + currentPosition + "\n" 
				+ "distance = " + distanceToScroll + "\n"
				+ "interval = " + interval + " ms");*/

			if(interval < internalSettings.minDelay){
				interval = internalSettings.minDelay;
			}

			internalSettings.numOfPixelsPerMovement = distanceToScroll / (internalSettings.animationDuration / interval);

			var movingDown = true;

			if(currentPosition > spotToScrollTo){
				movingDown = false;
			}

			var timeout = window.setInterval(function(){

				if(movingDown && (currentPosition <= spotToScrollTo)){
					currentPosition += internalSettings.numOfPixelsPerMovement;
					distanceToScroll -= internalSettings.numOfPixelsPerMovement;


					window.scrollTo(0, currentPosition);

				}else if(!movingDown && (currentPosition >= spotToScrollTo)){
					currentPosition += (-1 * internalSettings.numOfPixelsPerMovement);
					distanceToScroll -= internalSettings.numOfPixelsPerMovement;


					window.scrollTo(0, currentPosition);

				}else{
					internalSettings.numOfPixelsPerMovement = 1;
					window.clearInterval(timeout);
				}

				//need to handle scenarios where the step amount oversteps the 
				//spot to scroll to.

			}, Math.floor(interval));

		},

		scrollToTop: function(){
			//this.scrollTo(<THE VALUE THAT INDICATES THE TOP OF THE PAGE>);
			this.scrollTo(0);	
		},

		scrollToBottom: function(){
			//this.scrollTo(<THE VALUE THAT INDICATES THE BOTTOM OF THE PAGE>);
			//this.scrollTo()
		}
	};
})();