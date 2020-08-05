

 function newpages(){
$('#dlgpages').dialog('open').dialog('setTitle','Enter pages ');
$('#frmpages').form('clear');
 url='add'; 
}

 function editpages(){
 var row=$('#dgpages').datagrid('getSelected');
 if(row)
{
 $('#dlgpages').dialog('open').dialog('setTitle','Edit pages');
 $('#frmpages').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletepages(){
 var row=$('#dgpages').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgpages').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savepages(){
 saveForm('#frmpages',url,'#dlgpages','#dgpages');
}