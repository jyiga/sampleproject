

 function newviewbudgetpayment(){
$('#dlgviewbudgetpayment').dialog('open').dialog('setTitle','Enter viewbudgetpayment ');
$('#frmviewbudgetpayment').form('clear');
 url='add'; 
}

 function editviewbudgetpayment(){
 var row=$('#dgviewbudgetpayment').datagrid('getSelected');
 if(row)
{
 $('#dlgviewbudgetpayment').dialog('open').dialog('setTitle','Edit viewbudgetpayment');
 $('#frmviewbudgetpayment').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteviewbudgetpayment(){
 var row=$('#dgviewbudgetpayment').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgviewbudgetpayment').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveviewbudgetpayment(){
 saveForm('#frmviewbudgetpayment',url,'#dlgviewbudgetpayment','#dgviewbudgetpayment');
}