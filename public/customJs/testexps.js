

 function newtestexp(){
$('#dlgtestexp').dialog('open').dialog('setTitle','Enter testexp ');
$('#frmtestexp').form('clear');
 url='add'; 
}

 function edittestexp(){
 var row=$('#dgtestexp').datagrid('getSelected');
 if(row)
{
 $('#dlgtestexp').dialog('open').dialog('setTitle','Edit testexp');
 $('#frmtestexp').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetestexp(){
 var row=$('#dgtestexp').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtestexp').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetestexp(){
 saveForm('#frmtestexp',url,'#dlgtestexp','#dgtestexp');
}