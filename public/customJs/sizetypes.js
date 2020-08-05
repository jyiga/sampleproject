

 function newsizetype(){
$('#dlgsizetype').dialog('open').dialog('setTitle','Enter sizetype ');
$('#frmsizetype').form('clear');
 url='add'; 
}

 function editsizetype(){
 var row=$('#dgsizetype').datagrid('getSelected');
 if(row)
{
 $('#dlgsizetype').dialog('open').dialog('setTitle','Edit sizetype');
 $('#frmsizetype').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletesizetype(){
 var row=$('#dgsizetype').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgsizetype').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savesizetype(){
 saveForm('#frmsizetype',url,'#dlgsizetype','#dgsizetype');
}