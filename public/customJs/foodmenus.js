

 function newfoodmenu(){
$('#dlgfoodmenu').dialog('open').dialog('setTitle','Enter foodmenu ');
$('#frmfoodmenu').form('clear');
 url='add'; 
}

 function editfoodmenu(){
 var row=$('#dgfoodmenu').datagrid('getSelected');
 if(row)
{
 $('#dlgfoodmenu').dialog('open').dialog('setTitle','Edit foodmenu');
 $('#frmfoodmenu').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletefoodmenu(){
 var row=$('#dgfoodmenu').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgfoodmenu').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savefoodmenu(){
     if(url=='add')
     {
         $.messager.progess();
         var fd =new FormData();
         var files=$('#pic')[0].files[0];
         var menuTypeId=$('#menuTypeId').combobox('getValue');
         var foodName=$('#foodName').val();
         var stockId=$('#stockId').combobox('getValue');
         var discount=$('#discount').val();
         var available=$('#available').val();
         var cost=$('#cost').val();
         fd.append('file',files);
         fd.append('menuTypeId',menuTypeId);
         fd.append('foodName',foodName);
         fd.append('stockId',stockId);
         fd.append('discount',discount);
         fd.append('available',available);
         fd.append('cost',cost);

         $.ajax({
             url:'../foodmenus/add',
             type:'post',
             data:fd,
             contentType:false,
             processData:false,
             success:function(respond)
             {
                 var respondData=$.parseJSON(respond);
                 if(respondData.msg)
                 {
                     $.messager.show('Title',respondData.msg);
                 }else
                 {
                     $.messager.show({title: 'Info',
                         msg: 'successfully completed'});
                     $('#dlgmenu').dialog('close');
                     $('#dgmenu').datagrid('reload'); // close the dialog
                     // reload the user
                 }

             },
             dataType:'json'
         })

     }else
     {

     }

 }