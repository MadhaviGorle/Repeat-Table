
  function deleteRow(r) {
      var x = r.parentNode.parentNode.rowIndex;
      document.getElementById("myTable").deleteRow(x);
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length;
  
      
      var rowcountAfterDelete = document.getElementById("myTable").rows.length;  
           for(var i=1;i<rowcountAfterDelete;i++){    
                table.rows[i].cells[0].innerHTML=i;
            }
            
}
  
  function addRow() {
            
      var table = document.getElementById("myTable");
   
      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);
   
      row.insertCell(0).innerHTML= rowCount;
      row.insertCell(1).innerHTML= '<input type="button" value = "Delete" onClick="deleteRow(this)">';
      
  }
  







  
 
  