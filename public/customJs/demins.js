

 function newdemin(){
$('#dlgdemin').dialog('open').dialog('setTitle','Enter demin ');
$('#frmdemin').form('clear');
 url='add'; 
}

 function editdemin(){
 var row=$('#dgdemin').datagrid('getSelected');
 if(row)
{
 $('#dlgdemin').dialog('open').dialog('setTitle','Edit demin');
 $('#frmdemin').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletedemin(){
 var row=$('#dgdemin').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgdemin').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savedemin(){
 saveForm('#frmdemin',url,'#dlgdemin','#dgdemin');
}