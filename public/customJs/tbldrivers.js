

 function newtbldriver(){
$('#dlgtbldriver').dialog('open').dialog('setTitle','Enter tbldriver ');
$('#frmtbldriver').form('clear');
 url='add'; 
}

 function edittbldriver(){
 var row=$('#dgtbldriver').datagrid('getSelected');
 if(row)
{
 $('#dlgtbldriver').dialog('open').dialog('setTitle','Edit tbldriver');
 $('#frmtbldriver').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetbldriver(){
 var row=$('#dgtbldriver').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtbldriver').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetbldriver(){
 saveForm('#frmtbldriver',url,'#dlgtbldriver','#dgtbldriver');
}