

 function newpurchasenotification(){
$('#dlgpurchasenotification').dialog('open').dialog('setTitle','Enter purchasenotification ');
$('#frmpurchasenotification').form('clear');
 url='add'; 
}

 function editpurchasenotification(){
 var row=$('#dgpurchasenotification').datagrid('getSelected');
 if(row)
{
 $('#dlgpurchasenotification').dialog('open').dialog('setTitle','Edit purchasenotification');
 $('#frmpurchasenotification').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletepurchasenotification(){
 var row=$('#dgpurchasenotification').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgpurchasenotification').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savepurchasenotification(){
 saveForm('#frmpurchasenotification',url,'#dlgpurchasenotification','#dgpurchasenotification');
}

 function done(){
     var row=$('#dgpurchasenotification').datagrid('getSelected');
     if(row)
     {

         url='edit/'+row.id;
         $.post(url,{},function(data){
             $('#dgpurchasenotification').datagrid('reload');
         })
     }
     else{
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}
 }
