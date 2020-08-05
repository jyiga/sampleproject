

 function newcustomerdeliverypoint(){
$('#dlgcustomerdeliverypoint').dialog('open').dialog('setTitle','Enter customerdeliverypoint ');
$('#frmcustomerdeliverypoint').form('clear');
 url='add'; 
}

 function editcustomerdeliverypoint(){
 var row=$('#dgcustomerdeliverypoint').datagrid('getSelected');
 if(row)
{
 $('#dlgcustomerdeliverypoint').dialog('open').dialog('setTitle','Edit customerdeliverypoint');
 $('#frmcustomerdeliverypoint').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletecustomerdeliverypoint(){
 var row=$('#dgcustomerdeliverypoint').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgcustomerdeliverypoint').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savecustomerdeliverypoint(){
 saveForm('#frmcustomerdeliverypoint',url,'#dlgcustomerdeliverypoint','#dgcustomerdeliverypoint');
}