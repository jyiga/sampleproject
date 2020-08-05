

 function newroomfeature(){
$('#dlgroomfeature').dialog('open').dialog('setTitle','Enter roomfeature ');
$('#frmroomfeature').form('clear');
 url='add'; 
}

 function editroomfeature(){
 var row=$('#dgroomfeature').datagrid('getSelected');
 if(row)
{
 $('#dlgroomfeature').dialog('open').dialog('setTitle','Edit roomfeature');
 $('#frmroomfeature').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteroomfeature(){
 var row=$('#dgroomfeature').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgroomfeature').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

function saveroomfeature(){
    var validForm = $("#feature").val()
    var intTest = new RegExp('[A-Za-z]');
    if( validForm != "" && intTest.test(validForm)){
        saveForm('#frmroomfeature',url,'#dlgroomfeature','#dgroomfeature');
    }else{
        $.messanger.show({
            title: 'Warning!',
            msg: 'Please Fill in All Items',
        });
    }
}