

 function newtaxinvoice(){
$('#dlgtaxinvoice').dialog('open').dialog('setTitle','Enter taxinvoice ');
$('#frmtaxinvoice').form('clear');
 url='add'; 
}

 function edittaxinvoice(){
 var row=$('#dgtaxinvoice').datagrid('getSelected');
 if(row)
{
 $('#dlgtaxinvoice').dialog('open').dialog('setTitle','Edit taxinvoice');
 $('#frmtaxinvoice').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetaxinvoice(){
 var row=$('#dgtaxinvoice').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtaxinvoice').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetaxinvoice(){
 saveForm('#frmtaxinvoice',url,'#dlgtaxinvoice','#dgtaxinvoice');
}