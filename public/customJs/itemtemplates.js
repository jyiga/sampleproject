

 function newitemtemplate(){
$('#dlgitemtemplate').dialog('open').dialog('setTitle','Enter itemtemplate ');
$('#frmitemtemplate').form('clear');
 url='add'; 
}

 function edititemtemplate(){
 var row=$('#dgitemtemplate').datagrid('getSelected');
 if(row)
{
 $('#dlgitemtemplate').dialog('open').dialog('setTitle','Edit itemtemplate');
 $('#frmitemtemplate').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteitemtemplate(){
 var row=$('#dgitemtemplate').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgitemtemplate').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveitemtemplate(){
 saveForm('#frmitemtemplate',url,'#dlgitemtemplate','#dgitemtemplate');
}