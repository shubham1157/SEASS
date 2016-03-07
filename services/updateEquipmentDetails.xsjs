function generate_timestamp()
{
	var conn = $.db.getConnection("tmp.ong.pidemo.services::annoncon");
    var rs,myDate,newDate;
    var query="select current_date||current_time from dummy";
    var time_pstmt = conn.prepareStatement(query);
    rs = time_pstmt.executeQuery();
    while (rs.next()) {
    myDate=rs.getString(1);
    myDate=myDate.split("-");
    myDate[2]=myDate[2].split(":");
    newDate=myDate[0]+myDate[1]+myDate[2][0]+myDate[2][1]+myDate[2][2];
    }
    rs.close();
    time_pstmt.close();
    conn.close();
    return newDate;
}
function createCurrentReading() {
    
    try {
        var eqpID = $.request.parameters.get("eqpID"); 
        var eqpPower = $.request.parameters.get("eqpPower");
        var eqpVolt = $.request.parameters.get("eqpVolt"); 
        var eqpCurrent = $.request.parameters.get("eqpCurrent"); 
        var eqpStatus = $.request.parameters.get("eqpStatus"); 
        
        if(eqpPower == "" || eqpPower == undefined){
            throw "No Power Consumption Recieved!!";
        }
    
        var query = "", pstmt;
        
        var conn = $.db.getConnection("tmp.ong.pidemo.services::annoncon");
        var changed_by_date = generate_timestamp();
    
        query = 'INSERT INTO "OIL"."tmp.ong.pidemo.db::EQUIPMENT_DETAILS" values (?,?,?,?,?,?)';

        pstmt = conn.prepareStatement(query);
        
        pstmt.setString(1,eqpID);
        pstmt.setString(2,eqpPower);
        pstmt.setTimestamp(3,changed_by_date);
        pstmt.setString(4,eqpVolt);
        pstmt.setString(5,eqpCurrent);
        pstmt.setString(6,eqpStatus);
        
        pstmt.executeUpdate();
    
        conn.commit();
        
        $.response.contentType = "application/json";
        $.response.headers.set("X-CSRF-Token", $.session.getSecurityToken());
        $.response.setBody("Power Consumption Updated updated");
        $.response.status = 201;
    }
    catch(e){
        
    $.response.setBody(e.message);
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    }
    finally{
         if(pstmt) pstmt.close();
         if(conn) conn.close();
    }
}
createCurrentReading();