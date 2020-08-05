

 function newhrPosition(){
$('#dlghrPosition').dialog('open').dialog('setTitle','Enter hrPosition ');
$('#frmhrPosition').form('clear');
 url='add'; 
}

 function edithrPosition(){
 var row=$('#dghrPosition').datagrid('getSelected');
 if(row)
{
 $('#dlghrPosition').dialog('open').dialog('setTitle','Edit hrPosition');
 $('#frmhrPosition').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletehrPosition(){
 var row=$('#dghrPosition').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dghrPosition').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savehrPosition(){
 saveForm('#frmhrPosition',url,'#dlghrPosition','#dghrPosition');
}