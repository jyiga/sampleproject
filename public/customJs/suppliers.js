

 function newsupplier(){
$('#dlgsupplier').dialog('open').dialog('setTitle','Enter supplier ');
$('#frmsupplier').form('clear');
 url='add'; 
}

 function editsupplier(){
 var row=$('#dgsupplier').datagrid('getSelected');
 if(row)
{
 $('#dlgsupplier').dialog('open').dialog('setTitle','Edit supplier');
 $('#frmsupplier').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletesupplier(){
 var row=$('#dgsupplier').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgsupplier').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savesupplier(){
 saveForm('#frmsupplier',url,'#dlgsupplier','#dgsupplier');
}