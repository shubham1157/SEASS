sap.ui.jsview("smart_home.v6", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf smart_home.v6
	*/ 
	getControllerName : function() {
		return "smart_home.v6";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf smart_home.v6
	*/ 
	createContent : function(oController) {
		
		
		 var oOverlayContainer = new sap.ui.ux3.OverlayContainer("screen",{ width: "440px",height:"440px",
			  openButtonVisible : false,
		});
	   oOverlayContainer.attachClose(handler);
	   
	   function handler(oEvent) {
		   sap.ui.getCore().byId("screen").destroyContent();
		}
        
	   
	   var oOverlayContainer2 = new sap.ui.ux3.OverlayContainer("screen2",{
			  openButtonVisible : false,
		});
	   oOverlayContainer2.attachClose(handler2);
	   
	   function handler2(oEvent) {
		   sap.ui.getCore().byId("screen2").destroyContent();
		}
		
		 var oTreeTable = new sap.ui.table.TreeTable({
             columns: [
                 new sap.ui.table.Column({
                     label: "Title",
						template: new sap.ui.commons.TriStateCheckBox().bindProperty("text", "Title")
                 }),
                 new sap.ui.table.Column({
                     label: "Quarter01",
                     template: "Quarter01"
                 }),
                 new sap.ui.table.Column({
                     label: "Quarter02",
                     template: "Quarter02"
                 }),
                 new sap.ui.table.Column({
                     label: "Quarter03",
                     template: "Quarter03"
                 }),
                 new sap.ui.table.Column({
                     label: "Quarter04",
                     template: "Quarter04"
                 }),
                 new sap.ui.table.Column({
                     label: "Total",
                     template: new sap.m.Link("link",{ press:oController.linkPressed2 }).bindProperty("text", "Total"),
                    // template: "Total"
                 }),
             ],
             selectionMode: sap.ui.table.SelectionMode.None,
             enableColumnReordering: false,
             expandFirstLevel: false,
             toggleOpenState: function(oEvent) {

             }
         });

         var data = {
             "d": {
                 "results": [{
                     "__metadata": {
                         "id": "http://url/EntitySet('00000001')",
                         "uri": "http://url/EntitySet('00000001')",
                         "type": " NAMESPACE_SRV.Entity"
                     },
                     "Quarter04": "2345",
                     "Quarter03": "2000",
                     "Quarter02": "1670",
                     "Quarter01": "1250",
                     "Total"    : "7265",
                     "Title": "2012",
                     "ID": "00000001",
                     "ParentId": "",
                     "ChildId": "",
                 }, 
                 {
                     "__metadata": {
                         "id": "http://url/EntitySet('00000002')",
                         "uri": "http://url/EntitySet('00000002')",
                         "type": "NAMESPACE_SRV.Entity"
                     },
                     "Quarter04": "1900",
                     "Quarter03": "2200",
                     "Quarter02": "1760",
                     "Quarter01": "1550",
                     "Total"   :   "7410",
                     "Title": "2013",
                     "ID": "00000002",
                     "ParentId": "",
                     "ChildId": "",
                 }, {
                     "__metadata": {
                         "id": "http://url/EntitySet('00000003')",
                         "uri": "http://url/EntitySet('00000003')",
                         "type": "NAMESPACE_SRV.Entity"
                     },
                     "Quarter04": "100",
                     "Quarter03": "300",
                     "Quarter02": "860",
                     "Quarter01": "750",
                     "Total" :   "2010",
                     "Title": "TV",
                     "ID": "00000003",
                     "ParentId": "00000002",
                     "ChildId": "00000001",
                 }, {
                     "__metadata": {
                         "id": "http://url/EntitySet('00000004')",
                         "uri": "http://url/EntitySet('00000004')",
                         "type": "NAMESPACE_SRV.Entity"
                     },
                     "Quarter04": "600",
                     "Quarter03": "200",
                     "Quarter02": "960",
                     "Quarter01": "250",
                     "Total" :   "2010",
                     "Title": "AC",
                     "ID": "00000004",
                     "ParentId": "00000002",
                     "ChildId": "00000001",
                 },  {
                     "__metadata": {
                         "id": "http://url/EntitySet('00000006')",
                         "uri": "http://url/EntitySet('00000006')",
                         "type": "NAMESPACE_SRV.Entity"
                     },
                     "Quarter04": "120",
                     "Quarter03": "100",
                     "Quarter02": "560",
                     "Quarter01": "750",
                     "Total"  :  "1530",
                     "Title": "Geyser",
                     "ID": "00000006",
                     "ParentId": "00000002",
                     "ChildId": "00000001",
                 },
                 {
                     "__metadata": {
                         "id": "http://url/EntitySet('00000002')",
                         "uri": "http://url/EntitySet('00000002')",
                         "type": "NAMESPACE_SRV.Entity"
                     },
                     "Quarter04": "1400",
                     "Quarter03": "1200",
                     "Quarter02": "1760",
                     "Quarter01": "1950",
                     "Total"   :   "6310",
                     "Title": "2014",
                     "ID": "00000007",
                     "ParentId": "",
                     "ChildId": "",
                 },
                 {
                     "__metadata": {
                         "id": "http://url/EntitySet('00000002')",
                         "uri": "http://url/EntitySet('00000002')",
                         "type": "NAMESPACE_SRV.Entity"
                     },
                     "Quarter04": "",
                     "Quarter03": "1200",
                     "Quarter02": "2760",
                     "Quarter01": "1550",
                     "Total"   :   "5510",
                     "Title": "2015",
                     "ID": "00000008",
                     "ParentId": "",
                     "ChildId": "",
                 },
                 ]
             }
         };
		//	debugger;
         var flat = {};
         for (var i = 0; i < data.d.results.length; i++) {
             var key = 'id' + data.d.results[i].ID;
             flat[key] = data.d.results[i];
             flat[key].__metadata = "";
         }

         // add child container array to each node
         for (var i in flat) {
             flat[i].children = []; // add children container
         }

         // populate the child container arrays
         for (var i in flat) {
             var parentkey = 'id' + flat[i].ParentId;
             if (flat[parentkey]) {
                 flat[parentkey].children.push(flat[i]);
             }
         }

         // find the root nodes (no parent found) and create the hierarchy tree from them
         var root = [];
         for (var i in flat) {
             var parentkey = 'id' + flat[i].ParentId;
             if (!flat[parentkey]) {
                 root.push(flat[i]);
             }
         }

         // here it is!          
         // console.log(root);    

         // to access the JSON via "/root" in bindRows(), could this be a problem?? 
         var data = {
             root: root,
         };

       

         var oTreeModel = new sap.ui.model.json.JSONModel();
         oTreeModel.setData(data);
         oTreeTable.setModel(oTreeModel);
         oTreeTable.bindRows({
             path: '/root',
         });


		
		
		
		
		
		
		
 		return new sap.m.Page({
			title: "Invoice",
			showNavButton: true,
			navButtonPress: function(){ 
					app.back();	
			         },
			content: [
			          oTreeTable
			]
		});
	}

});