

 function newservicetype(){
$('#dlgservicetype').dialog('open').dialog('setTitle','Enter servicetype ');
$('#frmservicetype').form('clear');
 url='add'; 
}

 function editservicetype(){
 var row=$('#dgservicetype').datagrid('getSelected');
 if(row)
{
 $('#dlgservicetype').dialog('open').dialog('setTitle','Edit servicetype');
 $('#frmservicetype').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteservicetype(){
 var row=$('#dgservicetype').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgservicetype').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveservicetype(){
 saveForm('#frmservicetype',url,'#dlgservicetype','#dgservicetype');
}