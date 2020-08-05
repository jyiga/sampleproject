

 function newreceiptVoucher(){
$('#dlgreceiptVoucher').dialog('open').dialog('setTitle','Enter receiptVoucher ');
$('#frmreceiptVoucher').form('clear');
 url='add'; 
}

 function editreceiptVoucher(){
 var row=$('#dgreceiptVoucher').datagrid('getSelected');
 if(row)
{
 $('#dlgreceiptVoucher').dialog('open').dialog('setTitle','Edit receiptVoucher');
 $('#frmreceiptVoucher').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletereceiptVoucher(){
 var row=$('#dgreceiptVoucher').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgreceiptVoucher').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savereceiptVoucher(){
 saveForm('#frmreceiptVoucher',url,'#dlgreceiptVoucher','#dgreceiptVoucher');
}
 function printCopy(){
     var row=$('#dgreceiptVoucher').datagrid('getSelected');
     if(row)
     {
         //$('#dlginvoice').dialog('open').dialog('setTitle','Edit invoice');
         //$('#frminvoice').form('load',row);
         //url='edit/'+row.id;
         //window.location='view?id='+row.id;

             //alert('Fuck You')
         //printCopy3
             window.location="../invoices/printCopy3/"+row.incomeSourceId+"/Recepit";


     }
     else
     {
         //$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
     }
 }