

 function newcustomer(){
$('#dlgcustomer').dialog('open').dialog('setTitle','Enter customer ');
$('#frmcustomer').form('clear');
 url='add'; 
}

 function editcustomer(){
 var row=$('#dgcustomer').datagrid('getSelected');
 if(row)
{
 $('#dlgcustomer').dialog('open').dialog('setTitle','Edit customer');
 $('#frmcustomer').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletecustomer(){
 var row=$('#dgcustomer').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgcustomer').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savecustomer(){
 saveForm('#frmcustomer',url,'#dlgcustomer','#dgcustomer');
}