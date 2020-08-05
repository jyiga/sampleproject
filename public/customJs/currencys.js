

 function newcurrency(){
$('#dlgcurrency').dialog('open').dialog('setTitle','Enter currency ');
$('#frmcurrency').form('clear');
 url='add'; 
}

 function editcurrency(){
 var row=$('#dgcurrency').datagrid('getSelected');
 if(row)
{
 $('#dlgcurrency').dialog('open').dialog('setTitle','Edit currency');
 $('#frmcurrency').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletecurrency(){
 var row=$('#dgcurrency').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgcurrency').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savecurrency(){
 saveForm('#frmcurrency',url,'#dlgcurrency','#dgcurrency');
}