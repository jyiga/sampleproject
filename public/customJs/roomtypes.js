

 function newroomtype(){
$('#dlgroomtype').dialog('open').dialog('setTitle','Enter roomtype ');
$('#frmroomtype').form('clear');
 url='add'; 
}

 function editroomtype(){
 var row=$('#dgroomtype').datagrid('getSelected');
 if(row)
{
 $('#dlgroomtype').dialog('open').dialog('setTitle','Edit roomtype');
 $('#frmroomtype').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteroomtype(){
 var row=$('#dgroomtype').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgroomtype').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveroomtype(){
 saveForm('#frmroomtype',url,'#dlgroomtype','#dgroomtype');
}