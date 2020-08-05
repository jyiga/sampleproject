

 function newstockissue(){
$('#dlgstockissue').dialog('open').dialog('setTitle','Enter stockissue ');
$('#frmstockissue').form('clear');
 url='add'; 
}

 function editstockissue(){
 var row=$('#dgstockissue').datagrid('getSelected');
 if(row)
{
 $('#dlgstockissue').dialog('open').dialog('setTitle','Edit stockissue');
 $('#frmstockissue').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestockissue(){
 var row=$('#dgstockissue').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstockissue').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestockissue(){
 saveForm('#frmstockissue',url,'#dlgstockissue','#dgstockissue');
}