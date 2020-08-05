

 function newtablenumber(){
$('#dlgtablenumber').dialog('open').dialog('setTitle','Enter tablenumber ');
$('#frmtablenumber').form('clear');
 url='add'; 
}

 function edittablenumber(){
 var row=$('#dgtablenumber').datagrid('getSelected');
 if(row)
{
 $('#dlgtablenumber').dialog('open').dialog('setTitle','Edit tablenumber');
 $('#frmtablenumber').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetablenumber(){
 var row=$('#dgtablenumber').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtablenumber').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetablenumber(){
 saveForm('#frmtablenumber',url,'#dlgtablenumber','#dgtablenumber');
}