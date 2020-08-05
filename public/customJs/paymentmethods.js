

 function newpaymentmethod(){
$('#dlgpaymentmethod').dialog('open').dialog('setTitle','Enter paymentmethod ');
$('#frmpaymentmethod').form('clear');
 url='add'; 
}

 function editpaymentmethod(){
 var row=$('#dgpaymentmethod').datagrid('getSelected');
 if(row)
{
 $('#dlgpaymentmethod').dialog('open').dialog('setTitle','Edit paymentmethod');
 $('#frmpaymentmethod').form('load',row); 
 url='edit/'+row.name;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletepaymentmethod(){
 var row=$('#dgpaymentmethod').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.name,{},function(data){ $('#dgpaymentmethod').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savepaymentmethod(){
 saveForm('#frmpaymentmethod',url,'#dlgpaymentmethod','#dgpaymentmethod');
}