

 function newtblodometer(){
$('#dlgtblodometer').dialog('open').dialog('setTitle','Enter tblodometer ');
$('#frmtblodometer').form('clear');
 url='add'; 
}

 function edittblodometer(){
 var row=$('#dgtblodometer').datagrid('getSelected');
 if(row)
{
 $('#dlgtblodometer').dialog('open').dialog('setTitle','Edit tblodometer');
 $('#frmtblodometer').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetblodometer(){
 var row=$('#dgtblodometer').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtblodometer').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetblodometer(){
 saveForm('#frmtblodometer',url,'#dlgtblodometer','#dgtblodometer');
}