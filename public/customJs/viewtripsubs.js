

 function newviewtripsub(){
$('#dlgviewtripsub').dialog('open').dialog('setTitle','Enter viewtripsub ');
$('#frmviewtripsub').form('clear');
 url='add'; 
}

 function editviewtripsub(){
 var row=$('#dgviewtripsub').datagrid('getSelected');
 if(row)
{
 $('#dlgviewtripsub').dialog('open').dialog('setTitle','Edit viewtripsub');
 $('#frmviewtripsub').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteviewtripsub(){
 var row=$('#dgviewtripsub').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgviewtripsub').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveviewtripsub(){
 saveForm('#frmviewtripsub',url,'#dlgviewtripsub','#dgviewtripsub');
}