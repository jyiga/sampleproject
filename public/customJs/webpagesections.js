

 function newwebpagesection(){
$('#dlgwebpagesection').dialog('open').dialog('setTitle','Enter webpagesection ');
$('#frmwebpagesection').form('clear');
 url='add'; 
}

 function editwebpagesection(){
 var row=$('#dgwebpagesection').datagrid('getSelected');
 if(row)
{
 $('#dlgwebpagesection').dialog('open').dialog('setTitle','Edit webpagesection');
 $('#frmwebpagesection').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
} 
}

 function deletewebpagesection(){
 var row=$('#dgwebpagesection').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgwebpagesection').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savewebpagesection(){
 saveForm('#frmwebpagesection',url,'#dlgwebpagesection','#dgwebpagesection');
}