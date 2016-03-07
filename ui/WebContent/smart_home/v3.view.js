sap.ui.jsview("smart_home.v3", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smart_home.v3
	*/ 
	getControllerName : function() {
		return "smart_home.v3";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smart_home.v3
	*/ 
	createContent : function(oController) {
		
		// some business data 
		var oModel = new sap.ui.model.json.JSONModel({
			businessData : [
				{Time :"6 Am",Power:20,  LED01:2, LED02:5,  population:34789000},
				{Time :"10 Am",Power:25, LED01:3, LED02:4, population:1339724852},
				{Time :"2 Pm",Power:89 , LED01:2.7, LED02:7, population:65350000},
				{Time :"6 Pm",Power:56 , LED01:8, LED02:12,population:81799600},
				{Time :"10 Pm",Power:65 , LED01:9,LED02:20, population:1210193422},
				{Time :"2 Am",Power:29 , LED01:4,LED02:13, population:313490000}
			]
		});		

	    // A Dataset defines how the model data is mapped to the chart 
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({

			// a Bar Chart requires exactly one dimension (x-axis) 
			dimensions : [ 
				{
					axis : 1, // must be one for the x-axis, 2 for y-axis
					name : 'Time', 
					value : "{Time}"
				} 
			],

			// it can show multiple measures, each results in a new set of bars in a new color 
			measures : [ 
			    // measure 1
				{
					name : 'LED01', // 'name' is used as label in the Legend 
					value : '{LED01}' // 'value' defines the binding for the displayed value   
				},
				{
					name : 'LED02', // 'name' is used as label in the Legend 
					value : '{LED02}' // 'value' defines the binding for the displayed value   
				},
				{
					name : 'Power', 
					value : '{Power}'
				} 
			],
			
			// 'data' is used to bind the whole data collection that is to be displayed in the chart 
			data : {
				path : "/businessData"
			}
			
		});

	    // create a Bar chart
	    // you also might use Combination, Line, StackedColumn100, StackedColumn or Column
	    // for Donut and Pie please remove one of the two measures in the above Dataset.  
		var oBarChart = new sap.viz.ui5.Bar({
			width : "80%",
			height : "400px",
			plotArea : {
			//'colorPalette' : d3.scale.category20().range()
			},
			title : {
				visible : true,
				text : 'Power Consumption per Day'
			},
			dataset : oDataset
		});

	    // attach the model to the chart and display it
		oBarChart.setModel(oModel);
		
		
		
		
		//////////////////////////////////////
		
		var oModel2 = new sap.ui.model.json.JSONModel({
			businessData : [
				{Device:"LED01", Power: 12 },
				{Device:"LED02", Power: 16 },
				{Device:"Fan01", Power: 23 },
				{Device:"Tv", Power: 78 },
				{Device:"Ac", Power: 189 },
			]
		});		

		
		
		
		
		
		   var oDataset2 = new sap.viz.ui5.data.FlattenedDataset({

	              // a Bar Chart requires exactly one dimension (x-axis) 
	              dimensions : [ 
	                     {
	                           axis : 1, // must be one for the x-axis, 2 for y-axis
	                           name : 'Device', 
	                           value : "{Device}"
	                     } 
	              ],

	              // it can show multiple measures, each results in a new set of bars in a new color 
	              measures : [ 
	                  // measure 1
	                     {
	                           name : 'Power', // 'name' is used as label in the Legend 
	                           value : '{Power}' // 'value' defines the binding for the displayed value   
	                     }
	              ],
	              
	              // 'data' is used to bind the whole data collection that is to be displayed in the chart 
	              data : {
	            	  path : "/businessData"
	              }
	              
	       });

	         // create a Bar chart
	         // you also might use Combination, Line, StackedColumn100, StackedColumn or Column
	         // for Donut and Pie please remove one of the two measures in the above Dataset.  
	       var oBarChart2 = new sap.viz.ui5.Donut({
	              width : "50%",
	              height : "50%",
	              plotArea : {
	              //'colorPalette' : d3.scale.category20().range()
	              },
	              title : {
	                     visible : false,
	                     text : 'Power consumed per device'
	              },
	              dataset : oDataset2
	       });

	         // attach the model to the chart and display it
	       oBarChart2.setModel(oModel2);
		
		
		
		
		
		
		
 		return new sap.m.Page({
			title: "Observe",
			showNavButton: true,
			navButtonPress: function(){ 
					app.back();	
			         },
			content: [
                   oBarChart,
                   oBarChart2
			          
			]
		});
	}

});