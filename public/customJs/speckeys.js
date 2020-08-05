

 function newspeckey(){
$('#dlgspeckey').dialog('open').dialog('setTitle','Enter speckey ');
$('#frmspeckey').form('clear');
 url='add'; 
}

 function editspeckey(){
 var row=$('#dgspeckey').datagrid('getSelected');
 if(row)
{
 $('#dlgspeckey').dialog('open').dialog('setTitle','Edit speckey');
 $('#frmspeckey').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletespeckey(){
 var row=$('#dgspeckey').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgspeckey').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savespeckey(){
 saveForm('#frmspeckey',url,'#dlgspeckey','#dgspeckey');
}