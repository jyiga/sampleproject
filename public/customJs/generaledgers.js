

 function newgeneraledger(){
$('#dlggeneraledger').dialog('open').dialog('setTitle','Enter generaledger ');
$('#frmgeneraledger').form('clear');
 url='add'; 
}

 function editgeneraledger(){
 var row=$('#dggeneraledger').datagrid('getSelected');
 if(row)
{
 $('#dlggeneraledger').dialog('open').dialog('setTitle','Edit generaledger');
 $('#frmgeneraledger').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletegeneraledger(){
 var row=$('#dggeneraledger').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dggeneraledger').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savegeneraledger(){
 saveForm('#frmgeneraledger',url,'#dlggeneraledger','#dggeneraledger');
}
