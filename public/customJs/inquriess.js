

 function newinquries(){
$('#dlginquries').dialog('open').dialog('setTitle','Enter inquries ');
$('#frminquries').form('clear');
 url='add'; 
}

 function editinquries(){
 var row=$('#dginquries').datagrid('getSelected');
 if(row)
{
 $('#dlginquries').dialog('open').dialog('setTitle','Edit inquries');
 $('#frminquries').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteinquries(){
 var row=$('#dginquries').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dginquries').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveinquries(){
 saveForm('#frminquries',url,'#dlginquries','#dginquries');
}