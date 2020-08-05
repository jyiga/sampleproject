

 function newdebitor(){
$('#dlgdebitor').dialog('open').dialog('setTitle','Enter debitor ');
$('#frmdebitor').form('clear');
 url='add'; 
}

 function editdebitor(){
 var row=$('#dgdebitor').datagrid('getSelected');
 if(row)
{
 $('#dlgdebitor').dialog('open').dialog('setTitle','Edit debitor');
 $('#frmdebitor').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletedebitor(){
 var row=$('#dgdebitor').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgdebitor').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savedebitor(){
 saveForm('#frmdebitor',url,'#dlgdebitor','#dgdebitor');
}