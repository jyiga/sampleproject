

 function newinvoiceItem(){
$('#dlginvoiceItem').dialog('open').dialog('setTitle','Enter invoiceItem ');
$('#frminvoiceItem').form('clear');
 url='add'; 
}

 function editinvoiceItem(){
 var row=$('#dginvoiceItem').datagrid('getSelected');
 if(row)
{
 $('#dlginvoiceItem').dialog('open').dialog('setTitle','Edit invoiceItem');
 $('#frminvoiceItem').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteinvoiceItem(){
 var row=$('#dginvoiceItem').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dginvoiceItem').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveinvoiceItem(){
 saveForm('#frminvoiceItem',url,'#dlginvoiceItem','#dginvoiceItem');
}