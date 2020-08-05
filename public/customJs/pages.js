

 function newpage(){
$('#dlgpage').dialog('open').dialog('setTitle','Enter page ');
$('#frmpage').form('clear');
 url='add'; 
}

 function editpage(){
 var row=$('#dgpage').datagrid('getSelected');
 if(row)
{
 $('#dlgpage').dialog('open').dialog('setTitle','Edit page');
 $('#frmpage').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletepage(){
 var row=$('#dgpage').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgpage').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savepage(){
 saveForm('#frmpage',url,'#dlgpage','#dgpage');
}
