

 function newviewbookingreport(){
$('#dlgviewbookingreport').dialog('open').dialog('setTitle','Enter viewbookingreport ');
$('#frmviewbookingreport').form('clear');
 url='add'; 
}

 function editviewbookingreport(){
 var row=$('#dgviewbookingreport').datagrid('getSelected');
 if(row)
{
 $('#dlgviewbookingreport').dialog('open').dialog('setTitle','Edit viewbookingreport');
 $('#frmviewbookingreport').form('load',row); 
 url='edit/'+row.room_no;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteviewbookingreport(){
 var row=$('#dgviewbookingreport').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.room_no,{},function(data){ $('#dgviewbookingreport').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveviewbookingreport(){
 saveForm('#frmviewbookingreport',url,'#dlgviewbookingreport','#dgviewbookingreport');
}