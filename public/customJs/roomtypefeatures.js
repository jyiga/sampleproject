

 function newroomtypefeature(){
$('#dlgroomtypefeature').dialog('open').dialog('setTitle','Enter roomtypefeature ');
$('#frmroomtypefeature').form('clear');
 url='add'; 
}

 function editroomtypefeature(){
 var row=$('#dgroomtypefeature').datagrid('getSelected');
 if(row)
{
 $('#dlgroomtypefeature').dialog('open').dialog('setTitle','Edit roomtypefeature');
 $('#frmroomtypefeature').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteroomtypefeature(){
 var row=$('#dgroomtypefeature').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgroomtypefeature').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveroomtypefeature(){
 saveForm('#frmroomtypefeature',url,'#dlgroomtypefeature','#dgroomtypefeature');
}