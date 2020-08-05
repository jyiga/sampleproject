

 function newattkey(){
$('#dlgattkey').dialog('open').dialog('setTitle','Enter attkey ');
$('#frmattkey').form('clear');
 url='add'; 
}

 function editattkey(){
 var row=$('#dgattkey').datagrid('getSelected');
 if(row)
{
 $('#dlgattkey').dialog('open').dialog('setTitle','Edit attkey');
 $('#frmattkey').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteattkey(){
 var row=$('#dgattkey').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgattkey').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveattkey(){
 saveForm('#frmattkey',url,'#dlgattkey','#dgattkey');
}