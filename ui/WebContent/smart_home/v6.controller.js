sap.ui.controller("smart_home.v6", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smart_home.v6
*/
//	onInit: function() {
//
//	},

	
	 linkPressed2:function(oControlEvent)
     {  
    // alert("hello");
		 var text = oControlEvent.getSource().getText();
		  // alert(text);
		   
     if(text === "7265")
    	 {
     var url = "http://veui5infra.dhcp.wdf.sap.corp:8080/sapui5-sdk-dist/#test-resources/sap/viz/demokit/VIZCharts.html#__2";
	   sap.ui.getCore().byId("screen").addContent(new sap.ui.core.HTML({content: "<iframe name='myFrame' width='100%' height='100%' src='bill1.jpg'  >" }));
            if(!sap.ui.getCore().byId("screen").isOpen()){
          	sap.ui.getCore().byId("screen").open();
		                        		}    
    	 }
     
     if(text === "7410")
	 {
 var url = "http://veui5infra.dhcp.wdf.sap.corp:8080/sapui5-sdk-dist/#test-resources/sap/viz/demokit/VIZCharts.html#__2";
   sap.ui.getCore().byId("screen").addContent(new sap.ui.core.HTML({content: "<iframe name='myFrame' width='100%' height='100%' src='bill2.jpg'  >" }));
        if(!sap.ui.getCore().byId("screen").isOpen()){
      	sap.ui.getCore().byId("screen").open();
	                        		}    
	 }
     
     if(text === "6310")
	 {
 var url = "http://veui5infra.dhcp.wdf.sap.corp:8080/sapui5-sdk-dist/#test-resources/sap/viz/demokit/VIZCharts.html#__2";
   sap.ui.getCore().byId("screen").addContent(new sap.ui.core.HTML({content: "<iframe name='myFrame' width='100%' height='100%' src='bill3.JPG'  >" }));
        if(!sap.ui.getCore().byId("screen").isOpen()){
      	sap.ui.getCore().byId("screen").open();
	                        		}    
	 }
     
     if(text === "5510")
	 {
 var url = "http://veui5infra.dhcp.wdf.sap.corp:8080/sapui5-sdk-dist/#test-resources/sap/viz/demokit/VIZCharts.html#__2";
   sap.ui.getCore().byId("screen").addContent(new sap.ui.core.HTML({content: "<iframe name='myFrame' width='100%' height='100%' src='bill4.jpg'  >" }));
        if(!sap.ui.getCore().byId("screen").isOpen()){
      	sap.ui.getCore().byId("screen").open();
	                        		}    
	 }
     
     
     
     },

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smart_home.v6
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smart_home.v6
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smart_home.v6
*/
//	onExit: function() {
//
//	}

});