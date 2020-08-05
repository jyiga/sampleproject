

 function newmou(){
$('#dlgmou').dialog('open').dialog('setTitle','Enter mou ');
$('#frmmou').form('clear');
 url='add'; 
}

 function editmou(){
 var row=$('#dgmou').datagrid('getSelected');
 if(row)
{
 $('#dlgmou').dialog('open').dialog('setTitle','Edit mou');
 $('#frmmou').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletemou(){
 var row=$('#dgmou').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgmou').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savemou(){
 saveForm('#frmmou',url,'#dlgmou','#dgmou');
}