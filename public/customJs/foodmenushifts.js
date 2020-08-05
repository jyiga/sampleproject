

 function newfoodmenushift(){
$('#dlgfoodmenushift').dialog('open').dialog('setTitle','Enter foodmenushift ');
$('#frmfoodmenushift').form('clear');
 url='add'; 
}

 function editfoodmenushift(){
 var row=$('#dgfoodmenushift').datagrid('getSelected');
 if(row)
{
 $('#dlgfoodmenushift').dialog('open').dialog('setTitle','Edit foodmenushift');
 $('#frmfoodmenushift').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletefoodmenushift(){
 var row=$('#dgfoodmenushift').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgfoodmenushift').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savefoodmenushift(){
 saveForm('#frmfoodmenushift',url,'#dlgfoodmenushift','#dgfoodmenushift');
}