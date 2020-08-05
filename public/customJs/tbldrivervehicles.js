

 function newtbldrivervehicle(){
$('#dlgtbldrivervehicle').dialog('open').dialog('setTitle','Enter tbldrivervehicle ');
$('#frmtbldrivervehicle').form('clear');
 url='add'; 
}

 function edittbldrivervehicle(){
 var row=$('#dgtbldrivervehicle').datagrid('getSelected');
 if(row)
{
 $('#dlgtbldrivervehicle').dialog('open').dialog('setTitle','Edit tbldrivervehicle');
 $('#frmtbldrivervehicle').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetbldrivervehicle(){
 var row=$('#dgtbldrivervehicle').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtbldrivervehicle').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetbldrivervehicle(){
 saveForm('#frmtbldrivervehicle',url,'#dlgtbldrivervehicle','#dgtbldrivervehicle');
}