

 function newviewbookreport(){
$('#dlgviewbookreport').dialog('open').dialog('setTitle','Enter viewbookreport ');
$('#frmviewbookreport').form('clear');
 url='add'; 
}

 function editviewbookreport(){
 var row=$('#dgviewbookreport').datagrid('getSelected');
 if(row)
{
 $('#dlgviewbookreport').dialog('open').dialog('setTitle','Edit viewbookreport');
 $('#frmviewbookreport').form('load',row); 
 url='edit/'+row.room_no;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteviewbookreport(){
 var row=$('#dgviewbookreport').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.room_no,{},function(data){ $('#dgviewbookreport').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveviewbookreport(){
 saveForm('#frmviewbookreport',url,'#dlgviewbookreport','#dgviewbookreport');
}

///AML 2019-05-20
function findBookList() {
    var serachOption2 = $('#searchOpt2').datebox('getValue');
    $('#dgviewbookreport').datagrid('load', 'viewBookList/' + serachOption2);
}