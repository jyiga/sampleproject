

 function newcommissionpost(){
$('#dlgcommissionpost').dialog('open').dialog('setTitle','Enter commissionpost ');
$('#frmcommissionpost').form('clear');
 url='add'; 
}

 function editcommissionpost(){
 var row=$('#dgcommissionpost').datagrid('getSelected');
 if(row)
{
 $('#dlgcommissionpost').dialog('open').dialog('setTitle','Edit commissionpost');
 $('#frmcommissionpost').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletecommissionpost(){
 var row=$('#dgcommissionpost').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgcommissionpost').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savecommissionpost(){
 saveForm('#frmcommissionpost',url,'#dlgcommissionpost','#dgcommissionpost');
}