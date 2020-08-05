

 function newtest3(){
$('#dlgtest3').dialog('open').dialog('setTitle','Enter test3 ');
$('#frmtest3').form('clear');
 url='add'; 
}

 function edittest3(){
 var row=$('#dgtest3').datagrid('getSelected');
 if(row)
{
 $('#dlgtest3').dialog('open').dialog('setTitle','Edit test3');
 $('#frmtest3').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetest3(){

 var row=$('#dgtest3').datagrid('getSelected');

 if(row)
{
    $.messager.confirm('Warning', 'Are you sure of the the act', function(r){
        if (r){
            $.post('delete/'+row.id,{},function(data){ $('#dgtest3').datagrid('reload');});
        }
    });


}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetest3(){
 saveForm('#frmtest3',url,'#dlgtest3','#dgtest3');
}