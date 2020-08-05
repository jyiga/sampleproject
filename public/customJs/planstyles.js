

 function newplanstyle(){
$('#dlgplanstyle').dialog('open').dialog('setTitle','Enter planstyle ');
$('#frmplanstyle').form('clear');
 url='add'; 
}

 function editplanstyle(){
 var row=$('#dgplanstyle').datagrid('getSelected');
 if(row)
{
 $('#dlgplanstyle').dialog('open').dialog('setTitle','Edit planstyle');
 $('#frmplanstyle').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteplanstyle(){
 var row=$('#dgplanstyle').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgplanstyle').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveplanstyle(){
 saveForm('#frmplanstyle',url,'#dlgplanstyle','#dgplanstyle');
}