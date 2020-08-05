

 function newbus(){
$('#dlgbus').dialog('open').dialog('setTitle','Enter bus ');
$('#frmbus').form('clear');
 url='add'; 
}

 function editbus(){
 var row=$('#dgbus').datagrid('getSelected');
 if(row)
{
 $('#dlgbus').dialog('open').dialog('setTitle','Edit bus');
 $('#frmbus').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletebus(){
 var row=$('#dgbus').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgbus').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savebus(){
 saveForm('#frmbus',url,'#dlgbus','#dgbus');
}