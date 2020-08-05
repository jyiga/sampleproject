var balGlobal;

 function neworder(){
$('#dlgorder').dialog('open').dialog('setTitle','Enter order ');
$('#frmorder').form('clear');
 url='add'; 
}

 function editorder(){
 var row=$('#dgorder').datagrid('getSelected');
 if(row)
{
 $('#dlgorder').dialog('open').dialog('setTitle','Edit order');
 $('#frmorder').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteorder(){
 var row=$('#dgorder').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgorder').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 /*function saveorder(){
 saveForm('#frmorder',url,'#dlgorder','#dgorder');
}*/

$(function(){
  /*$.post('../foodMenus/getFoodMenuHtml',{},function(data){
    $('#menuHtml').html(data);
    $('#time').val(whatstheTime());
    $('#date').val(whatsthedate());
  })*/

  getHtml('../tablenumbers/getFreeTable','#tableHtml');
    $('#timeOrder').val(whatstheTime());
    $('#dateOrder').val(whatsthedate());

    getHtml2('../servingshifts/getShift/'+whatstheTime(),'#shift');
    getInputBoxVal2('../orders/getOrderNo','#orderNo');
    var username=$('#usernametxtholder').html();
    $('#waitress').val(username);
    clearTotal();
    //getHtml('../foodMenus/getFoodMenuHtml/'+$('#shift').val(),'#menuHtml');
    //getInputBoxVal('../orders/getOrderNo','#customerId');
    //prepareedatagrid();
    //$('#customerId').val($('#orderNo').val());
});

function loadNewOrder()
{

    getHtml('../tablenumbers/getFreeTable','#tableHtml');
    $('#timeOrder').val(whatstheTime());
    $('#dateOrder').val(whatsthedate());

    getHtml2('../servingshifts/getShift/'+whatstheTime(),'#shift');

    getInputBoxVal2('../orders/getOrderNo','#orderNo');
    $('#tableId').val('T1');
    $('#servingAs').iCheck('uncheck');
    var username=$('#usernametxtholder').html();
    $('#waitress').val(username);
    clearTotal();

}
/* $(function(){
     $.post('../tablenumbers/getFreeTable',{},function(data){
         $('#tableHtml').html(data);
     })
 });*/


 function getHtml(url,placeHolder)
 {
     $.post(url,{},function(data){
         $(placeHolder).html(data);
     })
 }
 function getHtmlParam(url,placeHolder)
 {
     $.post(url,function(data){
         $(placeHolder).html(data);
     })
 }

 function getHtml2(url,placeHolder)
 {
     $.post(url,{},function(data){
         $(placeHolder).val(data);
         getHtml('../foodMenus/getFoodMenuHtml/'+data,'#menuHtml');

     })
 }

 function getMenuParticular(item)
 {
     //getHtmlParam('../foodMenus/getFoodMenuHtml/'+data,'#menuHtml');
     var data=$('#shift').val();
     $.post('../foodMenus/getFoodMenuHtml/'+data,{'item':item},function(data){
         $('#menuHtml').html(data);
     })
 }

 function getInputBoxVal(url,placeHolder)
 {
     $.post(url,{},function(data){
         $(placeHolder).val(data);
     })
 }
 function getInputBoxVal2(url,placeHolder)
 {
     $.post(url,{},function(data){
         $(placeHolder).val(data);
         $('#customerId').val($('#orderNo').val());
         prepareedatagrid($('#orderNo').val());
     });;
 }



 function whatstheTime()
 {
     var dt = new Date();
     var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
     return time;
 }

 function whatsthedate()
 {
     var dt = new Date();
     var month=(dt.getMonth()+1);
     month=month<10?'0'+month:month;
     var day=dt.getDate();
     day=day<10?'0'+day:day;
     var date = dt.getFullYear() + "-" + month + "-" + day;
     return date;
 }

 function prepareedatagrid(id)
 {
    // getInputBoxVal('../orders/getOrderNo','#orderNo');
     //getInputBoxVal('../orders/getOrderNo','#customerId');
    // alert($('#orderNo').val());

         $('#dgorderparticular').edatagrid({
                 url:'../orderparticulars/viewall/'+id,
                 saveUrl:'../orderparticulars/add/'+id,
                 updateUrl:'../orderparticulars/edit/'+id,
                 destroyUrl:'../orderparticulars/delete',
                 onSuccess:function(){
                     $('#dgorderparticular').datagrid('reload');
                     getTotal();
                 },
                onDestroy:function()
                {
                    $(this).datagrid('reload');
                    getTotal();
                    //datagridReload();
                }

             }

         )


 }


 function deleteorderparticular(){
     var row=$('#dgorderparticular').datagrid('getSelected');
     if(row)
     {
         $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){
             $.post('../orderparticulars/delete',{'id':row.id},function(data){
                 $('#dgorderparticular').datagrid('reload');});
             getTotal();

         }
         });}
     else{
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}
 }


 function saveGrid()
 {
     $('#dgorderparticular').edatagrid('saveRow');
     $('#dgorderparticular').datagrid('reload');
     getTotal();

 }
 function datagridReload()
 {
     $('#dgorderparticular').datagrid('reload');
     getTotal();
 }
 function deleteGrid()
 {
     $('#dgorderparticular').edatagrid('destroyRow');

 }

 function addItems(x)
 {
     var tableNo=$('#tableId').val();

     var val=$('#servingAs').prop("checked");
     //alert(val);


     if((tableNo=="" || tableNo==null) && val==false)
     {
         alert("Please Select a table you serving");
     }else
     {
         //alert(x);
         var orderNo=$('#orderNo').val();
         var qty=0;
         $.messager.prompt('XCook Software', 'Quantity?', function(r){
             if (r){
                 //alert('you type: '+r);
                 qty=r;
                 $.post('../orderparticulars/add/'+orderNo,{'foodmenusId':x,'quanitity':qty},function(data){
                     $('#dgorderparticular').datagrid('reload');
                        getTotal();

                 });
             }
         });


     }

 }

 function removeItems(x)
 {
     var tableNo=$('#tableId').val();
     if(tableNo=="" || tableNo==null)
     {
         alert("Empty tableNo");
     }else
     {
         alert(x);
     }
 }

 function addTables(x)
 {
     //alert(x)
     $('#tableId').val(x);
 }

 function saveOrder()
 {
     var val=$('#servingAs').prop("checked");
     var servingAs='DINNER';
     if(val)
     {
         servingAs='TAKEWAY';
     }
     var tableNo=$('#tableId').val();
     var timeOrder=$('#timeOrder').val();
     var dateOrder=$('#dateOrder').val();
     var shift=$('#shift').val();
     var orderNo=$('#orderNo').val();
     var customerNo=$('#customerId').val();
     var chief=$('#chief').combobox('getValue');
     var waitress=$('#waitress').val();
     var orderNo=$('#orderNo').val();

     if((chief==null ||chief=='')&&(waitress==null||waitress==''))
     {
            $.messager.alert('Warning','Please add chef')
     }else {


         $.post('add', {
             'servingAs': servingAs,
             'chief': chief,
             'id': orderNo,
             'tableNo': tableNo,
             'date': dateOrder,
             'timeOrdered': timeOrder,
             'customerNo': customerNo,
             'timeshiftId': shift,
             'waitress': waitress,
             'isActive': 1
         }, function (data) {
             var respond = $.parseJSON(data);
             if (respond.msg) {
                 $.messager.show('Warning', respond.msg);
             } else {

                 $.messager.show('Xonib', 'Order Saved');

                 loadNewOrder();



             }
         })
     }

 }

 function saveOrderNormal()
 {
     var val=$('#servingAs').prop("checked");
     var servingAs='DINNER';
     if(val)
     {
         servingAs='TAKEWAY';
     }
     var tableNo=$('#tableId').val();
     var timeOrder=$('#timeOrder').val();
     var dateOrder=$('#dateOrder').val();
     var shift=$('#shift').val();
     var orderNo=$('#orderNo').val();
     var customerNo=$('#customerId').val();
     var chief=$('#chief').val();
     var waitress=$('#waitress').val();
     var orderNo=$('#orderNo').val();

     $.post('add',{'servingAs':servingAs,'chief':chief,'id':orderNo,'tableNo':tableNo,'date':dateOrder,'timeOrdered':timeOrder,'customerNo':customerNo,'timeshiftId':shift,'waitress':waitress,'isActive':1},function(data){
         var respond=$.parseJSON(data);
         if(respond.msg)
         {
             $.messager.show('Warning',respond.msg);
         }else
         {

             $.messager.show('Xonib','Order Saved');

             //loadNewOrder();


         }
     })


 }

 function newOrderLoad()
 {
     saveOrder();
 }

 function openLoader()
 {
     $('#dlgorderloader').dialog('open').dialog('setTitle','Loading Order');
       //are boot.
     $('#dgorderloader').datagrid('reload');
 }

