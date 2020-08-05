

 function neworderdeliverypoint(){
$('#dlgorderdeliverypoint').dialog('open').dialog('setTitle','Enter orderdeliverypoint ');
$('#frmorderdeliverypoint').form('clear');
 url='add'; 
}

 function editorderdeliverypoint(){
 var row=$('#dgorderdeliverypoint').datagrid('getSelected');
 if(row)
{
 $('#dlgorderdeliverypoint').dialog('open').dialog('setTitle','Edit orderdeliverypoint');
 $('#frmorderdeliverypoint').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteorderdeliverypoint(){
 var row=$('#dgorderdeliverypoint').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgorderdeliverypoint').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveorderdeliverypoint(){
 saveForm('#frmorderdeliverypoint',url,'#dlgorderdeliverypoint','#dgorderdeliverypoint');
}