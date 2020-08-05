

 function newhremployeetype(){
$('#dlghremployeetype').dialog('open').dialog('setTitle','Enter hremployeetype ');
$('#frmhremployeetype').form('clear');
 url='add'; 
}

 function edithremployeetype(){
 var row=$('#dghremployeetype').datagrid('getSelected');
 if(row)
{
 $('#dlghremployeetype').dialog('open').dialog('setTitle','Edit hremployeetype');
 $('#frmhremployeetype').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletehremployeetype(){
 var row=$('#dghremployeetype').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dghremployeetype').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savehremployeetype(){
 saveForm('#frmhremployeetype',url,'#dlghremployeetype','#dghremployeetype');
}