function searchTableNo()
{
    var tableNo=$('#tableSearch').val();
    $('#dgorderloader').datagrid('reload',{'tableNo':tableNo})
}

 function searchFoods()
 {
     var foods=$('#foodSearch').val();
     $('#dgorderloader').datagrid('reload',{'foods':foods})
 }

 function loadOrderInMain()
 {
     var row=$('#dgorderloader').datagrid('getSelected');
     if(row)
     {
         $('#dlgorderloader').dialog('close');
         $('#tableId').val(row.No);
         $('#timeOrder').val(row.timeOrdered);
         $('#dateOrder').val(row.date);
         getInputBoxVal('../servingshifts/getShift/'+$('#timeOrder').val(),'#shift');
         //$('#shift').val();
         $('#orderNo').val(row.id);
         $('#customerId').val(row.customerNo);
         $('#chief').val(row.chief);
         $('#waitress').val(row.waitress);
         prepareedatagrid(row.id);
         getTotal();
         var username=$('#usernametxtholder').html();
         $('#waitress').val(username);


     }
     else
     {
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
     }
 }

 function getTotal()
 {
     var id=$('#orderNo').val();
     $.post('../orderparticulars/getTotal/'+id,{},function(data){
            $('#costTag').html(data);
     })
 }

 function clearTotal()
 {
     $('#costTag').html('0.00');
 }

 function getTotalVal()
 {
     var id=$('#orderNo').val();
     $.post('../orderparticulars/getTotal/'+id,{},function(data){
         $('#cost').val(data);
        //return data;
     })
 }

 function getTotalValNew()
 {
     var id=$('#orderNo').val();
     $.post('../orderparticulars/getTotal/'+id,{},function(data){
         return data;
     })
 }

 function payOrder()
 {
    var orderId=$('#orderNo').val();

$.messager.progress();
     $.post('saveState/'+orderId,{},function(data){
         //alert(data);
         $.messager.progress('close');
         if(data=='1')
         {

             $('#dlgorderpayment').dialog('open').dialog('setTitle','Payment Screen');
             $('#frmorderpayment').form('clear');
             var cost=$('#costTag').html();
             var orderId=$('#orderNo').val();
             $('#orderId').val(orderId);
             $('#orderId').val(orderId);
             $('#cost').val(cost);
             getPaidAmout(orderId,cost);
         }else
         {
             //("First Save object");
             var cost=$('#costTag').html();
             $.messager.progress();
             saveOrderNormal();
             $.messager.progress('close');
             //
             //savePaymentOrder();
             $('#dlgorderpayment').dialog('open').dialog('setTitle','Payment Screen');
             $('#frmorderpayment').form('clear');

             var orderId=$('#orderNo').val();
             $('#orderId').val(orderId);
             $('#cost').val(getTotalVal());
             getPaidAmout(orderId,cost);
         }
     })

 }

 function getPaidAmout(id,cost)
 {
     $.post('../orderpayments/getTotalPaid/'+id,{},function(data){
         var total=0;
        if(data==null||data=='')
        {
            //alert('No Data');
        }else
        {
            total=parseFloat(data);
        }

         var cost2=parseFloat(cost);
        var bal=cost2-total;
         balGlobal=bal;
            $('#balance').val(bal);

     })
 }

 function savePaymentOrder()
 {
      var orderId=$('#orderId').val();
      var cost=$('#cost').val();
      var paidIn=$('#paidIn').val();
      var totalPay=parseInt(paidIn)-parseInt($('#change').val());
      var dateIn=$('#dateOrder').val();
      var timeIn=$('#timeOrder').val();
     // var receivedBy=$('').val();
     $.post('../orderpayments/add',{'orderId':orderId,'cost':cost,'paidIn':totalPay,'dateIn':dateIn,'timeIn':timeIn},function(data){
                var response=$.parseJSON(data);
                if(response.msg)
                {
                    $.messager.show('Error','Error occurred while saving payment.....call system administrator support');
                }else
                {
                    $.messager.progress('close');
                    //open receipt
                    $.post('../orderpayments/viewreceipt/'+orderId,{},function(data){

                        $('#printArea').html(data);
                        $('#dlgorderpaymentreceipt').dialog('open').dialog('setTitle','Printout');
                        printElem('printArea');
                        $('#dlgorderpaymentreceipt').dialog('close');
                        $('#dlgorderpayment').dialog('close');

                    });
                    //$('#dlgorderpayment').dialog('close');
                }
     });
 }

 function printDiv(divName)
 {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
 }

 function printElem(divId) {
     var content = document.getElementById(divId).innerHTML;
     var mywindow = window.open('', 'Print', 'height=300,width=800');

     mywindow.document.write('<html><head><title>Print</title><link href="../public/css/printmedia.css" rel="stylesheet">');
     mywindow.document.write('</head><body style="DejaVuSansMono, monospaced;">');
     var css="";
     mywindow.document.write(content);
     mywindow.document.write('</body></html>');

     mywindow.document.close();
     mywindow.focus()
     mywindow.print();
     mywindow.close();
     return true;
 }
