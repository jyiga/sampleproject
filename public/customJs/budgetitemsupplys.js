

 function newbudgetitemsupply(){
$('#dlgbudgetitemsupply').dialog('open').dialog('setTitle','Enter budgetitemsupply ');
$('#frmbudgetitemsupply').form('clear');
 url='add'; 
}

 function editbudgetitemsupply(){
 var row=$('#dgbudgetitemsupply').datagrid('getSelected');
 if(row)
{
 $('#dlgbudgetitemsupply').dialog('open').dialog('setTitle','Edit budgetitemsupply');
 $('#frmbudgetitemsupply').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletebudgetitemsupply(){
 var row=$('#dgbudgetitemsupply').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgbudgetitemsupply').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savebudgetitemsupply(){
 saveForm('#frmbudgetitemsupply',url,'#dlgbudgetitemsupply','#dgbudgetitemsupply');
}