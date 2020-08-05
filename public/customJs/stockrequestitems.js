

 function newstockrequestitem(){
$('#dlgstockrequestitem').dialog('open').dialog('setTitle','Enter stockrequestitem ');
$('#frmstockrequestitem').form('clear');
 url='add'; 
}

 function editstockrequestitem(){
 var row=$('#dgstockrequestitem').datagrid('getSelected');
 if(row)
{
 $('#dlgstockrequestitem').dialog('open').dialog('setTitle','Edit stockrequestitem');
 $('#frmstockrequestitem').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestockrequestitem(){
 var row=$('#dgstockrequestitem').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstockrequestitem').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestockrequestitem(){
 saveForm('#frmstockrequestitem',url,'#dlgstockrequestitem','#dgstockrequestitem');
}