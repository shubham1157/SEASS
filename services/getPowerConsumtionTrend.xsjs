function doGet() {
    var eqpID = $.request.parameters.get("eqpID");
    var query = "",query1 = "",query2 = "",query3 = "",
        pstmt, rs,rs1,rs2,reqid,pstmt1,pstmt2,pstmt3;
    var eqpId,eqpPowerConsumtion;
    var equip_info_trend = [];
    var output = {};
    
   	   
    var conn = $.db.getConnection("tmp.ong.pidemo.services::annoncon");
        query = 'SELECT "EQUIPMENTNUMBER","POWERCONSUMED" FROM "OIL"."tmp.ong.pidemo.db::EQUIPMENT_DETAILS" WHERE EQUIPMENTNUMBER = ?';
        pstmt = conn.prepareStatement(query);
        pstmt.setString(1,eqpID);
       
       rs = pstmt.executeQuery();
       var i = -1;//ID to be paddes in the data table
   	   var j = 0;// Week number to be passed to the data table
    while (rs.next()) {
    	var equipment_info = {};
    	   	
    	equipment_info.eqpId=rs.getString(1);
    	equipment_info.eqpPowerConsumtion1=rs.getString(2);
    	equipment_info.eqpPowerConsumtion=parseInt(equipment_info.eqpPowerConsumtion1);
    	
    //Prepare the Data table for the PAL Algorithm	
        query1 = ' INSERT INTO "OIL"."PAL_GR_DATA_TBL" VALUES (?,?,?)';
        pstmt1 = conn.prepareStatement(query1);
        pstmt1.setInteger(1,i+1);
        pstmt1.setInteger(2, equipment_info.eqpPowerConsumtion);
        pstmt1.setInteger(3, j+1);
        
        
        pstmt1.executeUpdate();
        conn.commit();
    }
    
    //Run the PAL Stored Procedure
    query2 = 'CALL "OIL"."tmp.ong.pidemo.db::PAL_WRAPPER"';
    pstmt2 = conn.prepareStatement(query2);
    pstmt2.executeUpdate();
    
    // Get the Result Set after the procedure is run
    query3 = 'SELECT "Ai" from "OIL"."PAL_GR_RESULTS_TBL"';
    pstmt3 = conn.prepareStatement(query3);
    rs2 = pstmt3.executeQuery();
    while (rs2.next()) {
    	var powerConsumtionTrend = {};
    	
    	powerConsumtionTrend.power = rs2.getInteger(1);
    	equip_info_trend.push(powerConsumtionTrend);
    	
    }
    
    output.equip_info_trend = equip_info_trend;
    $.response.contentType = "application/json";
    $.response.headers.set("X-CSRF-Token", $.session.getSecurityToken());
    $.response.setBody(JSON.stringify(output));
    $.response.status = $.net.http.OK;
}

switch ($.request.method) {
case 1:
    doGet();
    break;
    
default:
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    $.response.setBody(" {\"error\": \"Please make a GET call\"}");
}