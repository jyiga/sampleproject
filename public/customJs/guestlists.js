

 function newguestlist(){
$('#dlgguestlist').dialog('open').dialog('setTitle','Enter guestlist ');
$('#frmguestlist').form('clear');
 url='add'; 
}

 function editguestlist(){
 var row=$('#dgguestlist').datagrid('getSelected');
 if(row)
{
 $('#dlgguestlist').dialog('open').dialog('setTitle','Edit guestlist');
 $('#frmguestlist').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteguestlist(){
 var row=$('#dgguestlist').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgguestlist').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveguestlist(){
 saveForm('#frmguestlist',url,'#dlgguestlist','#dgguestlist');
}