

 function newbudgetactual(){
$('#dlgbudgetactual').dialog('open').dialog('setTitle','Enter budgetactual ');
$('#frmbudgetactual').form('clear');
 url='add'; 
}

 function editbudgetactual(){
 var row=$('#dgbudgetactual').datagrid('getSelected');
 if(row)
{
 $('#dlgbudgetactual').dialog('open').dialog('setTitle','Edit budgetactual');
 $('#frmbudgetactual').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletebudgetactual(){
 var row=$('#dgbudgetactual').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgbudgetactual').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savebudgetactual(){
 saveForm('#frmbudgetactual',url,'#dlgbudgetactual','#dgbudgetactual');
}