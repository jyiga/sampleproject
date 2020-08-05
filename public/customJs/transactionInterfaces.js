

 function newtransactionInterface(){
$('#dlgtransactionInterface').dialog('open').dialog('setTitle','Enter transactionInterface ');
$('#frmtransactionInterface').form('clear');
 url='add'; 
}

 function edittransactionInterface(){
 var row=$('#dgtransactionInterface').datagrid('getSelected');
 if(row)
{
 $('#dlgtransactionInterface').dialog('open').dialog('setTitle','Edit transactionInterface');
 $('#frmtransactionInterface').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetransactionInterface(){
 var row=$('#dgtransactionInterface').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtransactionInterface').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetransactionInterface(){
 saveForm('#frmtransactionInterface',url,'#dlgtransactionInterface','#dgtransactionInterface');
}