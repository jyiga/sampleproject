

 function newthemefile(){
$('#dlgthemefile').dialog('open').dialog('setTitle','Enter themefile ');
$('#frmthemefile').form('clear');
 url='add'; 
}

 function editthemefile(){
 var row=$('#dgthemefile').datagrid('getSelected');
 if(row)
{
 $('#dlgthemefile').dialog('open').dialog('setTitle','Edit themefile');
 $('#frmthemefile').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletethemefile(){
 var row=$('#dgthemefile').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgthemefile').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savethemefile(){
 saveForm('#frmthemefile',url,'#dlgthemefile','#dgthemefile');
}