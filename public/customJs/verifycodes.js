

 function newverifycode(){
$('#dlgverifycode').dialog('open').dialog('setTitle','Enter verifycode ');
$('#frmverifycode').form('clear');
 url='add'; 
}

 function editverifycode(){
 var row=$('#dgverifycode').datagrid('getSelected');
 if(row)
{
 $('#dlgverifycode').dialog('open').dialog('setTitle','Edit verifycode');
 $('#frmverifycode').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteverifycode(){
 var row=$('#dgverifycode').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgverifycode').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveverifycode(){
 saveForm('#frmverifycode',url,'#dlgverifycode','#dgverifycode');
}