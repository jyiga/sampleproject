

 function newmember(){
$('#dlgmember').dialog('open').dialog('setTitle','Enter member ');
$('#frmmember').form('clear');
 url='add'; 
}

 function editmember(){
 var row=$('#dgmember').datagrid('getSelected');
 if(row)
{
 $('#dlgmember').dialog('open').dialog('setTitle','Edit member');
 $('#frmmember').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletemember(){
 var row=$('#dgmember').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgmember').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savemember(){
 saveForm('#frmmember',url,'#dlgmember','#dgmember');
}