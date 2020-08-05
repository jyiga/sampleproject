

 function newofferytype(){
$('#dlgofferytype').dialog('open').dialog('setTitle','Enter Gift Types ');
$('#frmofferytype').form('clear');
 url='add'; 
}

 function editofferytype(){
 var row=$('#dgofferytype').datagrid('getSelected');
 if(row)
{
 $('#dlgofferytype').dialog('open').dialog('setTitle','Edit Gift Types');
 $('#frmofferytype').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteofferytype(){
 var row=$('#dgofferytype').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgofferytype').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveofferytype(){
 saveForm('#frmofferytype',url,'#dlgofferytype','#dgofferytype');
}