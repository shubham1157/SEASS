sap.ui.jsview("smart_home.v5", {

                /** Specifies the Controller belonging to this View. 
                * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
                * @memberOf smart_home.v5
                */ 
                getControllerName : function() {
                                return "smart_home.v5";
                },

                /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
                * Since the Controller is given to this method, its event handlers can be attached right away. 
                * @memberOf smart_home.v5
                */ 
                createContent : function(oController) {
                                
                                var oModel = new sap.ui.model.json.JSONModel({
                                                Names:[
                                                         
                                                                                  
                                                                      {"Week":"week 1","Device": "LED01", "Power":"10","Bill":"70"},
                                                                      {"Week":"week 2","Device": "LED02", "Power":"19","Bill":"81"},
                                                                      {"Week":"week 3","Device": "Fan01", "Power":"31","Bill":"112"},
                                                                        {"Week":"week 4","Device": "Tv", "Power":"127","Bill":"289"}
                                                                                
                                                                                  
                                                                                  
                                                                                  
                                                          ]
                                });
                                
                                                
                                
                                
                      sap.ui.getCore().setModel(oModel,"oModel_liveData");
                       
                    // A Dataset defines how the model data is mapped to the chart 
                        var oDataset = new sap.viz.ui5.data.FlattenedDataset({

                            // a Bar Chart requires exactly one dimension (x-axis) 
                            dimensions : [ 
                                   {
                                         axis : 1, // must be one for the x-axis, 2 for y-axis
                                         name : 'Device', 
                                         value : "{Device}"
                                   } ,
                                   
                                        {
                                         axis : 1, // must be one for the x-axis, 2 for y-axis
                                         name : 'Week', 
                                         value : "{Week}"
                                   } 
                                                                                   
                                                                                   
                            ],

                            // it can show multiple measures, each results in a new set of bars in a new color 
                            measures : [ 
                                // measure 1
                                   {
                                         name : 'Power', // 'name' is used as label in the Legend 
                                         value : '{Power}' // 'value' defines the binding for the displayed value   
                                   },
                                   {
                                         name : 'Bill', // 'name' is used as label in the Legend 
                                         value : '{Bill}' // 'value' defines the binding for the displayed value   
                                   },
                                
                                   
                            ],
                            
                            // 'data' is used to bind the whole data collection that is to be displayed in the chart 
                            data : {
                                   path : "/Names"
                            }
                            
                     });
                          
                             // Prepare business data
//                          var oModel = new sap.ui.model.json.JSONModel({
//                              MessageCount : [ {
//                                  Component: "GRC-SAC-ARA",
//                                  Count: 5
//                              }, {
//                                  Component: "GRC-SAC-ARQ",
//                                  Count: 15
//                              }, {
//                                  Component: "GRC-SAC-BRM",
//                                  Count: 6
//                              }, {
//                                  Component: "GRC-SAC-UPG",
//                                  Count: 1
//                              }, {
//                                  Component: "GRC-SAC-GL",
//                                  Count: 1
//                              } ]
//                          });
//                      
//                          // A Dataset defines how the model data is mapped to the chart 
//                          var oDataset = new sap.viz.ui5.data.FlattenedDataset({
//                              // a Bar Chart requires exactly one dimension (x-axis) 
//                              dimensions : [ {
//                                  axis : 1, // must be one for the x-axis, 2 for y-axis
//                                  name : 'Component',
//                                  value : "{Component}"
//                              } ],
//                              // it can show multiple measures, each results in a new set of bars in a new color 
//                              measures : [
//                              // measure 1
//                              {
//                                  name : 'Count', // 'name' is used as label in the Legend 
//                                  value : '{Count}' // 'value' defines the binding for the displayed value   
//                              } ],
//                              // 'data' is used to bind the whole data collection that is to be displayed in the chart 
//                              data : {
//                                  path : "/MessageCount"
//                              }
//                          });
//                      
                              // create a VizContainer
                              var oVizContainer = new sap.viz.ui5.VizContainer({
                                  'uiConfig' : {
                                      'layout' : 'vertical',
                                      'enableMorphing' : true
                                  },
                                  'width': '100%',
                                  'height': '100%'

                              });
                          
                              // attach the model to the chart and display it
                             oVizContainer.setVizData(oDataset)
                              oVizContainer.setModel(oModel);
                          
                              // set feeds
                              var aobjCountry = new sap.viz.ui5.controls.common.feeds.AnalysisObject({
                                                            uid : "Component_id",
                                  name : "Component",
                                  type : "Dimension"
                              }), aobjProfit = new sap.viz.ui5.controls.common.feeds.AnalysisObject({
                                                            uid : "Count_id",
                                  name : "Count",
                                  type : "Measure"
                              });
                              var feedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
                                                            uid : "primaryValues",
                                  type : "Measure",
                                  values : [ aobjProfit ]
                              }), feedAxisLabels = new sap.viz.ui5.controls.common.feeds.FeedItem({
                                                            uid : "axisLabels",
                                  type : "Dimension",
                                  values : [ aobjCountry ]
                              });
                      
                              oVizContainer.addFeed(feedPrimaryValues);
                              oVizContainer.addFeed(feedAxisLabels);
                          
                              // attach event listener for feedschange
                              oVizContainer.attachEvent('feedsChanged', function(e) {
                                  // You could add your own logic to handle feedsChanged to set new dataset to vizContainer.
                                  // Reset current data for demo purpose.
                                  oVizContainer.setVizData(new sap.viz.ui5.data.FlattenedDataset({
                                      dimensions : [ 
                                    {                                                             
                                         axis : 1, // must be one for the x-axis, 2 for y-axis
                                         name : 'Device', 
                                         value : "{Device}"
                                   } ,
                                   {
                                                                                   
                                         axis : 1, // must be one for the x-axis, 2 for y-axis
                                         name : 'Week', 
                                         value : "{Week}"
                                   } 
                                                                                                  ],
                                                                                                  
                                           measures : [ 
                                                   {
                                         name : 'Power', // 'name' is used as label in the Legend 
                                         value : '{Power}' // 'value' defines the binding for the displayed value   
                                   },
                                   {
                                         name : 'Bill', // 'name' is used as label in the Legend 
                                         value : '{Bill}' // 'value' defines the binding for the displayed value   
                                   },
                                                  
                                       
                                      ], data : {
                                          path : "/Names"
                                      }
                                  }));
                                  
                                  oVizContainer.setModel(oModel);
                                  
                              });
                                
                                
                               return new sap.m.Page({
                                                title: "HANA PAL",
                                                showNavButton: true,
                                                navButtonPress: function(){ 
                                                                                app.back();         
                                                         },
                                                content: [
             oVizContainer
                                                ]
                                });
                }

});


