

 function newInqurie(){
$('#dlgInqurie').dialog('open').dialog('setTitle','Enter Inqurie ');
$('#frmInqurie').form('clear');
 url='add'; 
}

 function editInqurie(){
 var row=$('#dgInqurie').datagrid('getSelected');
 if(row)
{
 $('#dlgInqurie').dialog('open').dialog('setTitle','Edit Inqurie');
 $('#frmInqurie').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteInqurie(){
 var row=$('#dgInqurie').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgInqurie').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveInqurie(){
 saveForm('#frmInqurie',url,'#dlgInqurie','#dgInqurie');
}