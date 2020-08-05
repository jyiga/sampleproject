

 function newsuppliers(){
$('#dlgsuppliers').dialog('open').dialog('setTitle','Enter suppliers ');
$('#frmsuppliers').form('clear');
 url='add'; 
}

 function editsuppliers(){
 var row=$('#dgsuppliers').datagrid('getSelected');
 if(row)
{
 $('#dlgsuppliers').dialog('open').dialog('setTitle','Edit suppliers');
 $('#frmsuppliers').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletesuppliers(){
 var row=$('#dgsuppliers').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgsuppliers').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savesuppliers(){
 saveForm('#frmsuppliers',url,'#dlgsuppliers','#dgsuppliers');
}