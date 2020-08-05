

 function newtest2(){
$('#dlgtest2').dialog('open').dialog('setTitle','Enter test2 ');
$('#frmtest2').form('clear');
 url='add'; 
}

 function edittest2(){
 var row=$('#dgtest2').datagrid('getSelected');
 if(row)
{
 $('#dlgtest2').dialog('open').dialog('setTitle','Edit test2');
 $('#frmtest2').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetest2(){
 var row=$('#dgtest2').datagrid('getSelected');
 if(row)
{
$.post('delete/'+row.id,{},function(data){ $('#dgtest2').datagrid('reload');});
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetest2(){
 saveForm('#frmtest2',url,'#dlgtest2','#dgtest2');
}