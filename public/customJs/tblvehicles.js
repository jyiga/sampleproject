

 function newtblvehicle(){
$('#dlgtblvehicle').dialog('open').dialog('setTitle','Enter tblvehicle ');
$('#frmtblvehicle').form('clear');
 url='add'; 
}

 function edittblvehicle(){
 var row=$('#dgtblvehicle').datagrid('getSelected');
 if(row)
{
 $('#dlgtblvehicle').dialog('open').dialog('setTitle','Edit tblvehicle');
 $('#frmtblvehicle').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetblvehicle(){
 var row=$('#dgtblvehicle').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtblvehicle').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetblvehicle(){
 saveForm('#frmtblvehicle',url,'#dlgtblvehicle','#dgtblvehicle');
}