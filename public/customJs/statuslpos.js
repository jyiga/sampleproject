

 function newstatuslpo(){
$('#dlgstatuslpo').dialog('open').dialog('setTitle','Enter statuslpo ');
$('#frmstatuslpo').form('clear');
getSelected()
 url='add'; 
}

 function editstatuslpo(){
 var row=$('#dgstatuslpo').datagrid('getSelected');
 if(row)
{
 $('#dlgstatuslpo').dialog('open').dialog('setTitle','Edit statuslpo');
 $('#frmstatuslpo').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestatuslpo(){
 var row=$('#dgstatuslpo').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstatuslpo').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestatuslpo(){
 saveForm('#frmstatuslpo',url,'#dlgstatuslpo','#dgstatuslpo');
}


 function getSelected() {
     var row = $('#dg').datagrid('getSelected');
     var id = row.itemid;
     $.post("getSelected", {}, function (data) {
         var data2 = $.parseJSON(data);
         $('#id').val(data2.countNo);
         // if (row){
         //     $.messager.alert('Info', row.itemid+":"+row.productid+":"+row.attr1);
         // }
         preparestatuslpo();
     })
 }

     function preparestatuslpo() {
         //var id = $('#id').val();
         var id=$('#id').val();
         //prepare_fuelOrder();
         $('#dgstatuslpo').datagrid({
             url: '../lpoitems/viewall/'+id,
             // saveUrl: '../lpoitems/add/'+id,
             // updateUrl: '../lpoitems/edit/'+id,
             // destroyUrl:'../lpoitems/delete/',
             onSuccess:function()
             {
                 $('#dglpoItem').datagrid('reload');
             }

         });
     }

