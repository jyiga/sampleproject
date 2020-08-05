

 function newpaymentVoucherItem(){
$('#dlgpaymentVoucherItem').dialog('open').dialog('setTitle','Enter paymentVoucherItem ');
$('#frmpaymentVoucherItem').form('clear');
 url='add'; 
}

 function editpaymentVoucherItem(){
 var row=$('#dgpaymentVoucherItem').datagrid('getSelected');
 if(row)
{
 $('#dlgpaymentVoucherItem').dialog('open').dialog('setTitle','Edit paymentVoucherItem');
 $('#frmpaymentVoucherItem').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletepaymentVoucherItem(){
 var row=$('#dgpaymentVoucherItem').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgpaymentVoucherItem').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savepaymentVoucherItem(){
 saveForm('#frmpaymentVoucherItem',url,'#dlgpaymentVoucherItem','#dgpaymentVoucherItem');
}