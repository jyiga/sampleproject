

 function newviewrestaurantsale(){
$('#dlgviewrestaurantsale').dialog('open').dialog('setTitle','Enter viewrestaurantsale ');
$('#frmviewrestaurantsale').form('clear');
 url='add'; 
}

 function editviewrestaurantsale(){
 var row=$('#dgviewrestaurantsale').datagrid('getSelected');
 if(row)
{
 $('#dlgviewrestaurantsale').dialog('open').dialog('setTitle','Edit viewrestaurantsale');
 $('#frmviewrestaurantsale').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteviewrestaurantsale(){
 var row=$('#dgviewrestaurantsale').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgviewrestaurantsale').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveviewrestaurantsale(){
 saveForm('#frmviewrestaurantsale',url,'#dlgviewrestaurantsale','#dgviewrestaurantsale');
}

function findList() {
    var serachOption = $('#searchOpt').datebox('getValue');
    $('#dgviewrestaurantsale').datagrid('load', 'viewRoomList/' + serachOption);
}