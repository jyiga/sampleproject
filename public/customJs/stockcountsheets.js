

 function newstockcountsheet(){
$('#dlgstockcountsheet').dialog('open').dialog('setTitle','Enter stockcountsheet ');
$('#frmstockcountsheet').form('clear');
 url='generateStockCount';
}

 function editstockcountsheet(){
 var row=$('#dgstockcountsheet').datagrid('getSelected');
 if(row)
{
 $('#dlgstockcountsheet').dialog('open').dialog('setTitle','Edit stockcountsheet');
 $('#frmstockcountsheet').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestockcountsheet(){
 var row=$('#dgstockcountsheet').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstockcountsheet').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestockcountsheet(){
 saveForm('#frmstockcountsheet',url,'#dlgstockcountsheet','#dgstockcountsheet');
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
     var mywindow = window.open('', 'Print', 'height=500,width=500');

     mywindow.document.write('<html><head><title>Print</title>');
     mywindow.document.write('</head><body>');
     var css="";
     mywindow.document.write(content);
     mywindow.document.write('</body></html>');

     mywindow.document.close();
     mywindow.focus()
     mywindow.print();
     mywindow.close();
     return true;
 }
 function printStockOut()
 {


     var row=$('#dgstockcountsheet').datagrid('getSelected');
     if(row) {
         $.post('../stockcountsheets/printOutStockSheets/' + row.id, {}, function (data) {

             $('#printArea').html(data);
             //$('#dlgorderpaymentreceipt').dialog('open').dialog('setTitle','Printout');
             printElem('printArea');
             //saveOrder();
             //$('#dlgorderpaymentreceipt').dialog('close');
             //$('#dlgorderpayment').dialog('close');

         });
     }else{
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}
 }

 function autoComplete()
 {
     var row=$('#dgstockcountsheet').datagrid('getSelected');
     if(row)
     {

         $('#dlgstockcountsheetitem').dialog('open').dialog('setTitle','Complete Stock Count Record');
         preparedComplete(row.id)
     }else
     {
        $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
     }
 }

 function preparedComplete(id)
 {
     $('#dgstockcountsheetItem').edatagrid({
             url:'../stockcountsheetitems/viewall/'+id,
             saveUrl:'../stockcountsheetitems/add/'+id,
             updateUrl:'../stockcountsheetitems/edit/'+id,
             destroyUrl:'../stockcountsheetitems/delete',
             onSuccess:function(){
                 $('#dgstockcountsheetItem').datagrid('reload');

             }

         }

     )
 }
 function manualRecon()
 {
     var row=$('#dgstockcountsheet').datagrid('getSelected');
     if(row)
     {

         $('#dlgstockcountsheetitem2').dialog('open').dialog('setTitle','Manual Recon ');
         preparedComplete2(row.id)
     }else
     {
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
     }
 }
 function preparedComplete2(id)
 {
     $('#dgstockcountsheetItem2').datagrid('reload',{'id':id});
 }
 function manreconsave()
 {
     var row=$('#dgstockcountsheetItem2').datagrid('getSelected');
     if(row)
     {
            var stockId=row.stockId;
            var id=row.id;
            var quantity=parseInt(row.quantity);
            var qtyIn=parseInt(row.qtyIn);
            var status;

            var zfactor=qtyIn-quantity;
            if(zfactor>0)
            {
                status="IN";
            }else
            {
                zfactor=(zfactor*-1);
                status="OUT";

            }

            $.post('../stockcountsheetitems/manrec/'+id,{'zfactor':zfactor,'stockId':stockId,'status':status},function(data){
                $('#dgstockcountsheetItem2').datagrid('reload');
            });

     }else
     {
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
     }
 }

