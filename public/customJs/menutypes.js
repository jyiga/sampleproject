

 function newmenutype(){
$('#dlgmenutype').dialog('open').dialog('setTitle','Enter menutype ');
$('#frmmenutype').form('clear');
 url='add'; 
}

 function editmenutype(){
 var row=$('#dgmenutype').datagrid('getSelected');
 if(row)
{
 $('#dlgmenutype').dialog('open').dialog('setTitle','Edit menutype');
 $('#frmmenutype').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletemenutype(){
 var row=$('#dgmenutype').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgmenutype').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savemenutype(){
 saveForm('#frmmenutype',url,'#dlgmenutype','#dgmenutype');
}