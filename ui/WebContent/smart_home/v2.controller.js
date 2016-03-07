sap.ui.controller("smart_home.v2", {

/**
* Changed Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf smart_home.v2
*/
//	onInit: function() {
//		
//
//		
//	},
	
	
	
	   linkPressed2:function(oControlEvent,oModel)
       {  

       
         var path = oControlEvent.getSource().getParent().getBindingContextPath();
       	 var controller = this;
       	 var oTable = sap.ui.getCore().byId("list");
       	 var oModel = oTable.getModel();
         var data = oModel.getProperty(path);
       //  alert(data.status);
         
         if(data.status === "Switch Off")
        	 {
        	     sap.ui.commons.MessageBox.confirm("Do you want to switch it on", fnCallbackConfirm, "ALERT");
                 function fnCallbackConfirm(bResult)  
          	         {
                	// alert("switch off");
                	    if(bResult==true)
        	 		       { 
                	    	oModel.setProperty(path,"Switch_on",data.status,true);
                	    	
                	    	var tableList = sap.ui.getCore().byId('list');
        					var oTableBidingContext = tableList.getBindingContext();
        					var oModelData = oTableBidingContext.oModel.getObject(oTableBidingContext.sPath);
        					
        				//	alert(oModelData.items[0].status);
        				//	var oObj = oTable.getModel().getObject(sPath);
        				//	oModelData .remove();
        				//	tableList.removeItem(data);
        					
        					oModelData.count.Switch_on = parseInt(oModelData.count.Switch_on, 10) + 1;
        					oModelData.count.Switch_off = parseInt(oModelData.count.Switch_off, 10) - 1;
        					var oNewItemData = {
        							id: data.id,
        							Name: data.Name,
        							Location: data.Location,
        							Power: "30",
        							status: "Switch_on",
  
        						};
        					
        					oModelData.items.push(oNewItemData);
        					
//        					 var path = oControlEvent.getSource().getParent().getBindingContext().sPath;
//        			         var obj = tableList.getModel().getProperty(path);
//        			         console.log(obj); // here is the object ot be deleted
//        			         tableList.getModel().getData().splice(parseInt(path.substring(1)), 1);
//        			         tableList.removeItem(oControlEvent.getParameter('listItem'));
        				
        					oTableBidingContext.oModel.refresh(true);
        					
                	    	
        	 		       }
          	         }
        	 }
         
         
         
         
         else
    	 {
    	     sap.ui.commons.MessageBox.confirm("Do you want to switch it off", fnCallbackConfirm1, "ALERT");
             function fnCallbackConfirm1(bResult)  
      	         {
            	    if(bResult==true)
    	 		       { 
            	    	oModel.setProperty(path,"Switch Off",data.status);
            	    	
            	    	var tableList = sap.ui.getCore().byId('list');
    					var oTableBidingContext = tableList.getBindingContext();
    					var oModelData = oTableBidingContext.oModel.getObject(oTableBidingContext.sPath);
    					
    				//	alert(oModelData.items.);
    					
    					
    					oModelData.count.Switch_on = parseInt(oModelData.count.Switch_on, 10) - 1;
    					oModelData.count.Switch_off = parseInt(oModelData.count.Switch_off, 10) + 1;
    					var oNewItemData1 = {
    							id: data.id,
    							Name: data.Name,
    							Location: data.Location,
    							Power: "0",
    							status: "Switch Off",

    						};
    					
    					oModelData.items.push(oNewItemData1);
    					
    					oTableBidingContext.oModel.refresh(true);
    					//tableList.refresh(true);
    					
            	    	
    	 		       }
      	         }
    	 }         
         
       
       },
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf smart_home.v2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf smart_home.v2
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf smart_home.v2
*/
//	onExit: function() {
//
//	}

});