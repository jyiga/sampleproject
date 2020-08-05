

 function newministry(){
$('#dlgministry').dialog('open').dialog('setTitle','Enter ministry ');
$('#frmministry').form('clear');
 url='add'; 
}

 function editministry(){
 var row=$('#dgministry').datagrid('getSelected');
 if(row)
{
 $('#dlgministry').dialog('open').dialog('setTitle','Edit ministry');
 $('#frmministry').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteministry(){
 var row=$('#dgministry').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgministry').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveministry(){
 saveForm('#frmministry',url,'#dlgministry','#dgministry');
}