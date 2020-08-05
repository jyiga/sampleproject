

 function newstockcountsheetitems(){
$('#dlgstockcountsheetitems').dialog('open').dialog('setTitle','Enter stockcountsheetitems ');
$('#frmstockcountsheetitems').form('clear');
 url='add'; 
}

 function editstockcountsheetitems(){
 var row=$('#dgstockcountsheetitems').datagrid('getSelected');
 if(row)
{
 $('#dlgstockcountsheetitems').dialog('open').dialog('setTitle','Edit stockcountsheetitems');
 $('#frmstockcountsheetitems').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestockcountsheetitems(){
 var row=$('#dgstockcountsheetitems').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstockcountsheetitems').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestockcountsheetitems(){
 saveForm('#frmstockcountsheetitems',url,'#dlgstockcountsheetitems','#dgstockcountsheetitems');
}