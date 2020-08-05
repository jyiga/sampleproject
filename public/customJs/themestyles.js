

 function newthemestyle(){
$('#dlgthemestyle').dialog('open').dialog('setTitle','Enter themestyle ');
$('#frmthemestyle').form('clear');
 url='add'; 
}

 function editthemestyle(){
 var row=$('#dgthemestyle').datagrid('getSelected');
 if(row)
{
 $('#dlgthemestyle').dialog('open').dialog('setTitle','Edit themestyle');
 $('#frmthemestyle').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletethemestyle(){
 var row=$('#dgthemestyle').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgthemestyle').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savethemestyle(){
 saveForm('#frmthemestyle',url,'#dlgthemestyle','#dgthemestyle');
}