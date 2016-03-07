sap.ui.jsview("smart_home.v4", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smart_home.v4
	*/ 
	getControllerName : function() {
		return "smart_home.v4";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smart_home.v4
	*/ 
	createContent : function(oController) {
		

		var form = new sap.ui.layout.form.SimpleForm(
				{ 
					minWidth: 1024,
					maxContainerCols:2,
					editable:true,
					layout:"ResponsiveGridLayout",
					labelSpanL:3,
					labelSpanM:3,
					emptySpanL:4,
					emptySpanM:4,
					columnsL:1,
					columnsM:1				
				});
	
		
			form.addContent(new sap.m.Label({text: "Select power mode"}));
			form.addContent(new sap.m.Select("select",{
                //path:"{/Names/mode}",
                items: [
                        new sap.ui.core.Item({
                        key:"1",
                        value:"1",
                        text : "Power Saver"	
                        }) 
                       ],
                       
                       change : function(oControlEvent)
						{
                    	  // alert(sap.ui.getCore().byId("select").getSelectedKey());
                    	   

                    	   if(sap.ui.getCore().byId("select").getSelectedKey() ===  "1")
                    		   { sap.ui.getCore().getControl("area").setValue("All connected devices are controlled automatically.");} 
                    	   
                    	   if(sap.ui.getCore().byId("select").getSelectedKey() ===  "2")
                    		   { sap.ui.getCore().getControl("area").setValue("Some devices are controlled automatically and some manually.");}
                    		   
                    	   if(sap.ui.getCore().byId("select").getSelectedKey() ===  "3")
                		   { sap.ui.getCore().getControl("area").setValue("There is no aoutomation involved. All the devices are controled manually from UI.");}
                    	  
						}
			
               }));
			//sap.ui.getCore().byId("select").setModel(oModel);
			sap.ui.getCore().byId("select").addItem( new sap.ui.core.Item({
                key:"2",
                value:"2",
                text: "Balanced High"	
                }) 
            );
			
			sap.ui.getCore().byId("select").addItem( new sap.ui.core.Item({
                key:"3",
                value:"3",
                text: "Performance"	
                }) 
             );
		//	sap.ui.getCore().byId("select").bindAggregation("items","/mode",oItemSelectTemplate); 
		
			form.addContent(new sap.m.Label({text: "Test"}));
			form.addContent(new sap.m.CheckBox());
			
			form.addContent(new sap.m.Label({text: "Comments"}));
			form.addContent(new sap.m.Input());
			
			form.addContent(new sap.m.Label({text: "Description"}));
			form.addContent(new sap.m.TextArea("area",{text: "All connected devices are controlled automatically."}));
			//form.addContent(new sap.m.Input());
			
			
		
		
		
		
		
		
		
 		return new sap.m.Page({
			title: "Outline",
			showNavButton: true,
			navButtonPress: function(){ 
					app.back();	
			         },
			content: [
                   form
			]
		});
	}

});