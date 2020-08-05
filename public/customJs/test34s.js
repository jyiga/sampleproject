

 function newtest34(){
$('#dlgtest34').dialog('open').dialog('setTitle','Enter test34 ');
$('#frmtest34').form('clear');
 url='add'; 
}

 function edittest34(){
 var row=$('#dgtest34').datagrid('getSelected');
 if(row)
{
 $('#dlgtest34').dialog('open').dialog('setTitle','Edit test34');
 $('#frmtest34').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetest34(){
 var row=$('#dgtest34').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtest34').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetest34(){
 saveForm('#frmtest34',url,'#dlgtest34','#dgtest34');
}