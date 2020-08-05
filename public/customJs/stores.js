

 function newstore(){
$('#dlgstore').dialog('open').dialog('setTitle','Enter store ');
$('#frmstore').form('clear');
 url='add'; 
}

 function editstore(){
 var row=$('#dgstore').datagrid('getSelected');
 if(row)
{
 $('#dlgstore').dialog('open').dialog('setTitle','Edit store');
 $('#frmstore').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestore(){
 var row=$('#dgstore').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstore').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestore(){
 saveForm('#frmstore',url,'#dlgstore','#dgstore');
}