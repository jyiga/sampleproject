

 function newplandemin(){
$('#dlgplandemin').dialog('open').dialog('setTitle','Enter plandemin ');
$('#frmplandemin').form('clear');
 url='add'; 
}

 function editplandemin(){
 var row=$('#dgplandemin').datagrid('getSelected');
 if(row)
{
 $('#dlgplandemin').dialog('open').dialog('setTitle','Edit plandemin');
 $('#frmplandemin').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteplandemin(){
 var row=$('#dgplandemin').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgplandemin').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveplandemin(){
 saveForm('#frmplandemin',url,'#dlgplandemin','#dgplandemin');
}