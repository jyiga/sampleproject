

 function newinvoiceHeading(){
$('#dlginvoiceHeading').dialog('open').dialog('setTitle','Enter invoiceHeading ');
$('#frminvoiceHeading').form('clear');
 url='add'; 
}

 function editinvoiceHeading(){
 var row=$('#dginvoiceHeading').datagrid('getSelected');
 if(row)
{
 $('#dlginvoiceHeading').dialog('open').dialog('setTitle','Edit invoiceHeading');
 $('#frminvoiceHeading').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteinvoiceHeading(){
 var row=$('#dginvoiceHeading').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dginvoiceHeading').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveinvoiceHeading(){
 saveForm('#frminvoiceHeading',url,'#dlginvoiceHeading','#dginvoiceHeading');
}