

 function newpaymentVoucher(){
$('#dlgpaymentVoucher').dialog('open').dialog('setTitle','Enter paymentVoucher ');
$('#frmpaymentVoucher').form('clear');
 url='add'; 
}

 function editpaymentVoucher(){
 var row=$('#dgpaymentVoucher').datagrid('getSelected');
 if(row)
{
 $('#dlgpaymentVoucher').dialog('open').dialog('setTitle','Edit paymentVoucher');
 $('#frmpaymentVoucher').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletepaymentVoucher(){
 var row=$('#dgpaymentVoucher').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgpaymentVoucher').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savepaymentVoucher(){
if(url=='add')
{
    var postFig=false;
    postFig=$('#Posted').is(":checked");

    if(!postFig)
    {
        $.messager.confirm('Attention', 'Would like to save the this payment voucher with out posting', function(r){ if (r) {
            saveFormUrlRedirect('#frmpaymentVoucher',url);
        }
        })
    }else
    {
        saveFormUrlRedirect('#frmpaymentVoucher',url);
    }

}else
{

}

}
 function deletepaymentVoucherItem(){
     var row=$('#dgpaymentVoucherItem').datagrid('getSelected');
     if(row)
     {
         $.messager.confirm('Warning', 'Are you sure of this action...', function(r){ if (r){    $.post('../paymentVoucherItems/delete/'+row.id,{},function(data){ $('#dgpaymentVoucherItem').datagrid('reload');});

         }
         });}
     else{
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}
 }
 $(function(){

     $.post('../financialmonths/getActiveYear',{},function(data)
     {
         //alert(data);
         var data2= $.parseJSON(data);
         //alert(data2.yearCode);
         if(data2.msg===undefined)
         {
             $('#yearCode').val(data2.yearCode);
             $('#monthCode').val(data2.monthCode);
         }else
         {
           alert("data2.msg");
         }

     })
 });
 $(function()
 {
     var id=qs('id');
     if(id!==undefined)
     {
         $.post('getVoucherNo/'+id, {id:id}, function (data) {
             var data2= $.parseJSON(data);
             //alert(data2);
             //$('#id').val(id);
             $('#frmpaymentVoucher').form('load',data2);
             prepare_paymentVoucherItem();
         })
     }else {
         $.post('getVoucherNo', {}, function (data) {
             var data2= $.parseJSON(data);
             $('#id').val(data2.countNo);
             url='add'
             prepare_paymentVoucherItem();
         })
     }
 });
 function prepare_paymentVoucherItem()
 {

     var id=$('#id').val();
     //prepare_fuelOrder();
     $('#dgpaymentVoucherItem').edatagrid({
         url: '../paymentVoucherItems/viewall/'+id,
         saveUrl: '../paymentVoucherItems/add/'+id,
         updateUrl: '../paymentVoucherItems/edit/'+id,
         destroyUrl:'../paymentVoucherItems/delete/',
         onSuccess:function()
         {
             $('#dgpaymentVoucherItem').datagrid('reload');
         }
     });

 }
 function validateDate(date)
 {
     var year=date.getFullYear();
     var month=(date.getMonth()+1)<9?'0'+(date.getMonth()+1):(date.getMonth()+1);
     var calVal=month+'_'+year;
     var fm=$('#monthCode').val();
     //var array=fm.split('/');
     //alert("cal:"+calVal+"fm:"+fm);
     if(calVal===fm)
     {

     }else{
         $.messager.alert('Binox Systems','You can not Transact in a closed Financial month please first open the transaction month of '+fm,'warning');
         $(this).datebox('setValue','');
     }

 }
 $(function(){

     var url=qs('url');

     if(url===undefined)
     {

     }else
     {
         alert(url);
         $('#viewier').attr('src','http://localhost:9290/core/'+url);
     }


 })
 function postInvoiceNo()
 {
     var row=$('#dginvoice').datagrid('getSelected');
     if(row)
     {
         $('#sourceRef').val(row.id);
         $('#dginvoice').datagrid('reload');
         $('#dlgattachmentInvoice').dialog('close');
     }else
     {

     }

 }
function attachInvoice()
{
    $('#dlgattachmentInvoice').dialog('open').dialog('setTitle','Load Invoice');
    //$('#frmpaymentVoucher').form('load',row);
}
function searchInvoice()
{
    var customerId=null;
    var quoteNo=null;
    var taxNo=null;
    customerId=$('#customerId').combobox('getValue')
    quoteNo=$('#quoteNo').val();
    taxNo=$('#taxInvoiceNo').val();
    if(customerId!="" &&quoteNo!="" && taxNo!="")
    {
        //alert('all');
        $('#dginvoice').datagrid('load',{customerId:customerId,quoteNo:quoteNo,taxNo:taxNo})
    }else if(customerId!="" &&quoteNo!="")
    {
        //alert('c q');
        $('#dginvoice').datagrid('load',{customerId:customerId,quoteNo:quoteNo})
    }else if(customerId!="" && taxNo!="")
    {
        //alert('c t')
        $('#dginvoice').datagrid('load',{customerId:customerId,taxNo:taxNo})
    }else if(quoteNo!="" && taxNo!="")
    {
        //alert('q t')
        $('#dginvoice').datagrid('load',{quoteNo:quoteNo,taxNo:taxNo})
    }else if(customerId!="")
    {
        //alert('c')
        $('#dginvoice').datagrid('load',{customerId:customerId})
    }else if(quoteNo!="")
    {
        //alert('n')
        $('#dginvoice').datagrid('load',{quoteNo:quoteNo})
    }else if(taxNo!="")
    {
        //alert('t');
        $('#dginvoice').datagrid('load',{taxNo:taxNo})
    }



}
