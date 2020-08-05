

 function newviewroomocurrance(){
$('#dlgviewroomocurrance').dialog('open').dialog('setTitle','Enter viewroomocurrance ');
$('#frmviewroomocurrance').form('clear');
 url='add'; 
}

 function editviewroomocurrance(){
 var row=$('#dgviewroomocurrance').datagrid('getSelected');
 if(row)
{
 $('#dlgviewroomocurrance').dialog('open').dialog('setTitle','Edit viewroomocurrance');
 $('#frmviewroomocurrance').form('load',row); 
 url='edit/'+row.room;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteviewroomocurrance(){
 var row=$('#dgviewroomocurrance').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.room,{},function(data){ $('#dgviewroomocurrance').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveviewroomocurrance(){
 saveForm('#frmviewroomocurrance',url,'#dlgviewroomocurrance','#dgviewroomocurrance');
}

function findList() {
    var serachOption = $('#searchOpt').datebox('getValue');
    $('#dgviewroomocurrance').datagrid('load', 'viewRoomList/' + serachOption);
}