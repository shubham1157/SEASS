sap.ui.controller("smart_home.v5", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smart_home.v5
*/
//	onInit: function() {
//	    
//	    
//		    setInterval(function(){addBizData(); }, 500);  
//		 //  setInterval(alert("hello"), 9000);
//		 
//		    
//	          function addBizData(){  
//	        alert("hi");
//	             var oModel =  sap.ui.getCore().getModel("oModel_liveData");
//	             var i = 0; var pow; var bill;
////	             oModel.setProperty("/Names/0/Power","120");  
////	             oModel.refresh(true);  
//	             
//	             for(i=0;i<=3;i++)
//	             {
//	            	 
//	        							pow= parseInt(oModel.getData().Names[i].Power, 10) + 1;
//	        							bill=  parseInt(oModel.getData().Names[i].Bill, 10) + 2;
//	        							
//	        							oModel.setProperty("/Names/"+i+"/Power",pow); 
//	        							oModel.setProperty("/Names/"+i+"/Bill",bill); 
//	        						
//	             }
//	             oModel.refresh(true); 
//	             
//	            
//	             
//	             
//	          
//	            oModel.refresh();  
//	            
//	                 }  
//		    
//
//		},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smart_home.v5
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smart_home.v5
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smart_home.v5
*/
//	onExit: function() {
//
//	}

});