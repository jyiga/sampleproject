

 function newbankslip(){
$('#dlgbankslip').dialog('open').dialog('setTitle','Enter bankslip ');
$('#frmbankslip').form('clear');
 url='add'; 
}
$(function(){
    var id=qs('voucherType');
    if(id!==undefined)
    {
        //alert(id);
        url='add/'+id;
    }


});

 function editbankslip(){
 var row=$('#dgbankslip').datagrid('getSelected');
 if(row)
{
 $('#dlgbankslip').dialog('open').dialog('setTitle','Edit bankslip');
 $('#frmbankslip').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletebankslip(){
 var row=$('#dgbankslip').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgbankslip').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 /*function savebankslip(){
 saveForm('#frmbankslip',url,'#dlgbankslip','#dgbankslip');
}*/
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

     }else
     {
         $.messager.alert('Binox Systems','You can not Transact in a closed Financial month please first open the transaction month of '+fm,'warning');
         $(this).datebox('setValue','');
     }

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

 function excludeAccount(comboboxname,id)
 {
    var combon='#'+comboboxname;
    $(combon).combobox('reload',"../accounts/viewcomboboxCashAccountsExclude/2200/"+id)
 }
 function savebankslip()
 {
    var urlString=url.split('/');
    alert('Lenght of array'+urlString.length)
     if(urlString[0]=='add')
     {
         //var postFig=false;
         //postFig=$('#Posted').is(":checked");

         //if(!postFig)
         //{
             $.messager.confirm('Attention', 'The Transaction affects the individual accounts. You continue posting', function(r){ if (r) {
                 //saveFormUrlRedirect('#frmbankslip',url);
                 saveFormUrl2('#frmbankslip',url,'../bankslips/deposit?voucherType='+urlString[1]);
             }
             });
         //}else
         //{
             //saveFormUrlRedirect('#frmpaymentVoucher',url);
         //}

     }else
     {

     }

 }