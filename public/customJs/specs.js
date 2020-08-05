

 function newspec(){
$('#dlgspec').dialog('open').dialog('setTitle','Enter spec ');
$('#frmspec').form('clear');
 url='add'; 
}

 function editspec(){
 var row=$('#dgspec').datagrid('getSelected');
 if(row)
{
 $('#dlgspec').dialog('open').dialog('setTitle','Edit spec');
 $('#frmspec').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletespec(){
 var row=$('#dgspec').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgspec').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savespec(){
 saveForm('#frmspec',url,'#dlgspec','#dgspec');
}