

 function newguest(){
$('#dlgguest').dialog('open').dialog('setTitle','Enter guest ');
$('#frmguest').form('clear');
 url='add'; 
}

 function editguest(){
 var row=$('#dgguest').datagrid('getSelected');
 if(row)
{
 $('#dlgguest').dialog('open').dialog('setTitle','Edit guest');
 $('#frmguest').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteguest(){
 var row=$('#dgguest').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgguest').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveguest(){
 saveForm('#frmguest',url,'#dlgguest','#dgguest');
}