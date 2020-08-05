

 function newservingshift(){
$('#dlgservingshift').dialog('open').dialog('setTitle','Enter servingshift ');
$('#frmservingshift').form('clear');
 url='add'; 
}

 function editservingshift(){
 var row=$('#dgservingshift').datagrid('getSelected');
 if(row)
{
 $('#dlgservingshift').dialog('open').dialog('setTitle','Edit servingshift');
 $('#frmservingshift').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteservingshift(){
 var row=$('#dgservingshift').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgservingshift').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveservingshift(){
 saveForm('#frmservingshift',url,'#dlgservingshift','#dgservingshift');
}