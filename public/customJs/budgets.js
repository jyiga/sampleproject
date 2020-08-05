var invoiceId;

 function openBudget(){
    //alert('I LOVE JESUS');
     var row=$('#dginvoice').datagrid('getSelected');
     if(row)
     {
      var id= row.id;
      invoiceId=row.id;
      //alert(invoiceId);


            $('#dlgbudget2').dialog('open').dialog('setTitle', 'Paying Budget Items');
            //$('#dgbudget2').datagrid('load',{id:id});
            prepare_budget();
            addCompletionStatus('#completionper',row.performance);



         //url = 'add';
     }else{
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}
 }
 function addCompletionStatus(name,val)
 {
     var val3='<div class="row tile_count"><div class="col-md-12 col-sm-12 col-xs-12 tile_stats_count"><span class="count_top"><i class="fa fa-user"></i>Completion %</span> <div class="count">'+val+'</div> <span class="count_bottom"><i class="green">'+(100-parseInt(val))+' </i> Uncompleted</span> </div></div>'
     $(name).html(val3);
 }

 function  getBalanceBefore(id,systemName)
 {
     var bal=0;
     $.post('../generaledgers/invoiceBalance/null',{criteria:"systemName='"+systemName+"'"},function(data){
         //$('#balanceBefore').val(data);
         $('#walletamt').val(data);
         bal=parseInt(data);
         //alert(data);
         //getBalanceAfter();
     });
     return bal;



 }

 function paybudgetitem(){
     //alert('Shit');
  var row=$('#dgbudget2').datagrid('getSelected');
     if(row)
     {
         var id= row.id;
         var balNew=0;
         var amount=parseInt(row.amount);
         var paidAmt=parseInt(row.paidAmount);

         if(amount>paidAmt)
         {


          balNew=getBalanceBefore(null,'wallet');
          console.log(balNew);
$('#dlgpaybudget').dialog('open').dialog('setTitle', 'Paying Budget Items');
         $('#frmpaybudget').form('clear');
         $('#frmpaybudget').form('load',row);
         $('#Walletamt').val(balNew);
         //$('#').val();
         url = 'payTransaction/'+id;
         }else
         {
             $.messager.show({title:'Warning!',msg:'Item is fully Paid'});
         }

     }else{
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}

 }
function openAutoPay(){
    var row=$('#dginvoice').datagrid('getSelected');
    if(row)
    {
        var id= row.id;
        $('#dlgautopay').dialog('open').dialog('setTitle','AutoPay');
        $('#dgbudget3').datagrid('load',{id:id});
        addCompletionStatus('#completionper2',row.performance);
        //$('#frmautopay').form('load',row);
        //url='edit/'+row.id;
    }

}

function confirmAutoPay()
 {
     var rows=$('#dgbudget3').datagrid('getSelections');
     var id=0;
     var failCount=0;
     var passCount=0;
     if(rows.length==0)
     {
         //$.messager.progress('close');
         $.messager.show({title:'Notice',msg:'Select at list one row'});
     }else
     {

         for (var i = 0; i < rows.length; i++)
         {
             if(parseInt(rows[i].bbefore)>0)
             {
                 if (i == 0) {
                     id = rows[i].id;
                 } else {
                     id = id + "-" + (rows[i].id);
                 }
                 passCount=passCount+1;
             }
             else
             {
                // $.messager.show({title:'Warning!',msg:''});
                 failCount=failCount+1;
             }


         }
//continue
         if(passCount>0)
         {
             $.post('autoPayTransaction',{id:id},function(data){
                 var result = eval('('+data+')');
                 if (result.msg){
                     $.messager.show({title: 'Warning',
                         msg: result.msg});
                 } else {
                     $.messager.show({title: 'Info',
                         msg: 'successfully completed'});
                     //$(dialogName).dialog('close');
                     $('#dgbudget3').datagrid('reload'); // close the dialog
                     // reload the user
                 }
             });
         }

         if(failCount>0)
         {
             $.messager.show({title:'Warning!',msg:'Some Items Selected are already Paid.'});
         }

     }
 }

 function editbudget(){
 var row=$('#dlgbudget').datagrid('getSelected');
 if(row)
{
 $('#dlgbudget').dialog('open').dialog('setTitle','Edit budget');
 $('#frmbudget').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletebudget(){
 var row=$('#dlgbudget').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgbudget').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}






 function savebudget()
 {
 saveForm('#frmbudget',url,'#dlgpaybudget','#dgbudget');
}

function savepaybudget()
{
    saveForm('#frmpaybudget',url,'#dlgpaybudget','#dgbudget2');
}
function completionPercentage()
{

}

 function loadList()
 {
     $('#dlgbudgetitems').dialog('open').dialog('setTitle', 'Choose Budget Item to Load.. ');
     $('#dgbudgetitems').datagrid('reload');
     //alert(invoiceId)
 }

 function loadBudgetItem() {
     var inv = invoiceId;
     var id = "";
     var vat = '0'
     //var headerId = $("#headerId").combobox('getValue');
     var rows = $('#dgbudgetitems').datagrid('getSelections');

     if (rows.length == 0)
     {
         //$.messager.progress('close');
         $.messager.show({title: 'Help', msg: 'Select at list one row'});
     } else
     {
         for (var i = 0; i < rows.length; i++)
         {
             if (i == 0)
             {
                 id = rows[i].itemName;
             } else
             {
                 id = id + "-" + (rows[i].itemName);
             }
         }
     }
     //url

     //alert("Empty")
     //$.messager.show({title:'Help',msg:'NO HEADER SELECTED'});
     $.post('../budgets/add/' + inv, {itemName: id}, function (data) {

         $('#dlgbudgetitems').dialog('close');
         //$('#dginvoiceItem').edatagrid('reload');
         $('#dgbudget2').datagrid('reload');

     });

     //save the


 }

function prepare_budget() {

    var id = invoiceId;
    //prepare_fuelOrder();
    $('#dgbudget2').edatagrid({
        url: '../budgets/viewbudgetpayment/' + id,
        saveUrl: '../budgets/add/' + id,
        updateUrl: '../budgets/edit/' + id,
        destroyUrl: '../budgets/delete/'+id,
        onSuccess: function () {
            $('#dgbudget2').datagrid('reload');
        }/*
         onAdd:function(index,row){


         //alert($('#headerId').combobox('getValue'));
         var heading_id=$('#headerId').combobox('getValue')!==''&& $('#headerId').combobox('getValue')!==null?$('#headerId').combobox('getValue'):'';

         set_values(index);


         //alert(heading_id);
         }*/
    });

}




