sap.ui.jsview("smart_home.v2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smart_home.v2
	*/ 
	getControllerName : function() {
		return "smart_home.v2";
	},
	

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smart_home.v2
	*/ 
	createContent : function(oController) {
		jQuery.sap.require("sap.ui.core.format.NumberFormat");
		var oFloat = sap.ui.core.format.NumberFormat.getFloatInstance({minFractionDigits: 2, maxFractionDigits: 2});
		
		var model = new sap.ui.model.json.JSONModel({
            warehouses: [
                  {
                        name: "Living Room",
                        count: {
                              all: 8,
                              Disabled: 1,
                              Switch_off: 3,
                              Switch_on: 3,
                              Notifications :1,
                        },
                        items: [
                                    {id: 123, Name:"Led 01", Location:"Ground Floor", Power:"0", status: "Switch Off"},
                                    {id: 130, Name:"Led 02", Location:"Ground Floor", Power:"0", status: "Switch Off"},
                                    {id: 134, Name:"Fan 01", Location:"Ground Floor", Power:"10", status: "Switch_on"},
                                    {id: 145, Name:"TV", Location:"Ground Floor", Power:"55", status: "Switch_on"},
                                    {id: 142, Name:"Tubelight", Location:"Ground Floor", Power:"0", status: "Disabled"},
                                    {id: 162, Name:"Lamp", Location:"Ground Floor", Power:"0", status: "Switch Off"},
                                    {id: 182, Name:"AC", Location:"Ground Floor", Power:"229", status: "Switch_on"},
                                    {id: 182, Name:"AC", Location:"Ground Floor", Power:"218", status: "Notifications"}
                              ]
                  },
                  {
                        name: "Bed Room",
                        count: {
                              all: 6,
                              Disabled: 1,
                              Switch_off: 3,
                              Switch_on: 2,
                              Notifications :0
                        },
                        items: [
                                    {id: 1163, Name:"Led 03", Location:"Ground Floor", Power:"0", status: "Switch Off"},
                                    {id: 1342, Name:"Led 04", Location:"Ground Floor", Power:"0", status: "Switch Off"},
                                    {id: 1634, Name:"Fan 02", Location:"Ground Floor", Power:"10", status: "Switch_on"},                                          
                                    {id: 1245, Name:"Music Player", Location:"Ground Floor", Power:"110", status: "Switch_on"},
                                    {id: 1342, Name:"Hair Dryer", Location:"Ground Floor", Power:"0", status: "Disabled"},
                                    {id: 1462, Name:"Lamp", Location:"Ground Floor", Power:"0", status: "Switch Off"}
                  ]
                              
                  },
                  {
                        name: "Garage",
                        count: {
                              all: 6,
                              Disabled: 1,
                              Switch_off: 1,
                              Switch_on: 4,
                              Notifications :0,
                        },
                        items: [
                              
                                  {id: 0163, Name:"Drill Machine", Location:"Backyard", Power:"203", status: "Switch_on"},
                                    {id: 0342, Name:"Lathe Machine", Location:"Backyard", Power:"0", status: "Switch Off"},
                                    {id: 0634, Name:"Induction Motor", Location:"Backyard", Power:"169", status: "Switch_on"},
                                    {id: 0856, Name:"Fan 03", Location:"Backyard", Power:"10", status: "Switch_on"},
                                    {id: 0245, Name:"Exhaust Fan", Location:"Backyard", Power:"12", status: "Switch_on"},
                                    {id: 0342, Name:"CFL", Location:"Backyard", Power:"0", status: "Disabled"}
                  ]

                  },
                  {
                        name: "Kitchen",
                        count: {
                              all: 7,
                              Disabled: 2,
                              Switch_off: 1,
                              Switch_on: 4,
                              Notifications :0,
                        },
                        items: [
                                {id: 0875, Name:"Led 05", Location:"Ground Floor", Power:"8", status: "Switch_on"},                                          
                                    {id: 0458, Name:"Exhaust Fan", Location:"Ground Floor", Power:"12", status: "Switch_on"},                                          
                                    {id: 0447, Name:"Microwave", Location:"Ground Floor", Power:"190", status: "Switch_on"},
                                    {id: 0258, Name:"Chimney", Location:"Ground Floor", Power:"129", status: "Switch_on"}, 
                                    {id: 0249, Name:"CFL", Location:"Ground Floor", Power:"0", status: "Disabled"},
                                    {id: 0397, Name:"Dish Washer", Location:"Ground Floor", Power:"0", status: "Switch Off"},
                                    {id: 0547, Name:"Refrigrator", Location:"Ground Floor", Power:"130", status: "Disabled"}
                                    ]
                  },
                  {
                        name: "Miscellaneous",
                        count: {
                              all: 6,
                              Disabled: 2,
                              Switch_off: 1,
                              Switch_on: 3,
                              Notifications :0,
                        },
                        items: [
                                {id: 0163, Name:"Laptop", Location:"Bed Room", Power:"0", status: "Disabled"},
                                    {id: 0342, Name:"Shaver", Location:"Bed Room", Power:"0", status: "Switch Off"},
                                    {id: 0634, Name:"Aquarium", Location:"Living Room", Power:"26", status: "Switch_on"},
                                    {id: 0856, Name:"Floor Heating", Location:"Living Room", Power:"89", status: "Switch_on"},
                                    {id: 0245, Name:"chandelier", Location:"Living Room", Power:"17", status: "Switch_on"},
                                    {id: 0392, Name:"Vaccum Cleaner", Location:"Living Room", Power:"0", status: "Disabled"},
                                    ]
                  }
            ]
      });

		sap.ui.getCore().setModel(model);
		
		var splitApp = new sap.m.SplitApp();
		
		
		// create and add a pages
			
		
		
		var home = new sap.m.Page("home", {
			title : "Welcome to Smart Home",
			showHeader : false,
			content: new sap.m.Image({
				src: "poster.jpg",
				alt: "test image",
				width: "100%",
				height: "100%",
				decorative: false
			})
		});
		
		var oTableDetails = new sap.m.Table("list", {
			growing: true,
			  selectionMode : sap.ui.table.SelectionMode.Single,
			growingThreshold: 200,
			columns: [
				new sap.m.Column({
					width: "3em",
					hAlign: "Center",
					header: new sap.m.Label({text: "ID"})
				}),
				new sap.m.Column({
					width: "6em",
					hAlign: "Center",
					header: new sap.m.Label({text: "Name"})
				}),
				new sap.m.Column({
					width: "6em",
					hAlign: "Center",
					minScreenWidth: "Desktop",
					header: new sap.m.Label({text: "Location"})
				}),
				new sap.m.Column({
					width: "7em",
					hAlign: "Center",
					minScreenWidth: "Desktop",
					header: new sap.m.Label({text: "Power"})
				}),
				new sap.m.Column({
					width: "6em",
					hAlign: "Center",
					header: new sap.m.Label({text: "Status"})
				}),
				
			],
			items: {
				path: "items",
				template: new sap.m.ColumnListItem({
					type: sap.m.ListType.Active,
					cells: [
						new sap.m.Text({text: "{id}"}),
						new sap.m.Text({text: "{Name}"}),
						new sap.m.Text({text: "{Location}"}),
						new sap.m.Text({text: "{Power}"}),
						//new sap.m.Link({text: "{Power}", press:[oController.linkPressed2,oController]}),
						
						new sap.m.Link({
							text: "{status}",
							press:[model,oController.linkPressed2,oController],
							state: {
								path: "status",
								formatter: function(value) {
									switch(value) {
										case "Disabled": return "Warning";
										case "Switch Off": return "Error";
										case "Switch_on": return "Success";
									}
								}
							}
						}),
					]
				})
			}
		});
		
		var oIconTabBar = new sap.m.IconTabBar("IconTabBarTable", {
			expandable: true,
			items: [
				new sap.m.IconTabFilter('allFilter', {
					showAll: true,
					count: "{count/all}",
					text: "Appliances",
					key: "All",
					iconColor: sap.ui.core.IconColor.Neutral
				}),
				new sap.m.IconTabSeparator(),
				new sap.m.IconTabFilter('DisabledFilter', {
					icon: "sap-icon://task",
					iconColor: sap.ui.core.IconColor.Critical,
					count: "{count/Disabled}",
					text: "Disabled",
					key: "Disabled"
				}),
				new sap.m.IconTabFilter('Switch_offFilter', {
					icon: "sap-icon://instance",
					iconColor: sap.ui.core.IconColor.Negative,
					count: "{count/Switch_off}",
					text: "Switch Off",
					key: "Switch Off"
				}),
				new sap.m.IconTabFilter('Switch_onFilter', {
					icon: "sap-icon://shipping-status",
					iconColor: sap.ui.core.IconColor.Positive,
					count: "{count/Switch_on}",
					text: "Switch_on",
					key: "Switch_on",
					
				}),
				new sap.m.IconTabFilter('NotificationsFilter', {
					icon: "sap-icon://alert",
					iconColor: sap.ui.core.IconColor.Negative,
					count: "{count/Notifications}",
					text: "Notifications",
					key: "Notifications",
					
				}),
				new sap.m.IconTabSeparator(),
				
			],
			select: function(oEvent) {
				var oBinding = this.getContent()[0].getBinding("items"),
					sKey = oEvent.getParameter("key"),
					oFilter;
				
				if (sKey == "All") {
					oBinding.filter([]);
				} 
				
				else {
					oFilter = new sap.ui.model.Filter("status", "EQ", sKey);
					oBinding.filter([oFilter]);
				}
			},
			content: oTableDetails
		});
		
		var detailPage = new sap.m.Page("detailPage", {
			showHeader : false,
			content : [
				oIconTabBar,
			]
		});
		
		var masterPage = new sap.m.Page("masterPage",{
			title:"Division",
			content : [
				new sap.m.List({
					id: "masterList",
					mode: "SingleSelectMaster",
					items: {
						path: "/warehouses",
						template: new sap.m.StandardListItem({
							title: "{name}",
							
						}),
					},
					
					select: function(event) {
							splitApp.toDetail("detailPage");
						
						var context = event.getParameter("listItem").getBindingContext();
						sap.ui.getCore().byId("list").setBindingContext(context);
						
						//set count
						sap.ui.getCore().byId('allFilter').setBindingContext(context);
						sap.ui.getCore().byId('DisabledFilter').setBindingContext(context);
						sap.ui.getCore().byId('Switch_offFilter').setBindingContext(context);
						sap.ui.getCore().byId('Switch_onFilter').setBindingContext(context);
						sap.ui.getCore().byId('NotificationsFilter').setBindingContext(context);
					}
				})
			]
		});
		splitApp.addMasterPage(masterPage);
		splitApp.addDetailPage(detailPage);
		splitApp.addDetailPage(home);
		splitApp.setInitialMaster("masterPage");
		splitApp.setInitialDetail("home");
		
		
		
 		return new sap.m.Page({
			title: "Manage Appliances",
			showNavButton: true,
			navButtonPress: function(){ 
					app.back();	
			         },
			content: [
			          
                  splitApp
			
			]
		});
	}

});