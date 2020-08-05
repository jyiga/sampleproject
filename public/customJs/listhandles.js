

 function newlisthandle(){
$('#dlglisthandle').dialog('open').dialog('setTitle','Enter listhandle ');
$('#frmlisthandle').form('clear');
 url='add'; 
}

 function editlisthandle(){
 var row=$('#dglisthandle').datagrid('getSelected');
 if(row)
{
 $('#dlglisthandle').dialog('open').dialog('setTitle','Edit listhandle');
 $('#frmlisthandle').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletelisthandle(){
 var row=$('#dglisthandle').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dglisthandle').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savelisthandle(){
 saveForm('#frmlisthandle',url,'#dlglisthandle','#dglisthandle');
}