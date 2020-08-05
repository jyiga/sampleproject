

 function newroominspection(){
$('#dlgroominspection').dialog('open').dialog('setTitle','Enter roominspection ');
$('#frmroominspection').form('clear');
 url='add'; 
}

 function editroominspection(){
 var row=$('#dgroominspection').datagrid('getSelected');
 if(row)
{
 $('#dlgroominspection').dialog('open').dialog('setTitle','Edit roominspection');
 $('#frmroominspection').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteroominspection(){
 var row=$('#dgroominspection').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgroominspection').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveroominspection(){
 saveForm('#frmroominspection',url,'#dlgroominspection','#dgroominspection');
}