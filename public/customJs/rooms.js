

 function newroom(){
$('#dlgroom').dialog('open').dialog('setTitle','Enter room ');
$('#frmroom').form('clear');
 url='add'; 
}

 function editroom(){
 var row=$('#dgroom').datagrid('getSelected');
 if(row)
{
 $('#dlgroom').dialog('open').dialog('setTitle','Edit room');
 $('#frmroom').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteroom(){
 var row=$('#dgroom').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgroom').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveroom(){
 saveForm('#frmroom',url,'#dlgroom','#dgroom');
}