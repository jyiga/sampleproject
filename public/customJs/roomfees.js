

 function newroomfee(){
$('#dlgroomfee').dialog('open').dialog('setTitle','Enter roomfee ');
$('#frmroomfee').form('clear');
 url='add'; 
}

 function editroomfee(){
 var row=$('#dgroomfee').datagrid('getSelected');
 if(row)
{
 $('#dlgroomfee').dialog('open').dialog('setTitle','Edit roomfee');
 $('#frmroomfee').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteroomfee(){
 var row=$('#dgroomfee').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgroomfee').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveroomfee(){
 saveForm('#frmroomfee',url,'#dlgroomfee','#dgroomfee');
}