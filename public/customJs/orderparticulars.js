

 function neworderparticular(){
$('#dlgorderparticular').dialog('open').dialog('setTitle','Enter orderparticular ');
$('#frmorderparticular').form('clear');
 url='add'; 
}

 function editorderparticular(){
 var row=$('#dgorderparticular').datagrid('getSelected');
 if(row)
{
 $('#dlgorderparticular').dialog('open').dialog('setTitle','Edit orderparticular');
 $('#frmorderparticular').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteorderparticular(){
 var row=$('#dgorderparticular').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgorderparticular').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveorderparticular(){
 saveForm('#frmorderparticular',url,'#dlgorderparticular','#dgorderparticular');
}