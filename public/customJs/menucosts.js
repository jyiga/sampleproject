

 function newmenucost(){
$('#dlgmenucost').dialog('open').dialog('setTitle','Enter menucost ');
$('#frmmenucost').form('clear');
 url='add'; 
}

 function editmenucost(){
 var row=$('#dgmenucost').datagrid('getSelected');
 if(row)
{
 $('#dlgmenucost').dialog('open').dialog('setTitle','Edit menucost');
 $('#frmmenucost').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletemenucost(){
 var row=$('#dgmenucost').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgmenucost').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savemenucost(){
 saveForm('#frmmenucost',url,'#dlgmenucost','#dgmenucost');
}