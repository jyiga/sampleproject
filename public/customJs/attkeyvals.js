

 function newattkeyval(){
$('#dlgattkeyval').dialog('open').dialog('setTitle','Enter attkeyval ');
$('#frmattkeyval').form('clear');
 url='add'; 
}

 function editattkeyval(){
 var row=$('#dgattkeyval').datagrid('getSelected');
 if(row)
{
 $('#dlgattkeyval').dialog('open').dialog('setTitle','Edit attkeyval');
 $('#frmattkeyval').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteattkeyval(){
 var row=$('#dgattkeyval').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgattkeyval').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveattkeyval(){
 saveForm('#frmattkeyval',url,'#dlgattkeyval','#dgattkeyval');
}