

 function newingrdient(){
$('#dlgingrdient').dialog('open').dialog('setTitle','Enter ingrdient ');
$('#frmingrdient').form('clear');
 url='add'; 
}

 function editingrdient(){
 var row=$('#dgingrdient').datagrid('getSelected');
 if(row)
{
 $('#dlgingrdient').dialog('open').dialog('setTitle','Edit ingrdient');
 $('#frmingrdient').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteingrdient(){
 var row=$('#dgingrdient').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgingrdient').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveingrdient(){
 saveForm('#frmingrdient',url,'#dlgingrdient','#dgingrdient');
}