

 function newcolumncontent(){
$('#dlgcolumncontent').dialog('open').dialog('setTitle','Enter columncontent ');
$('#frmcolumncontent').form('clear');
 url='add'; 
}

 function editcolumncontent(){
 var row=$('#dgcolumncontent').datagrid('getSelected');
 if(row)
{
 $('#dlgcolumncontent').dialog('open').dialog('setTitle','Edit columncontent');
 $('#frmcolumncontent').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletecolumncontent(){
 var row=$('#dgcolumncontent').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgcolumncontent').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savecolumncontent(){
 saveForm('#frmcolumncontent',url,'#dlgcolumncontent','#dgcolumncontent');
}