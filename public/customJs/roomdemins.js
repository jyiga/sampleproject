

 function newroomdemin(){
$('#dlgroomdemin').dialog('open').dialog('setTitle','Enter roomdemin ');
$('#frmroomdemin').form('clear');
 url='add'; 
}

 function editroomdemin(){
 var row=$('#dgroomdemin').datagrid('getSelected');
 if(row)
{
 $('#dlgroomdemin').dialog('open').dialog('setTitle','Edit roomdemin');
 $('#frmroomdemin').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteroomdemin(){
 var row=$('#dgroomdemin').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgroomdemin').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveroomdemin(){
 saveForm('#frmroomdemin',url,'#dlgroomdemin','#dgroomdemin');
}