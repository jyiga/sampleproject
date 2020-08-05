

 function newtest(){
$('#dlgtest').dialog('open').dialog('setTitle','Enter test ');
$('#frmtest').form('clear');
 url='add'; 
}

 function edittest(){
 var row=$('#dgtest').datagrid('getSelected');
 if(row)
{
 $('#dlgtest').dialog('open').dialog('setTitle','Edit test');
 $('#frmtest').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetest(){
 var row=$('#dgtest').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtest').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetest(){
 saveForm('#frmtest',url,'#dlgtest','#dgtest');
}