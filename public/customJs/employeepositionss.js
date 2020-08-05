

 function newemployeepositions(){
$('#dlgemployeepositions').dialog('open').dialog('setTitle','Enter employeepositions ');
$('#frmemployeepositions').form('clear');
 url='add'; 
}

 function editemployeepositions(){
 var row=$('#dgemployeepositions').datagrid('getSelected');
 if(row)
{
 $('#dlgemployeepositions').dialog('open').dialog('setTitle','Edit employeepositions');
 $('#frmemployeepositions').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteemployeepositions(){
 var row=$('#dgemployeepositions').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgemployeepositions').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveemployeepositions(){
 saveForm('#frmemployeepositions',url,'#dlgemployeepositions','#dgemployeepositions');
}