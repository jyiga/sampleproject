

 function newitemtemplates(){
$('#dlgitemtemplates').dialog('open').dialog('setTitle','Enter itemtemplates ');
$('#frmitemtemplates').form('clear');
 url='add'; 
}

 function edititemtemplates(){
 var row=$('#dgitemtemplates').datagrid('getSelected');
 if(row)
{
 $('#dlgitemtemplates').dialog('open').dialog('setTitle','Edit itemtemplates');
 $('#frmitemtemplates').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteitemtemplates(){
 var row=$('#dgitemtemplates').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgitemtemplates').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveitemtemplates(){
 saveForm('#frmitemtemplates',url,'#dlgitemtemplates','#dgitemtemplates');
}