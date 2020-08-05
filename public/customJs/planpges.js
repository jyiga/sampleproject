

 function newplanpge(){
$('#dlgplanpge').dialog('open').dialog('setTitle','Enter planpge ');
$('#frmplanpge').form('clear');
 url='add'; 
}

 function editplanpge(){
 var row=$('#dgplanpge').datagrid('getSelected');
 if(row)
{
 $('#dlgplanpge').dialog('open').dialog('setTitle','Edit planpge');
 $('#frmplanpge').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteplanpge(){
 var row=$('#dgplanpge').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgplanpge').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveplanpge(){
 saveForm('#frmplanpge',url,'#dlgplanpge','#dgplanpge');
}