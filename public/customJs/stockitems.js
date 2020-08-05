 function newstockitem(){
$('#dlgstockitem').dialog('open').dialog('setTitle','Enter stockitem ');
$('#frmstockitem').form('clear');
 url='add'; 
}

 function editstockitem(){
 var row=$('#dgstockitem').datagrid('getSelected');
 if(row)
{
 $('#dlgstockitem').dialog('open').dialog('setTitle','Edit stockitem');
 $('#frmstockitem').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestockitem(){
 var row=$('#dgstockitem').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstockitem').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestockitem(){
 saveForm('#frmstockitem',url,'#dlgstockitem','#dgstockitem');
}


 function openstockitem()
 {

     var row=$('#dgstockitem').datagrid('getSelected');
     if(row)
     {
         $('#dlgstockissue').dialog('open').dialog('setTitle','Open Stock');

         $('#frmstockissue').form('clear');
         $('#frmstockissue').form('load',row);
         url='../stockissues/openStock/'+row.id;
     }
     else
     {

         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
     }
 }

 function savestockissue() {
     saveForm('#frmstockissue', url, '#dlgstockissue', '#dgstockitem');
 }

 function findStock(x)
 {
     $('#dgstockitem').datagrid('reload',{'itemName':x});
 }
