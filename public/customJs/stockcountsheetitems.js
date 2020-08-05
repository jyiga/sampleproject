

 function newstockcountsheetitem(){
$('#dlgstockcountsheetitem').dialog('open').dialog('setTitle','Enter stockcountsheetitem ');
$('#frmstockcountsheetitem').form('clear');
 url='add'; 
}

 function editstockcountsheetitem(){
 var row=$('#dgstockcountsheetitem').datagrid('getSelected');
 if(row)
{
 $('#dlgstockcountsheetitem').dialog('open').dialog('setTitle','Edit stockcountsheetitem');
 $('#frmstockcountsheetitem').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestockcountsheetitem(){
 var row=$('#dgstockcountsheetitem').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstockcountsheetitem').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestockcountsheetitem(){
 saveForm('#frmstockcountsheetitem',url,'#dlgstockcountsheetitem','#dgstockcountsheetitem');
}