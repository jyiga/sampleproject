

 function newindividualAccount(){
$('#dlgindividualAccount').dialog('open').dialog('setTitle','Enter individualAccount ');
$('#frmindividualAccount').form('clear');
 url='add'; 
}

 function editindividualAccount(){
 var row=$('#dgindividualAccount').datagrid('getSelected');
 if(row)
{
 $('#dlgindividualAccount').dialog('open').dialog('setTitle','Edit individualAccount');
 $('#frmindividualAccount').form('load',row); 
 url='edit/'+row.Id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteindividualAccount(){
 var row=$('#dgindividualAccount').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.Id,{},function(data){ $('#dgindividualAccount').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveindividualAccount(){
 saveForm('#frmindividualAccount',url,'#dlgindividualAccount','#dgindividualAccount');
}