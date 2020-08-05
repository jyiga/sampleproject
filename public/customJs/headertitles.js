

 function newheadertitle(){
$('#dlgheadertitle').dialog('open').dialog('setTitle','Enter headertitle ');
$('#frmheadertitle').form('clear');
 url='add'; 
}

 function editheadertitle(){
 var row=$('#dgheadertitle').datagrid('getSelected');
 if(row)
{
 $('#dlgheadertitle').dialog('open').dialog('setTitle','Edit headertitle');
 $('#frmheadertitle').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteheadertitle(){
 var row=$('#dgheadertitle').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgheadertitle').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveheadertitle(){
 saveForm('#frmheadertitle',url,'#dlgheadertitle','#dgheadertitle');
}