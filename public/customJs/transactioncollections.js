

 function newtransactioncollection(){
$('#dlgtransactioncollection').dialog('open').dialog('setTitle','Enter transactioncollection ');
$('#frmtransactioncollection').form('clear');
 //url='add'; 
 //prepare_transaction
}

 function edittransactioncollection(){
 var row=$('#dgtransactioncollection').datagrid('getSelected');
 if(row)
{
 $('#dlgtransactioncollection').dialog('open').dialog('setTitle','Edit transactioncollection');
 $('#frmtransactioncollection').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletetransactioncollection(){
 var row=$('#dgtransactioncollection').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtransactioncollection').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savetransactioncollection(){
 saveForm('#frmtransactioncollection',url,'#dlgtransactioncollection','#dgtransactioncollection');
}

function prepare_transaction(x) {

    var date = $('#transDate').datebox('getValue');
    var serviceType=x;
    //alert(serviceType)
    //prepare_fuelOrder();
    $('#dgtrans').edatagrid({
        url: '../transactioncollections/viewtrans/' + date+'/'+serviceType,
        saveUrl: '../transactioncollections/add/' + date+'/'+serviceType,
        updateUrl: '../transactioncollections/edit/' + date+'/'+serviceType,
        destroyUrl: '../transactioncollections/delete/',
        onSuccess: function () {
            $('#dgtrans').datagrid('reload');
        }
        
    });

//<<<<<<< .mine
 }
 function doneCollections()
 {
    $('#dgtransactioncollection').datagrid('reload');
    $('#dlgtransactioncollection').dialog('close')
 }

 function openReportDialog()
 {
   

        
            $('#dlgReport').dialog('open').dialog('setTitle','Report Dialog');
            $('#frmReport').form('clear');
       
 }

 function searchData()
 {
     var startDate=$('#startDate').datebox('getValue');
     var endDate=$('#endDate').datebox('getValue');
     var serviceType=$('#serviceTypeIdSearch').combobox('getValue');

     if(startDate!='' &&endDate!=''&&serviceType!='')
     {
         //alert('all')
         $('#dgtransactioncollection').datagrid('load',{startDate:startDate,endDate:endDate,serviceType:serviceType});

     }else if(startDate!='' &&endDate!='')
     {
        //alert('dates')
        $('#dgtransactioncollection').datagrid('load',{startDate:startDate,endDate:endDate});
     }else if(serviceType!='')
     {
        //alert('service')
        $('#dgtransactioncollection').datagrid('load',{serviceType:serviceType});

     }
     $('#dlgReport').dialog('close');
 }

 function getPdf()
 {
    var body = $('#dgtransactioncollection').datagrid('toArray');
    var docDefinition = {
        content: [{
            table: {
                headerRows: 1,
                widths: ['*','*','*','auto','*'],
                body: body
            }
        }]
    };
    pdfMake.createPdf(docDefinition).open();
 }

 function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}