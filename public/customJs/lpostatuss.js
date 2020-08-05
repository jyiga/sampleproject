

 function newlpostatus(){
$('#dlglpostatus').dialog('open').dialog('setTitle','Enter lpostatus ');
$('#frmlpostatus').form('clear');
 url='add'; 
}

 function editlpostatus(){
 var row=$('#dglpostatus').datagrid('getSelected');
 if(row)
{
 $('#dlglpostatus').dialog('open').dialog('setTitle','Edit lpostatus');
 $('#frmlpostatus').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletelpostatus(){
 var row=$('#dglpostatus').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dglpostatus').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savelpostatus(){
 saveForm('#frmlpostatus',url,'#dlglpostatus','#dglpostatus');
}