

 function newattention(){
$('#dlgattention').dialog('open').dialog('setTitle','Enter attention ');
$('#frmattention').form('clear');
 url='add'; 
}

 function editattention(){
 var row=$('#dgattention').datagrid('getSelected');
 if(row)
{
 $('#dlgattention').dialog('open').dialog('setTitle','Edit attention');
 $('#frmattention').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteattention(){
 var row=$('#dgattention').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgattention').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveattention(){
 saveForm('#frmattention',url,'#dlgattention','#dgattention');
}