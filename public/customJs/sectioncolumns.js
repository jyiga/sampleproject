

 function newsectioncolumn(){
$('#dlgsectioncolumn').dialog('open').dialog('setTitle','Enter sectioncolumn ');
$('#frmsectioncolumn').form('clear');
 url='add'; 
}

 function editsectioncolumn(){
 var row=$('#dgsectioncolumn').datagrid('getSelected');
 if(row)
{
 $('#dlgsectioncolumn').dialog('open').dialog('setTitle','Edit sectioncolumn');
 $('#frmsectioncolumn').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletesectioncolumn(){
 var row=$('#dgsectioncolumn').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgsectioncolumn').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savesectioncolumn(){
 saveForm('#frmsectioncolumn',url,'#dlgsectioncolumn','#dgsectioncolumn');
}