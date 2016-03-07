function doGet() {
    var eqpID = $.request.parameters.get("eqpID");
    var query = "",
        pstmt, rs,reqid;
    var eqpId,eqpPowerConsumtion;
    var equip_info = [];
    var output = {};
    
    var conn = $.db.getConnection("tmp.ong.pidemo.services::annoncon");

        query = 'SELECT "EQUIPMENTNUMBER","POWERCONSUMED","VOLTS","CURRENT","STATUS" FROM "OIL"."tmp.ong.pidemo.db::EQUIPMENT_DETAILS" WHERE EQUIPMENTNUMBER = ?';
        pstmt = conn.prepareStatement(query);
        pstmt.setString(1,eqpID);
       
       rs = pstmt.executeQuery();
    while (rs.next()) {
    	var equipment_info = {};
    	equipment_info.eqpId=rs.getString(1);
    	equipment_info.eqpPowerConsumtion=rs.getString(2);
    	equipment_info.eqpVolts=rs.getString(3);
    	equipment_info.eqpCurrent=rs.getString(4);
    	equipment_info.eqpStatus=rs.getString(5);
    	equip_info.push(equipment_info);
    }
    output.equip_info = equip_info;
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