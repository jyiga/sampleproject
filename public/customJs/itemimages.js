

 function newitemimage(){
$('#dlgitemimage').dialog('open').dialog('setTitle','Enter itemimage ');
$('#frmitemimage').form('clear');
 url='add'; 
}

 function edititemimage(){
 var row=$('#dgitemimage').datagrid('getSelected');
 if(row)
{
 $('#dlgitemimage').dialog('open').dialog('setTitle','Edit itemimage');
 $('#frmitemimage').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteitemimage(){
 var row=$('#dgitemimage').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgitemimage').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveitemimage(){
 saveForm('#frmitemimage',url,'#dlgitemimage','#dgitemimage');
}