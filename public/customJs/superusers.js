

 function newsuperuser(){
$('#dlgsuperuser').dialog('open').dialog('setTitle','Enter superuser ');
$('#frmsuperuser').form('clear');
 url='add'; 
}

 function editsuperuser(){
 var row=$('#dgsuperuser').datagrid('getSelected');
 if(row)
{
 $('#dlgsuperuser').dialog('open').dialog('setTitle','Edit superuser');
 $('#frmsuperuser').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletesuperuser(){
 var row=$('#dgsuperuser').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgsuperuser').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savesuperuser(){
 saveForm('#frmsuperuser',url,'#dlgsuperuser','#dgsuperuser');
}