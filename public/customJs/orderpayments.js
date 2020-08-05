

 function neworderpayment(){
$('#dlgorderpayment').dialog('open').dialog('setTitle','Enter orderpayment ');
$('#frmorderpayment').form('clear');
 url='add'; 
}

 function editorderpayment(){
 var row=$('#dgorderpayment').datagrid('getSelected');
 if(row)
{
 $('#dlgorderpayment').dialog('open').dialog('setTitle','Edit orderpayment');
 $('#frmorderpayment').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteorderpayment(){
 var row=$('#dgorderpayment').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgorderpayment').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveorderpayment(){
 saveForm('#frmorderpayment',url,'#dlgorderpayment','#dgorderpayment');
}