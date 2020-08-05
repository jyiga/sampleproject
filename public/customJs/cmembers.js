

 function newcmember(){
$('#dlgcmember').dialog('open').dialog('setTitle','Enter Member Information ');
$('#frmcmember').form('clear');
 url='add'; 
}

 function editcmember(){
 var row=$('#dgcmember').datagrid('getSelected');
 if(row)
{
 $('#dlgcmember').dialog('open').dialog('setTitle','Edit Member Information');
 $('#frmcmember').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a memebr to edit'});} 
}

 function deletecmember(){
 var row=$('#dgcmember').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of this act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgcmember').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a member to  Delete'});} 
}

 function savecmember(){
 saveForm('#frmcmember',url,'#dlgcmember','#dgcmember');
}