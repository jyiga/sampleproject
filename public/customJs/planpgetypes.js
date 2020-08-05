

 function newplanpgetype(){
$('#dlgplanpgetype').dialog('open').dialog('setTitle','Enter planpgetype ');
$('#frmplanpgetype').form('clear');
 url='add'; 
}

 function editplanpgetype(){
 var row=$('#dgplanpgetype').datagrid('getSelected');
 if(row)
{
 $('#dlgplanpgetype').dialog('open').dialog('setTitle','Edit planpgetype');
 $('#frmplanpgetype').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteplanpgetype(){
 var row=$('#dgplanpgetype').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgplanpgetype').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveplanpgetype(){
 saveForm('#frmplanpgetype',url,'#dlgplanpgetype','#dgplanpgetype');
}