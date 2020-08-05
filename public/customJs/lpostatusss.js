

 function newlpostatuss(){
$('#dlglpostatuss').dialog('open').dialog('setTitle','Enter lpostatuss ');
$('#frmlpostatuss').form('clear');
 url='add'; 
}

 function editlpostatuss(){
 var row=$('#dglpostatuss').datagrid('getSelected');
 if(row)
{
 $('#dlglpostatuss').dialog('open').dialog('setTitle','Edit lpostatuss');
 $('#frmlpostatuss').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletelpostatuss(){
 var row=$('#dglpostatuss').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dglpostatuss').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savelpostatuss(){
 saveForm('#frmlpostatuss',url,'#dlglpostatuss','#dglpostatuss');
}