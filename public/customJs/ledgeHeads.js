

 function newledgeHead(){
$('#dlgledgeHead').dialog('open').dialog('setTitle','Enter ledgeHead ');
$('#frmledgeHead').form('clear');
 url='add'; 
}

 function editledgeHead(){
 var row=$('#dgledgeHead').datagrid('getSelected');
 if(row)
{
 $('#dlgledgeHead').dialog('open').dialog('setTitle','Edit ledgeHead');
 $('#frmledgeHead').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteledgeHead(){
 var row=$('#dgledgeHead').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgledgeHead').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveledgeHead(){
 saveForm('#frmledgeHead',url,'#dlgledgeHead','#dgledgeHead');
}