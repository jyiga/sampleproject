

 function newpayment(){
$('#dlgpayment').dialog('open').dialog('setTitle','Enter payment ');
$('#frmpayment').form('clear');
 url='add'; 
}

 function editpayment(){
 var row=$('#dgpayment').datagrid('getSelected');
 if(row)
{
 $('#dlgpayment').dialog('open').dialog('setTitle','Edit payment');
 $('#frmpayment').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletepayment(){
 var row=$('#dgpayment').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgpayment').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savepayment(){
 saveForm('#frmpayment',url,'#dlgpayment','#dgpayment');
}