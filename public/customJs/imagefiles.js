

 function newimagefile(){
$('#dlgimagefile').dialog('open').dialog('setTitle','Enter imagefile ');
$('#frmimagefile').form('clear');
 url='add'; 
}

 function editimagefile(){
 var row=$('#dgimagefile').datagrid('getSelected');
 if(row)
{
 $('#dlgimagefile').dialog('open').dialog('setTitle','Edit imagefile');
 $('#frmimagefile').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteimagefile(){
 var row=$('#dgimagefile').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgimagefile').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveimagefile(){
 saveForm('#frmimagefile',url,'#dlgimagefile','#dgimagefile');
}