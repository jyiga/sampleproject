

 function newfinancialYear(){
$('#dlgfinancialYear').dialog('open').dialog('setTitle','Enter financialYear ');
$('#frmfinancialYear').form('clear');
 url='add'; 
}

 function editfinancialYear(){
 var row=$('#dgfinancialYear').datagrid('getSelected');
 if(row)
{
 $('#dlgfinancialYear').dialog('open').dialog('setTitle','Edit financialYear');
 $('#frmfinancialYear').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletefinancialYear(){
 var row=$('#dgfinancialYear').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgfinancialYear').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savefinancialYear(){
 saveForm('#frmfinancialYear',url,'#dlgfinancialYear','#dgfinancialYear');
}