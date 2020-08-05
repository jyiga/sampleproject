

 function neworderitem(){
$('#dlgorderitem').dialog('open').dialog('setTitle','Enter orderitem ');
$('#frmorderitem').form('clear');
 url='add'; 
}

 function editorderitem(){
 var row=$('#dgorderitem').datagrid('getSelected');
 if(row)
{
 $('#dlgorderitem').dialog('open').dialog('setTitle','Edit orderitem');
 $('#frmorderitem').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteorderitem(){
 var row=$('#dgorderitem').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgorderitem').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveorderitem(){
 saveForm('#frmorderitem',url,'#dlgorderitem','#dgorderitem');
}