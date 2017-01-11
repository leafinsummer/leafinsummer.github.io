function addTable(resourceDir, tableDiv) {
    var filesNum = 20;

    var myTable= "<table>";

    for (var i=0; i<filesNum; i++) {
        var imageFile = resourceDir + "/" + i + ".jpg"
        myTable+="<tr style='width: 99%;'>";
        myTable+="<img src='" + imageFile + "' style='width:100%;height:100%;'>";
        myTable+="<center>Label for above image is S" + i + "<center>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    document.getElementById(tableDiv).innerHTML = myTable;
 }
