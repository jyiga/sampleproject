

 function newcategorypge(){
$('#dlgcategorypge').dialog('open').dialog('setTitle','Enter categorypge ');
$('#frmcategorypge').form('clear');
 url='add'; 
}

 function editcategorypge(){
 var row=$('#dgcategorypge').datagrid('getSelected');
 if(row)
{
 $('#dlgcategorypge').dialog('open').dialog('setTitle','Edit categorypge');
 $('#frmcategorypge').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletecategorypge(){
 var row=$('#dgcategorypge').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgcategorypge').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savecategorypge(){
 saveForm('#frmcategorypge',url,'#dlgcategorypge','#dgcategorypge');
}