function tok()
{

    var orderId=$('#orderNo').val();
    //alert(orderId)

    $.post('../orderpayments/viewBill/'+orderId,{},function(data){

        $('#printArea').html(data);
        //$('#dlgorderpaymentreceipt').dialog('open').dialog('setTitle','Printout');
        printElem('printArea');
        //saveOrder();
        //$('#dlgorderpaymentreceipt').dialog('close');
        //$('#dlgorderpayment').dialog('close');

    });
}

 function billSlip()
 {

     var orderId=$('#orderNo').val();
     //alert(orderId)

     $.post('../orderpayments/viewBillOrder/'+orderId,{},function(data){

         $('#printArea').html(data);
         //$('#dlgorderpaymentreceipt').dialog('open').dialog('setTitle','Printout');
         printElem('printArea');
         //saveOrder();
         //$('#dlgorderpaymentreceipt').dialog('close');
         //$('#dlgorderpayment').dialog('close');

     });
 }

function getActualChange(x)
{
    var cost =parseInt($('#cost').val());
    //getPaidAmout(id,cost);
    //alert(balGlobal);
    var paidIn=parseInt(x);
    var change=paidIn-cost;
    $('#change').val(change);
    var actualVal=paidIn-change;

    var newBalance=parseInt(balGlobal)-actualVal;
    //alert(newBalance+"-"+balGlobal+"-"+actualVal+"-"+change);
    $('#balance').val(newBalance);


}


function getBalanceAtPayment(paidIn)
{

}