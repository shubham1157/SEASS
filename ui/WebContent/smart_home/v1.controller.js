sap.ui.controller("smart_home.v1", {

/**
* Changed Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smart_home.v1
*/
//	onInit: function() {
//
//		
//		//setInterval(alert("hello"), 2000);
//	},

	handlePress1:function(oControlEvent,oModel)
     {  
		 app.to("idv2");

		// myVar = setInterval(alert("hello"), 2000);
	    // clearTimeout(myVar);
	    
		
     },
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smart_home.v1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smart_home.v1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smart_home.v1
*/
//	onExit: function() {
//
//	}

});