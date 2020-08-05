

 function newtblodmeterreading(){
$('#dlgtblodmeterreading').dialog('open').dialog('setTitle','Enter tblodmeterreading ');
$('#frmtblodmeterreading').form('clear');
 url='add'; 
}

 function edittblodmeterreading(){
 var row=$('#dgtblodmeterreading').datagrid('getSelected');
 if(row)
{
 $('#dlgtblodmeterreading').dialog('open').dialog('setTitle','Edit tblodmeterreading');
 $('#frmtblodmeterreading').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetblodmeterreading(){
 var row=$('#dgtblodmeterreading').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtblodmeterreading').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetblodmeterreading(){
 saveForm('#frmtblodmeterreading',url,'#dlgtblodmeterreading','#dgtblodmeterreading');
}