

 function newemployeeposition(){
$('#dlgemployeeposition').dialog('open').dialog('setTitle','Enter employeeposition ');
$('#frmemployeeposition').form('clear');
 url='add'; 
}

 function editemployeeposition(){
 var row=$('#dgemployeeposition').datagrid('getSelected');
 if(row)
{
 $('#dlgemployeeposition').dialog('open').dialog('setTitle','Edit employeeposition');
 $('#frmemployeeposition').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteemployeeposition(){
 var row=$('#dgemployeeposition').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgemployeeposition').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveemployeeposition(){
 saveForm('#frmemployeeposition',url,'#dlgemployeeposition','#dgemployeeposition');
}