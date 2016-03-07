sap.ui.jsview("smart_home.v1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smart_home.v1
	*/ 
	getControllerName : function() {
		return "smart_home.v1";
	},
	

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smart_home.v1
	*/ 
	createContent : function(oController) {
		
		

		 var tiles = new Array();   
//		 function handlePress1(oEvent) {
//			 //     alert("Going to reports");
//			   //   window.location="http://dewdftzld018u.pgdev.sap.corp:8000/_Ahana/trial/trial_ui5/WebContent/reports.html";
//			      app.to("idv2");
////			      setTimeout(function(){
////						 alert("abc");
////					 }, 9000);
//			     // setTimeout(alert("hello"), 3000);
////			      myVar =  setTimeout(alert("hello"), 3000);
////			      window.clearInterval(myVar);
//			      
//			      
//			}
			function handlePress2(oEvent) {

			//window.location="first.html";
			app.to("idv3");
			}
			function handlePress3(oEvent) {
				app.to("idv6");
			}
			function handlePress4(oEvent) {
				app.to("idv4");
			}
			function handlePress5(oEvent) {
		//	alert("press5");
			app.to("idv5");
			}

 
 var tile2 = new sap.m.StandardTile("tile2", {
        number : "Manage",
 
        title : "Manage/Monitor your appliances",
 
        infoState : "Success",
        width : "700 px",
      //  press : handlePress1,
        press:[oController.handlePress1,oController],
        });
 tiles.push(tile2);
 

 var tile3 = new sap.m.StandardTile("tile3", {
        number : "Observe",     
        title : "Power consumption",     
        infoState : "Success",
        width : "700 px",
        press : handlePress2
        });
 tiles.push(tile3);

 var tile4 = new sap.m.StandardTile("tile4", {
	 number : "Outline",
	 
     title : "Power Saver     Balanced         High Performance",

     infoState : "Success",
     width : "700 px",
     press : handlePress4
       
        });
 tiles.push(tile4);

 var tile5 = new sap.m.StandardTile("tile5", {
	 number : "Invoice",
	 
     title : "Bill details",

     infoState : "Success",
     width : "700 px",
     press : handlePress3
       
        });
 tiles.push(tile5);

 var tile6 = new sap.m.StandardTile("tile6", {
        number : "Outlook",
 
        title : "HANA Predictive Analysis",
 
        infoState : "Success",
        width : "700 px",
        press : handlePress5
        });
 tiles.push(tile6);
 
 var tc = new sap.m.TileContainer("tc",{
        tiles : tiles
 });
 
		
		
 		return new sap.m.Page({
			title: "Smart Home",
			content: [
			
			          tc
			          
			]
		});
	}

});