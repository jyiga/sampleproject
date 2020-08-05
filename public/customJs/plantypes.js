

 function newplantype(){
$('#dlgplantype').dialog('open').dialog('setTitle','Enter plantype ');
$('#frmplantype').form('clear');
 url='add'; 
}

 function editplantype(){
 var row=$('#dgplantype').datagrid('getSelected');
 if(row)
{
 $('#dlgplantype').dialog('open').dialog('setTitle','Edit plantype');
 $('#frmplantype').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteplantype(){
 var row=$('#dgplantype').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgplantype').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveplantype(){
 saveForm('#frmplantype',url,'#dlgplantype','#dgplantype');
}