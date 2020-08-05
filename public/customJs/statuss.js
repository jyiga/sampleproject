

 function newstatus(){
$('#dlgstatus').dialog('open').dialog('setTitle','Enter status ');
$('#frmstatus').form('clear');
 url='add'; 
}

 function editstatus(){
 var row=$('#dgstatus').datagrid('getSelected');
 if(row)
{
 $('#dlgstatus').dialog('open').dialog('setTitle','Edit status');
 $('#frmstatus').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestatus(){
 var row=$('#dgstatus').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstatus').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestatus(){
 saveForm('#frmstatus',url,'#dlgstatus','#dgstatus');
}