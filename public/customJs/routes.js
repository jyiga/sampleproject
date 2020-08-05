

 function newroute(){
$('#dlgroute').dialog('open').dialog('setTitle','Enter route ');
$('#frmroute').form('clear');
 url='add'; 
}

 function editroute(){
 var row=$('#dgroute').datagrid('getSelected');
 if(row)
{
 $('#dlgroute').dialog('open').dialog('setTitle','Edit route');
 $('#frmroute').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteroute(){
 var row=$('#dgroute').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgroute').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveroute(){
 saveForm('#frmroute',url,'#dlgroute','#dgroute');
}