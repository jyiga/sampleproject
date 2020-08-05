var url2;
var invoiceNo;
//<<<<<<< .mine
var urlDeb='';
var outUrl='';
 function newinvoice(){
$('#dlginvoice').dialog('open').dialog('setTitle','Enter invoice ');
$('#frminvoice').form('clear');
//get the lop number
//get prepare
 url='add'; 
/*
var urlDeb = '';
var outUrl = '';
function newinvoice() {
    $('#dlginvoice').dialog('open').dialog('setTitle', 'Enter invoice ');
    $('#frminvoice').form('clear');
    url = 'add';


*/
}

function editinvoice() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {
        //$('#dlginvoice').dialog('open').dialog('setTitle','Edit invoice');
        //$('#frminvoice').form('load',row);
        //url='edit/'+row.id;
        if (row.confirmed == '0') {
            window.location = 'view?id=' + row.id;
        } else {
            $.messager.alert('Warning', 'The invoice is not editable');
        }

        //printCopy2?url=export/invoice/3_invoice.pdf
    }
    else {
        //$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    }
}

function printCopy() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {
        //$('#dlginvoice').dialog('open').dialog('setTitle','Edit invoice');
        //$('#frminvoice').form('load',row);
        //url='edit/'+row.id;
        //window.location='view?id='+row.id;
        if (row.confirmed == '1') {

            window.location = "printCopy/" + row.id + "/Tax%20Invoice";
        } else {
            //window.location='printCopy2?url=export/invoice/'+row.id+'_invoice.pdf';
            window.location = "../invoices/printCopy/" + row.id + "/Quotation";
        }

    }
    else {
        //$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    }
}
function confirmInvoice() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {
        //$('#dlginvoice').dialog('open').dialog('setTitle','Edit invoice');
        //$('#frminvoice').form('load',row);
        //url='edit/'+row.id;
        if (row.confirmed == '0') {
            //posting invoice data.
            //.messager.progress({title:'Submitting',msg:'Please wait connecting to server in progress...'});
            $('#dlgconfirm').dialog('open').dialog('setTitle', 'Confirm Sales Or Invoice');
            $('#frmconfirm').form('clear');
            $('#invoiceId').val(row.id);
            $('#xrate').val(row.xrate);
            $('#currency').val(row.symbol);
            $('#amount').val(row.invoiceamt);
            $('#vatamount').val(row.vatamt);
            url = 'confirmation';
        } else {
            $.messager.alert('Warning', 'The invoice is already confirmed');
        }

        //printCopy2?url=export/invoice/3_invoice.pdf
    }
    else {
        //$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    }
}

function deleteinvoice() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.id, {}, function (data) {
                    $('#dginvoice').datagrid('reload');
                });

            }
        });
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function saveinvoice() {
    //saveForm('#frmInvoice2',url,'#dlginvoice','#dginvoice');
    if (url == 'add') {
        saveFormUrlRedirect('#frmInvoice2', url);
    } else {
        saveFormUrlRedirect('#frmInvoice2', url);
    }

}

function submitConfirmation() {
    saveForm('#frmconfirm', url, '#dlgconfirm', '#dginvoice');
}

function quickFind() {
    var customerName = $('#client').val();
    $('#dginvoice').datagrid('load', {customerName: customerName})
}


$(function () {
    var id = qs('id');
    if (id !== undefined) {
        var idnew = id.replace('#', '');

        $.post('getNumberNo', {id: idnew}, function (data) {
            var data2 = $.parseJSON(data);
            //$('#id').val(id);
            //alert(data2.id);
            $('#frmInvoice2').form('load', data2);
            url = 'edit/' + data2.id;
            invoiceNo = data2.id;
            prepare_invoiceItem();
            prepare_budget();
            reloadHeading();
        })
    } else {
        $.post('getNumberNo', {}, function (data) {
            var data2 = $.parseJSON(data);
            $('#id').val(data2.countNo);
            invoiceNo = data2.countNo;
            url = 'add'
            //checkvat();
            prepare_invoiceItem();
            prepare_budget();
            reloadHeading();

        })
    }
});

function checkvat() {
    $('#vat').prop('checked', true);
}


function removeVat() {
    if ($('#vat').prop('checked') == true) {
        //alert('Must');
    } else {
        //alert('Authorize the action');
        openAuthorize();


    }
}

function openAuthorize() {
    $('#dlgsuperuser2').dialog('open').dialog('setTitle', 'Enter invoiceItem ');
    $('#frmsuperuser2').form('clear');
    outUrl = '../superusers/authorise';
}

function authorise() {
    $.post('../superusers/authorise', {
        username: $('#username2').val(),
        password: $('#password2').val()
    }, function (data) {
        alert(data)
        var valback = parseInt(data)
        if (valback == 1) {
            $('#frmsuperuser2').form('clear');
            $('#dlgsuperuser2').dialog('close');
            $('#vat').prop('checked', false);

        } else {
            checkvat();
            $('#frmsuperuser2').form('clear');
            $('#dlgsuperuser2').dialog('close');
            $.messager.alert('Title', 'You have no right to unset VAT.');
        }
    })
}


function prepare_invoiceItem() {

    var id = $('#id').val();
    //prepare_fuelOrder();
    $('#dgInvoiceItem').edatagrid({
        url: '../invoiceitems/viewall/' + id,
        saveUrl: '../invoiceitems/add/' + id,
        updateUrl: '../invoiceitems/edit/' + id,
        destroyUrl: '../invoiceitems/delete/',
        onSuccess: function () {
            $('#dgInvoiceItem').datagrid('reload');
        },
        onAdd: function (index, row) {


            //alert($('#headerId').combobox('getValue'));
            var heading_id = $('#headerId').combobox('getValue') !== '' && $('#headerId').combobox('getValue') !== null ? $('#headerId').combobox('getValue') : '';

            set_values(index);


            //alert(heading_id);
        }
    });

//<<<<<<< .mine
 }

/*=======
}
$(function () {
>>>>>>> .theirs
*/
//<<<<<<< .mine
 function prepareLopItem()
 {
     var id=$('#id').val();
     $('#dglopitem').edatagrid({
         url:'../lopitems/viewall/'+id,
         saveUrl:'../lopiytems/add/'+id,
         updateUrl:'../lopitems/edit/'+id,
         destroyUrl:'../lopitems/delete'
     })
 }



  $(function(){

     var urlx=qs('url');
/*=======
    var urlx = qs('url');
>>>>>>> .theirs*/

    if (urlx === undefined) {

    } else {
        //alert(window.location.href);
        var urlString = window.location.href;
        urlString = urlString.substr(7, urlString.length);
        var stringArray = urlString.split('/');

        //alert(urlString);
        $('#viewier').attr('src', 'http://' + stringArray[0] + '/' + stringArray[1] + '/' + urlx);
        if (document.getElementById("viewier").readyState === 4) {
            printPdf();
        }
        //setTimeout(printPdf, 1000);
        //

    }


})
function printPdf() {
    var PDF = document.getElementById("viewier");
    PDF.focus();
    PDF.contentWindow.print();
}
function cancelSales() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {

        if (row.confirmed == '1') {
            //$.messager.alert('System Alert','');
            $.post('rollBack', {invoiceId: row.id}, function (data) {

            })

        } else {
            $.messager.alert('Warning', 'You can only reverse Confirmed Sales. This action can have a effect on the transaction assited with the invoice');
        }

    }
    else {
        //$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    }

}

function cancelSales2() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row)
    {
        $.messager.confirm('Confirmation','Would like to Reveres Invoice?',function(r){
            if(r)
            {
                if (row.confirmed == '1')
                {
                    loadingBar('Invoice being reversed please wait....');
                    $.post('rollbackInvoice/'+row.taxinvoiceId, {invoiceId: row.id}, function (data) {
                        $('#dginvoice').datagrid('reload');
                        closeBar();
                    });

                } else
                {
                    $.messager.alert('Warning', 'You can only reverse Confirmed Sales. This action can have a effect on the transaction assited with the invoice');
                }
            }

        });


    }
    else
    {
        $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    }

}


function recepitSales() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {

        if (row.confirmed == '1') {
            //dlgreceiptVoucher
            //$.messager.alert('System Alert','');
            var bal = 0;
            getBalanceBefore(row.taxinvoiceId);
            bal = parseInt(getBalanceBefore(row.taxinvoiceId));
            //if(bal>0)
            //{
            $('#dlgreceiptVoucher').dialog('open').dialog('setTitle', 'Edit invoice');
            $('#frmreceiptVoucher').form('clear');
            $('#incomeSourceId').val(row.taxinvoiceId);
            $('#currencyId2').combobox('setValue', row.currencyId);
            //get the balance Before;
            url = 'receipt/' + row.id;

            //}else
            //{
            //$.messager.alert('Warning','Invoice fully paid')
            //}


        } else {
            $.messager.alert('Warning', 'Confirm sales to receive cash');
        }

    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Select item to perform the action on'});
    }

}
function getBalanceBefore(id) {
    var bal = 0;
    $.post('../generaledgers/invoiceBalance/' + id, {criteria: "systemName='Accounts Receivable'"}, function (data) {
        $('#balanceBefore').val(data);
        bal = data;
        //alert(data);
        getBalanceAfter();
    });
    return bal;


}
function getBalanceAfter() {
    var amount = $('#payAmount').val();
    var bal = $('#balanceBefore').val();
    var answer = 0;
    answer = bal - amount;
    if (answer >= 0) {
        $('#balanceAfter').val(answer);
    } else {
        $.messager.alert('Warning', 'Please the balance is going in negatives....');
        $('#payAmount').val(0);
        $('#payAmount').focus;
        getBalanceAfter();
        $('#payAmount').val();
    }


}

function getWht() {
    var amount = $('#payAmount').val();
    var option = $('#whtApplied').val();
    if (option == 1) {
        $('#whtAmount').val((0.06 * amount));
    } else {
        $('#whtAmount').val((0));
    }
}
function savereceiptVoucher() {
    //saveForm('#frmreceiptVoucher',url,'#dginvoice','#dlgreceiptVoucher');
    //saveForm('#frmreceiptVoucher',url,'#dlgreceiptVoucher','#dginvoice');
    saveFormUrlRedirect('#frmreceiptVoucher', url);
    $('#dlgreceiptVoucher').dialog('close');

}

function loadPaymentVoucher() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {
        //check if the payment voucher exist;
        $.post('../paymentVouchers/getExist/' + row.id, {}, function (data) {
            if (data == "") {
                $.messager.show("Warning", "No Payment Voucher creater one")
            } else {
                $.messager.confirm('Warning', 'Redirecting to load Payment Voucher No:' + data,
                    function (r) {
                        if (r) {
                            window.location = '../paymentVouchers/view?id=' + data;
                        }
                    });

                //redirect to the payment screen
            }
        });
        //view the
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Select item to perform the action on'});
    }

}
function loadSearchDialog() {

}
function searchInvoice() {
    var customerId = null;
    var quoteNo = null;
    var taxNo = null;
    var customerName = null;
    customerId = $('#customerId').combobox('getValue')
    quoteNo = $('#quoteNo').val();
    taxNo = $('#taxInvoiceNo').val();
    if (customerId != "" && quoteNo != "" && taxNo != "") {
        //alert('all');
        $('#dginvoice').datagrid('load', {customerId: customerId, quoteNo: quoteNo, taxNo: taxNo})
    } else if (customerId != "" && quoteNo != "") {
        //alert('c q');
        $('#dginvoice').datagrid('load', {customerId: customerId, quoteNo: quoteNo})
    } else if (customerId != "" && taxNo != "") {
        //alert('c t')
        $('#dginvoice').datagrid('load', {customerId: customerId, taxNo: taxNo})
    } else if (quoteNo != "" && taxNo != "") {
        //alert('q t')
        $('#dginvoice').datagrid('load', {quoteNo: quoteNo, taxNo: taxNo})
    } else if (customerId != "") {
        //alert('c')
        $('#dginvoice').datagrid('load', {customerId: customerId})
    } else if (quoteNo != "") {
        //alert('n')
        $('#dginvoice').datagrid('load', {quoteNo: quoteNo})
    } else if (taxNo != "") {
        //alert('t');
        $('#dginvoice').datagrid('load', {taxNo: taxNo})
    } else if (customerName != "") {
        $('#dginvoice').datagrid('load', {customerName: customerName})
    }


}

function openHeader() {
    $('#dlginvoiceHeader').dialog('open').dialog('setTitle', 'Enter invoice ');
    $('#dgheadertitle').datagrid('reload', {invoiceId: invoiceNo});
    //$('#dlginvoiceHeader').form('clear');
    //url2='add';
}


function newheadertitle() {
    $('#dlgheadertitle').dialog('open').dialog('setTitle', 'Enter headertitle ');
    $('#frmheadertitle').form('clear');
    url2 = '../headertitles/add/' + invoiceNo;
}

function editheadertitle() {
    var row = $('#dgheadertitle').datagrid('getSelected');
    if (row) {
        $('#dlgheadertitle').dialog('open').dialog('setTitle', 'Edit headertitle');
        $('#frmheadertitle').form('load', row);
        url2 = '../headertitles/edit/' + row.id;
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function deleteheadertitle() {
    var row = $('#dgheadertitle').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act',
            function (r) {
                if (r) {
                    $.post('../headertitles/delete/' + row.id, {}, function (data) {
                        $('#dgheadertitle').datagrid('reload');
                    });
                    reloadHeading();

                }
            });
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function saveheadertitle() {
    saveForm('#frmheadertitle', url2, '#dlgheadertitle', '#dgheadertitle');
    reloadHeading();
}

function set_values(rowIndex) {
    var editors = $('#dgInvoiceItem').edatagrid('getEditors', rowIndex);
    var itemName = editors[0];
    var itemDescripton = editors[1];
    var qty = editors[2];
    var unitPrice = editors[3];
    var day = editors[4];
    var total = editors[6];
    var tax = editors[5];
    var headerId = editors[7];

    itemName.target.blur(function () {

        var heading_id = $('#headerId').combobox('getValue') !== '' && $('#headerId').combobox('getValue') !== null ? $('#headerId').combobox('getValue') : 'null';

        // $("#vat").attr("checked")
        $(headerId.target).val(heading_id);
        //the vat value.
        if ($("#vat").prop("checked")) {
            $(tax.target).val(0.18);

        } else {
            $(tax.target).val(0.00);
        }

        //headFirst2();
        //check if vat is checked

    });

    day.target.numberbox({
        onChange: function () {

            var qty1 = qty.target.numberbox('getValue');
            var rate1 = unitPrice.target.numberbox('getValue');
            33
            var noday1 = day.target.numberbox('getValue');
            var totalcost = qty1 * rate1 * noday1;
            //alert('hi');
            //alert(totalcost);
            $(total.target).numberbox('setValue', totalcost);
            //total.val(totalcost)

        }
    });


}

function reloadHeading() {
    $('#headerId').combobox('reload', '../headertitles/viewcombobox/' + invoiceNo);

}


function deleteinvoiceItem() {
    var row = $('#dgInvoiceItem').datagrid('getSelected');
    if (row) {
        //alert("You Dele"+row.itemName);
        if (!isNaN(parseInt(row.id))) {
            $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
                if (r) {
                    $.post('../invoiceItems/delete/' + row.id, {}, function (data) {
                        $('#dgInvoiceItem').edatagrid('reload');
                    });

                }
            });
        }
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
    $('#dgInvoiceItem').edatagrid('reload');
}


function newdebitor() {
    $('#dlgdebitor').dialog('open').dialog('setTitle', 'Enter debitor ');
    $('#frmdebitor').form('clear');
    getDebitor();
    urlDeb = '../debitors/add';
}

function newattentions(x) {
    $('#dlgattentions').dialog('open').dialog('setTitle', 'Enter debitor ');
    //$('#frmdebitor').form('clear');
    $('#debitorNo2').val(x);
    prepare_attention2();
    //getDebitor();
    //urlDeb='../debitors/add';
}


function getDebitor() {
    $.post('../debitors/getClientNo', {}, function (data) {
        $('#debitorNo').val(data);
        prepare_attention();
    })
}
function prepare_attention() {

    var id = $('#debitorNo').val();
    //prepare_fuelOrder();
    $('#dgattention').edatagrid({
        url: '../attentions/viewallId/' + id,
        saveUrl: '../attentions/addAttentions/' + id,
        updateUrl: '../attentions/edit/' + id,
        destroyUrl: '../attentions/delete/',
        onSuccess: function () {
            $('#dgattention').datagrid('reload');
        }
    });

}

function addDebitorAuto(x)
{
    $.messager.progress();
    var id = $('#debitorNo').val();
    if(x!="")
    {
        $.post('../attentions/addAttentions/' + id,{'name':x},function(data){
            $('#dgattention').datagrid('reload');
            $.messager.progress('close');
        });
    }else
    {
        $.messager.progress('close');
    }

}
function prepare_attention2() {

    var id = $('#debitorNo2').val();
    //prepare_fuelOrder();
    $('#dgattention2').edatagrid({
        url: '../attentions/viewallId/' + id,
        saveUrl: '../attentions/addAttentions/' + id,
        updateUrl: '../attentions/edit/' + id,
        destroyUrl: '../attentions/delete/',
        onSuccess: function () {
            $('#dgattention2').datagrid('reload');
            $('#attention').combobox('reload', '../attentions/viewcomboboxId/' + id);
        }
    });

}


function savedebitor() {
    saveForm('#frmdebitor', urlDeb, '#dlgdebitor', '#dgattention');
    $('#customerId').combobox('reload', '../debitors/viewcombobox');
    $('#customerId').combobox('reload', '../debitors/viewcombobox');
}
function getAttention(id) {
    $('#attention').combobox('reload', '../attentions/viewcomboboxId/' + id);
}


function openTemplate() {

    $('#dlgitemtemplate').dialog('open').dialog('setTitle', 'Zero Accounting +');
    //$('#frmdebitor').form('clear');
    $('#dgitemtemplate').datagrid('reload');
}
function loadTemplateSave() {
    var inv = invoiceNo;
    var id = "";
    var vat = '0'
    var headerId = $("#headerId").combobox('getValue');
    var rows = $('#dgitemtemplate').datagrid('getSelections');
    if ($("#vat").prop("checked")) {
        vat = 0.18;

    }
    if (rows.length == 0) {
        //$.messager.progress('close');
        $.messager.show({title: 'Help', msg: 'Select at list one row'});
    } else {
        for (var i = 0; i < rows.length; i++) {
            if (i == 0) {
                id = rows[i].id;
            } else {
                id = id + "-" + (rows[i].id);
            }
        }
    }
    //url
    if (headerId === "") {
        //alert("Empty")
        //$.messager.show({title:'Help',msg:'NO HEADER SELECTED'});
        $.post('../invoiceitems/add/' + inv, {itemTemplate: id, vat: vat}, function (data) {

            $('#dlgitemtemplate').dialog('close');
            $('#dgInvoiceItem').datagrid('reload');
            $('#dgInvoiceItem').datagrid('reload');

        });
    } else {
        $.post('../invoiceitems/add/' + inv, {headerId: headerId, itemTemplate: id, vat: vat}, function (data) {

            $('#dlgitemtemplate').dialog('close');
            $('#dgInvoiceItem').edatagrid('reload');
            $('#dgInvoiceItem').datagrid('reload');

        });
        //alert(headerId)
    }
    //save the


}

function searchTemplate(x)
{
    $('#dgitemtemplate').datagrid('reload',{'itemName':x});
}

function prepare_budget() {

    var id = $('#id').val();
    //prepare_fuelOrder();
    $('#dgbudget').edatagrid({
        url: '../budgets/viewall/' + id,
        saveUrl: '../budgets/add/' + id,
        updateUrl: '../budgets/edit/' + id,
        destroyUrl: '../budgets/delete/'+id,
        onSuccess: function () {
            $('#dgbudget').datagrid('reload');
        }/*
         onAdd:function(index,row){


         //alert($('#headerId').combobox('getValue'));
         var heading_id=$('#headerId').combobox('getValue')!==''&& $('#headerId').combobox('getValue')!==null?$('#headerId').combobox('getValue'):'';

         set_values(index);


         //alert(heading_id);
         }*/
    });

}

function archiveinvoice() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {
        //alert("You Dele"+row.itemName);
        if (!isNaN(parseInt(row.id))) {

            $.messager.confirm('Warning', 'Are you sure, about the action you to perform it not reverse able', function (r) {
                if (r) {
                    $.messager.progress();
                    $.post('../invoices/archive/' + row.id, {}, function (data) {
                        //$('#dgInvoiceItem').edatagrid('reload');
                        $('#dginvoice').datagrid('reload');
                        $.messager.progress('close');
                    });

                }
            });
        }
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
    $('#dgInvoiceItem').edatagrid('reload');
}
//JY 18012019 Add a function to open the duplicate invoice Dialog.
function duplicateInvoice() {
    var row = $('#dginvoice').datagrid('getSelected');
    if (row) {
        var id = row.id;
        //open the dialog.
        $('#dlgduplicateInvoice').dialog('open').dialog('setTitle', 'Duplicate Invoice');
        $('#frmduplicateInvoice').form('clear');
        $.post('getNumberNo', {id: id}, function (data) {
            var data2 = $.parseJSON(data);
            $('#frmduplicateInvoice').form('load', data2);
            $('#dgDuplicateItems').datagrid('load', {id: id});
            /*url='edit/'+data2.id;
             invoiceNo=data2.id;
             prepare_invoiceItem();
             prepare_budget();
             reloadHeading();*/
        });
        $.post('getNumberNo', {}, function (data) {
            var data2 = $.parseJSON(data);
            //$('#frmduplicateInvoice').form('load',data2);
            $('#idProforma').val(data2.countNo);
            //$('#dgDuplicateItems').datagrid('load',{id:id});
            /*url='edit/'+data2.id;
             invoiceNo=data2.id;
             prepare_invoiceItem();
             prepare_budget();
             reloadHeading();*/
        });
        //Query Back to get the json object.
        //$('#frmduplicateInvoice').form('load',row);


    }
}
function duplicateDialogSave() {
    saveForm('#frmduplicateInvoice', 'duplicateInvoice', '#dlgduplicateInvoice', '#dginvoice');
}

function loadList()
{
    $('#dlgbudgetitems').dialog('open').dialog('setTitle', 'Choose Budget Item to Load.. ');
    $('#dgbudgetitems').datagrid('reload');
}

function loadBudgetItem() {
    var inv = invoiceNo;
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
            $('#dgbudget').datagrid('reload');

        });

    //save the


}

function deletebudgetItem()
{
    var row=$('#dgbudget').datagrid('getSelected');
    if(row)
    {
        $.messager.confirm('Warning', 'Are you sure of the the act', function(r){
            if (r){
                $.post('../budgets/delete/'+row.id,{},function(data){ $('#dgbudget').datagrid('reload');});

        }
        });}
    else{
        $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}

}

function loadHeader()
{
    $('#dlgheaderTitles').dialog('open').dialog('setTitle', 'Choose Budget Item to Load.. ');
    $('#dgheaderTitles').datagrid('reload');
    //url2 = '../headertitles/add/' + invoiceNo;
}

function loadHeaderQuicky() {
    var inv = invoiceNo;
    var id = "";
    var vat = '0'
    //var headerId = $("#headerId").combobox('getValue');
    var rows = $('#dgheaderTitles').datagrid('getSelections');

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
                id = rows[i].id;
            } else
            {
                id = id + "-" + (rows[i].id);
            }
        }
    }
    //url

    //alert("Empty")
    //$.messager.show({title:'Help',msg:'NO HEADER SELECTED'});
    $.post('../headertitles/addFromList/' + inv, {ids: id}, function (data) {

        $('#dlgheaderTitles').dialog('close');
        $('#dgInvoiceItem').edatagrid('reload');
        $('#dgheaderTitles').datagrid('reload');
        $('#dgheadertitle').datagrid('reload');
        reloadHeading();

    });

    //save the


}
//Attention View:
$(function(){
    $('#dginvoice').datagrid({
        view:detailview,
        detailFormatter:function(index,row){
            return '<div style="width:650px;padding:2px"><table class="ddv"></table></div>';
        },
        onExpandRow:function(index,row){
            var ddv=$(this).datagrid('getRowDetail',index).find('table.ddv');
            ddv.datagrid({
                url:'../attentions/viewallId/'+row.customerId,
                fitColumns:true,
                singleSelect:true,
                rownumber:true,
                oadMsg:'Please wait the service information is loading',
                height:'auto',
                columns:[[{field:'name',title:'Contact Person',width:90},{field:'email',title:'Contact',width:90}]],
                onResize:function(){
                    $('#dginvoice').datagrid('fixDetailRowHeight',index);
                },
                onLoadSuccess:function(){
                    //alert(index);
                    setTimeout(function(){
                        $('#dginvoice').datagrid('fixDetailRowHeight',index);
                        //alert(index);

                    },0);
                }

            });
            $('#dginvoice').datagrid('fixDetailRowHeight',index);
        },onLoadSuccess:function(){
            //$('#dgTransaction').datagrid('expandRow',0);
        }

    });
});

function deleteattention(){
    var row=$('#dgattention').datagrid('getSelected');
    if(row)
    {
        $.messager.confirm('Warning', 'Are you sure of the the act', function(r){
            if (r){
            $.post('../attentions/delete/'+row.id,{},function(data){ $('#dgattention').datagrid('reload');});

                }
        });
    }
    else{
        $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}
}

function printInvoiceCopy()
{
    var row = $('#dginvoice').datagrid('getSelected');
    var typeInvoice="Quotation";
    if (row) {

        $.post('../invoiceitems/viewallItems/'+row.id,{},function(data) {

            var companyName = row.companyName;
            var attn = row.attn;
            var id = row.id;
            var creationDate = row.creationDate;
            var details = row.details;
            var dd2 = {
                content: [
                    {

                        style: 'tableExample',
                        table: {
                            widths: ['*', 'auto'],
                            body: [
                                [{
                                    image: 'data:image/jpeg;base64,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AQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAABAAAAOEJJTQQ7AAAAAAGyAAAAEAAAAAEAAAAAABJwcmludE91dHB1dE9wdGlvbnMAAAASAAAAAENwdG5ib29sAAAAAABDbGJyYm9vbAAAAAAAUmdzTWJvb2wAAAAAAENybkNib29sAAAAAABDbnRDYm9vbAAAAAAATGJsc2Jvb2wAAAAAAE5ndHZib29sAAAAAABFbWxEYm9vbAAAAAAASW50cmJvb2wAAAAAAEJja2dPYmpjAAAAAQAAAAAAAFJHQkMAAAADAAAAAFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBYAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAA4QklNA+0AAAAAABAAYAAAAAEAAQBgAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANdAAAABgAAAAAAAAAAAAAAXQAAAJkAAAAUAFAAYQBzAHQAZQBkAEcAcgBhAHAAaABpAGMALQAzAC4AdABpAGYAZgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAmQAAAF0AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAF0AAAAAUmdodGxvbmcAAACZAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAABdAAAAAFJnaHRsb25nAAAAmQAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAABAAAAAAAOY2VsbFRleHRJc0hUTUxib29sAQAAAAhjZWxsVGV4dFRFWFQAAAABAAAAAAAJaG9yekFsaWduZW51bQAAAA9FU2xpY2VIb3J6QWxpZ24AAAAHZGVmYXVsdAAAAAl2ZXJ0QWxpZ25lbnVtAAAAD0VTbGljZVZlcnRBbGlnbgAAAAdkZWZhdWx0AAAAC2JnQ29sb3JUeXBlZW51bQAAABFFU2xpY2VCR0NvbG9yVHlwZQAAAABOb25lAAAACXRvcE91dHNldGxvbmcAAAAAAAAACmxlZnRPdXRzZXRsb25nAAAAAAAAAAxib3R0b21PdXRzZXRsb25nAAAAAAAAAAtyaWdodE91dHNldGxvbmcAAAAAADhCSU0EKAAAAAAADAAAAAI/8AAAAAAAADhCSU0EEQAAAAAAAQEAOEJJTQQUAAAAAAAEAAAAAThCSU0EDAAAAAAPgwAAAAEAAACZAAAAXQAAAcwAAKccAAAPZwAYAAH/2P/tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAXQCZAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9VSSSSUpJJc39cPrv076r47fVHr5lv8ANYzTBj995/MYkp6RJeS/+Pflf+VbP+3D/wCRVnE/x3Y5cBmdNcxp5dU8GPk8NSU+opLnug/Xr6t9dIrxMkMvP+At9j/7O76S6FJSkklifWn61dN+rWAcrLO+12lGO0+558v5KSnbSXm/1c/xvVdS6pXg5+IMVmQ7ZVaxxcA4/R9Sf3l6QkpSS4j63f4z+ndAyvsOLV9uym/zoDoYz+S537653/x78j/yrZ/24f8AyKSn1lJeTf8Aj35H/lWz/tw/+RXY9C/xgdG6r0S/q1rvsgxNMmt5EtMS3Z+/vSU9QkvMG/47MY9Q9N2A4YJdHq7v0m39/ZG1elY2RVlY9eTQ7dVc0PY7xBEhJSVJJJJT/9D1VJJZX1m6u7ovQszqTG7349ZLGnjcdGpKc366/XXC+rGEQCLeoWg+hRP/AIJZ/IavJukdI6l9bepWdV6rY445dNtp5ef9BR/Jb/0FHo/TM/639Vu6l1O4uqa4G986knVtFQ/M/wC+L0SiinHpZRQwV1VjaxjdAAFm/EOf9kHFjN5Tuf3P/QmfDh4vVLZqs6H0ZjQ0YNENECa2njzI3IGT9V/q/ktIfg1tn86sFh/8D2oeT9b/AKv4t9mPdkObbU4se0VuMOGjuArHT/rD0bqTxXiZTXWnit0scf6rX7dyya52I4/1oG/F62x+rOnpeU6x9Qb8acro1rrNnu9FxiwR/orG7d63PqF/jMyKb2dG+sLy5hPp05T9HNd9H0710C5D68fVuu+h/V8Rm3IqE5DW/nt/0v8Axlf538hX+Q+JylIYs5vi0jP/AL5hy4ABxR+x9M+tP1s6d9W+nHLyHCy14/VqGnV57f2P5a8arr619eesvzc15bSD+ks/Mrb2ppb++qfS8bqP1p6nVj5eS5zaKwC95ktqZDdtbf3l6bhYWLgYrMXFYK6axAA5J/ed+89ys/EOfGAcENcsh/iR/eWYcXFqflD551HCxsD65Y2Jis9OmuzHDR/23LnH95y77/GH/jFZ02t/R+j2B2a4bb726ioH81v/AAq8++ultlP1ptuqO2ysVOY7wIa0grV+qf1Sdc5vVurtLtx300v1Lifd610/9SpRzMcXK48uQ2TAf3pypacZlkMY91vqp9UXZLh1XrDS9r/fVRZqXk6+rfP5v8j89dX+wui/9wMf/ttv9yvLiPrb9bXWud0npLi4uOy65mpcTp6NMf8ATcsiOTmedz+mRiP6pqOOLZIhijqL/a0frd1XowLundJxaAWmL8ljGzI/wdLo/wA+xYXTcfqPUHjpeFLhc8PcwaNkaepaf3K1GrpWbb1JvTAyMtz9hYSNDz7nfyV6h0DoGL0TE9KqH5DwDffGrj+6392tv7q08/MQ5LCIAmeQj08Rsn+vJghA5ZXsHh/rZ0HF6Ji9Ppq99zxYb7j+c4bOP3WM/MXtv1Q/8S/TP/C1f5F5L/jL+l0/4W/lrXrX1Q/8S/TP/C1f5FNyOSWTloTmblLiJ/xpLcoAmQNnZSSSVljf/9H1Vcz/AIx//EZ1L/ix+ULplzP+Mf8A8RnUv+LH5Qkp87/xb/0DM/41v/UrsFx/+Lf+gZn/ABrf+pXYLmPiP+68nmPyb2H+bD5th9Jxus/Xt/TcoubTkZVrXFmjhq86Lb+uf+K+3oOIeq9Jvffj0+61jtLGD/SNcz91Ufqz/wDlOr/8OW/9/Xq/146nh9O+rOc/KcB6tTq62HlznDa1rV0mP+bh/dDSl8x83hPqb123q3TnMyTuysUhr3d3NP8AN2O/le3at9zWvaWPG5rgWuB7g6FcP/i1ps3Z18H0yGMB8XS53/RXcrm+fhHHzUxDQWDp0J1b2IkwFvB/U3E+x/WrPxe1LLGD4B7Nv/RXeLjegva/689Vc3jbYPucxq7JP+JEnLEnc44Eow6RI8S4L/qxRlfWG7q+bFlYDBj08gua1rfUt/quH0FvJLh/rb9bXWud0npLi4uOy65mpcTp6NMf9NyZix5+bnGF+mAEb/QhCKZGOME9/wAVfW362utc7pPSXFxcdl97NS4nT0aY/wCm5dX/AIuv8XTenNr6z1lgdmOG7HodqKwfz3/8Kl/i6/xdN6c1nWOsVh2a4bqKHaisH893/Cr0ZdDy/LwwQEIDzPWUmlOZmbL4Kz/8pNv/AIbt/I9egrz5n/5Sbf8Aw3b+R69BWP8AGf56H9z/ALqTZ5b5T5vDf4y/pdP+Fv8A6LXrf1P/APEv0v8A8LV/kXkn+Mv6XT/hb/6LXrf1P/8AEv0v/wALV/kWl8N/3Jj+v/SkwZ/5yTsJJJK4xv8A/9L1Vcz/AIx//EZ1L/ix+ULplzP+Mf8A8RnUv+LH5Qkp87/xb/0DM/41v/UrsFx/+Lf+gZn/ABrf+pXYLmPiP+68nmPyb2H+bD5lbg9dt+sGfl9HrsNuPkWD1aiAWlxd3J/OarJ+rv1x61cwdVssFbP8Jkv3AD+RWHO3Lofqr/yj1z/w3/GxdGrmf4nmxS9qEY+mMfUfm+VjjgjL1G9y0+ldLxulYVeHjD2M1c48ucfpPd/WU+o51XT8G7MuMMpaXfE/mM/tPRcjIoxaXX5FjaqmCXPeYAXnn1g65lfWbOr6b0xjjjB3sbwXu73WfuMa1VeV5bJzWbilfDfFkmWTJMY40N+iX6g3Pv6/lXPMvsqe9x83PY4r0Jed/wCLxpb1vIaeW0OB+TmK59bPra65zuk9IcXbjsuuZqXE6ejTH/VK1zvKzz84IQFARjxS/RjFjxZBHHZ7q+tn1tfc93SekOLtx2XXM1LidPRpj/ql1n+Lr/F03pzWdY6xWHZrhuoodqKwfznf8Kl/i6/xdM6ayvrHWGB2a4bqKHaioH853/Cr0VavL8vDBAQgPM/pSk15zMzZXSSSUy18EZ/+Um3/AMN2/kevQV58z/8AKTb/AOG7fyPXoKwfjP8APQ/uf91Jt8t8p83hv8Zf0un/AAt/9Fr1v6n/APiX6X/4Wr/IvJP8Zf0un/C3/wBFr1v6n/8AiX6X/wCFq/yLS+G/7kx/X/pSYM/85J2EkklcY3//0/VVifXLpmR1X6tZ2Diib7a/0bfEj3bf7S20klPzp0zqn1i+r4uxKMYsc582Ntqc4hwG1Xf+e31q/wC47P8Atly9iZl5TczqAymVvo6ex1jnBo3WB49akfyfSqa5jv33qLut0sw/tFmG0PFj63sBBALKnZUh+z85gUM+WwTkZSxxlI9SFwySAoSL4ng/WPr/AE+7KupoG/Ms9W3fU4jdr9D+T7lcP1y+tt3sqpAceNlBJ/6W9e24+RXkZtmMMVoZVVXa607ebdxbXs27vzHe5DPUqa+rjpzcdmrSfVaRIc1vrbXt2e32/wDCb0pcrgkbljiT3IUMkxoJF8cw/qf9efrRc1+Y22un/S5JLWtH8in/AMwXp31Z+oPTPq9hWtq/T599bmWZTxr7ht21j8xivs+sRtw3X148P301sY54jde1j27nbfzN6WP1m0UVXX+7/J/2uxrQBLht3bVKIiIqIAHgtJJ3fC8vpv1g6L1LKwW0213XbqSWNJ3sLt36NwH5+1elf4uv8XTemtZ1frFYdnOG6mh2oqB/Od/wq7PD6jXlVtsuoLLhaaCGg2Brh+d6jWexn8t6rv6859OWWVGt+G5jHmQ73OtdTtiP9G31P+uJULJrUqdpJZNnWzXkZ1T6IGFU61p3ibA0B3tbt+j7tv8AI/wiHk/WIU4RyxRu222VmvfBIqBc97IY7d9H/wAzRU7SSpYuVbb1DLodHp0tpdWI1/SB7nT/AJqrP66a7c9llEDBYXt943PA03Bu36Dv3vfs/wAIkp8b+tnT+tfV/wCuGR1BlBcH3Oux7dhcxwf4x+7uQ/8Anz9aP9BX/wBsu/vXsV/XmMxWW3Yoc8uuY9m4EB1BLXbXFvu3omR1Cql2aBhtc3D9NofLRvfbs2t27fY1vq/TUWTBiyG5wjM/1ha4TlHQGnwvqGb9YPrNkY+PZjF9rCW1NqrLfpbZ3c/ur3zoGFb0/ouFhXfzlFLGPjxA1VV/V20ZGHU3DHqZLQ6w1kODAXtp0fW1zH+93/B/562U+EIwiIxHDEdAgkk2d10kkk5D/9T1VJJJJSL7PRusdsbuuAFpj6QA2jf/AGUD9ldNOO3GONWaGuLxXt03HTcriSSkbKaa3uexga9wa1zgNSGzsH9nch/YsT7T9r9Fn2giPVj3cbef6qsJJKajeldObQ7HbjVil5DnMDRBI+i7+yiDDxA0NFLA0V+iBAj0/wDRf1EdJJSHGxsfFqFOPW2qsSQ1ogSdSmOFiEWj0WRe4PtED3OEbXP/AM1HSSU1v2fhGy200M9S9pZa6BLmnRzXf1lA9J6a6luO7GrNLCXNZtEAnRx/tK4kkpGympj3WMaGveAHuHJDfoT/AFUL9n4Ifc/0Gb8gbbjA9wPId/WVlJJTUd0rpzqa6HY9ZqpJNbC3QE/SI/rSiWYmLY21tlTXNvj1gR9KBtbuR0klNX9m4H6H9BX+raUe0ez+qrSSSSlJJJJKf//ZADhCSU0EIQAAAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIABDAFMANQAAAAEAOEJJTQQGAAAAAAAHAAYAAAABAQD/4Q3NaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNS0xMC0xOVQxMzoyMzoyNS0wNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTUtMTAtMTlUMTM6NTU6NDktMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTUtMTAtMTlUMTM6NTU6NDktMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQkIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkRBQjBCNUM2QTM3NkU1MTFBRUFBQ0JBQTk0MUVGOTA2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQUIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgc3RFdnQ6d2hlbj0iMjAxNS0xMC0xOVQxMzoyMzoyNS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQkIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgc3RFdnQ6d2hlbj0iMjAxNS0xMC0xOVQxMzo1NTo0OS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGRAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQoJCg0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAXQCZAwERAAIRAQMRAf/dAAQAFP/EAaIAAAAHAQEBAQEAAAAAAAAAAAQFAwIGAQAHCAkKCwEAAgIDAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAACAQMDAgQCBgcDBAIGAnMBAgMRBAAFIRIxQVEGE2EicYEUMpGhBxWxQiPBUtHhMxZi8CRygvElQzRTkqKyY3PCNUQnk6OzNhdUZHTD0uIIJoMJChgZhJRFRqS0VtNVKBry4/PE1OT0ZXWFlaW1xdXl9WZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo+Ck5SVlpeYmZqbnJ2en5KjpKWmp6ipqqusra6voRAAICAQIDBQUEBQYECAMDbQEAAhEDBCESMUEFURNhIgZxgZEyobHw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',
                                    width: 120,
                                    height: 50
                                },
                                    {
                                        text: 'DIGITAL VISUAL INTERFACE LIMITED \n Diamond Trust Build Suite 407\n Plot 18/19 Kampala Road\n Email:Info @ dviuganda.com \nTel:+256(0)772 699467',
                                        style: 'address'
                                    }]
                            ]
                        },
                        layout: 'noBorders'

                    },
                    {
                        text: typeInvoice,
                        style: 'header'
                    },
                    {
                        style: 'tableAttention',
                        headerRows: 3,
                        table: {
                            widths: ['*', '*', 'auto'],
                            body: [
                                ['Invoice To', 'Invoice No', 'Date'],
                                [{rowSpan: 3, text: companyName + '\n' + attn}, id, creationDate],
                                ['', 'PO Number:', 'Invoice Descritption'],
                                ['', '.', details]
                            ]
                        }
                    },
                    table(JSON.parse(data),['itemDescrpiton','quantity','unitPrice','day','total'],[{fillColor: '#eeeeee','text':'Description','style':'tableHeader'},{fillColor: '#eeeeee','text':'Quantity','style':'tableHeader'},{fillColor: '#eeeeee','text':'Rate','style':'tableHeader'},{fillColor: '#eeeeee','text':'No Days','style':'tableHeader'},{fillColor: '#eeeeee','text':'Total','style':'tableHeader'}])
                    ,
                    {
                        style: 'notes',
                        ol: [
                            'Set up shall be a day before the Event',
                            'Cost includes Transport, Delivery, setup and technical support',
                            'Payment within 14 days from the day of that Event with a local purchase order prior is for only DVI \n registered clients otherwise 100% payment Prior to the service'

                        ]

                    },
                    {
                        style: 'footernotes',
                        text: [
                            {
                                text: 'All payments are to be made in the name of DIGITAL VISUAL INTERFACE LIMITED\n',
                                style: 'notes2'
                            },
                            {text: 'Bank Detail\n', style: 'notes2'},
                            'BANK:DFCU BANK\n',
                            'ACCOUNT NAME::DIGITAL VISUAL INTERFACE\n',
                            'ACCOUNT NUMBER:UGX: (01023500120267) / USD: (02013551642548)\n',
                            'BRANCH::PLOT 66 WILLIAM STREET- KAMPALA /PLOT 13 KIMATHI AVENUE- KAMPALA\n',
                            'SORT CODE:502\n',
                            'SWIFT CODE:DFCUUGKA\n',
                            'INTERMEDIARY BANK:CITI BANK\n',
                            'COMPANY REG NO.560709\n'
                        ]

                    }


                ],

                styles: {
                    footernotes: {
                        fontSize: 8,
                        bold: true, margin: [0, 5, 0, 15]
                    },
                    notes: {
                        fontSize: 10,
                        bold: false
                    },
                    notes2: {
                        fontSize: 10,
                        bold: true, margin: [0, 5, 0, 15]
                    },
                    address: {
                        margin: [0, 0, 0, 0], bold: true,
                        fontSize: 7,
                        color: 'black'
                    },
                    tableAttention: {
                        fontSize: 9,
                        margin: [0, 5, 0, 15]
                    }, tableInvoice: {
                        fontSize: 7,
                        margin: [0, 5, 0, 15]
                    },
                    tablefont:{fontSize:9},
                    tableHeader:{fontSize:10,bold: true,alignment: 'center'},
                    tableNumber:{fontSize:9,alignment: 'right'},
                    tableWord:{fontSize:9,alignment: 'left'},
                    tableExample: {
                        margin: [0, 5, 0, 15]
                    },
                    header: {
                        fontSize: 18,
                        bold: true,
                        alignment: 'center',
                        margin: [0, 0, 0, 20]
                    }


                }
            };
            pdfMake.createPdf(dd2).open();


        });
    }

}

function printTaxInvoiceCopy()
{
    var row = $('#dginvoice').datagrid('getSelected');
    var typeInvoice="INVOICE";
    if (row) {

        $.post('../invoiceitems/viewallItems/'+row.id,{},function(data) {

            var companyName = row.companyName;
            var attn = row.attn;
            var id = row.id;
            var taxInvoiceId=row.taxinvoiceId;
            var creationDate = row.creationDate;
            var details = row.details;
            var dd2 = {
                content: [
                    {

                        style: 'tableExample',
                        table: {
                            widths: ['*', 'auto'],
                            body: [
                                [{
                                    image: 'data:image/jpeg;base64,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AQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAABAAAAOEJJTQQ7AAAAAAGyAAAAEAAAAAEAAAAAABJwcmludE91dHB1dE9wdGlvbnMAAAASAAAAAENwdG5ib29sAAAAAABDbGJyYm9vbAAAAAAAUmdzTWJvb2wAAAAAAENybkNib29sAAAAAABDbnRDYm9vbAAAAAAATGJsc2Jvb2wAAAAAAE5ndHZib29sAAAAAABFbWxEYm9vbAAAAAAASW50cmJvb2wAAAAAAEJja2dPYmpjAAAAAQAAAAAAAFJHQkMAAAADAAAAAFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBYAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAA4QklNA+0AAAAAABAAYAAAAAEAAQBgAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANdAAAABgAAAAAA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b3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNS0xMC0xOVQxMzoyMzoyNS0wNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTUtMTAtMTlUMTM6NTU6NDktMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTUtMTAtMTlUMTM6NTU6NDktMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQkIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkRBQjBCNUM2QTM3NkU1MTFBRUFBQ0JBQTk0MUVGOTA2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQUIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgc3RFdnQ6d2hlbj0iMjAxNS0xMC0xOVQxMzoyMzoyNS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQkIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgc3RFdnQ6d2hlbj0iMjAxNS0xMC0xOVQxMzo1NTo0OS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGRAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQoJCg0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAXQCZAwERAAIRAQMRAf/dAAQAFP/EAaIAAAAHAQEBAQEAAAAAAAAAAAQFAwIGAQAHCAkKCwEAAgIDAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAACAQMDAgQCBgcDBAIGAnMBAgMRBAAFIRIxQVEGE2EicYEUMpGhBxWxQiPBUtHhMxZi8CRygvElQzRTkqKyY3PCNUQnk6OzNhdUZHTD0uIIJoMJChgZhJRFRqS0VtNVKBry4/PE1OT0ZXWFlaW1xdXl9WZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo+Ck5SVlpeYmZqbnJ2en5KjpKWmp6ipqqusra6voRAAICAQIDBQUEBQYECAMDbQEAAhEDBCESMUEFURNhIgZxgZEyobHw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',
                                    width: 120,
                                    height: 50
                                },
                                    {
                                        text: 'DIGITAL VISUAL INTERFACE LIMITED \n Diamond Trust Build Suite 407\n Plot 18/19 Kampala Road\n Email:Info @ dviuganda.com \nTel:+256(0)772 699467',
                                        style: 'address'
                                    }]
                            ]
                        },
                        layout: 'noBorders'

                    },
                    {
                        text: typeInvoice,
                        style: 'header'
                    },
                    {
                        text: 'TIN:1000355522',
                        style: 'tinNumber'
                    },
                    {
                        style: 'tableAttention',
                        headerRows: 3,
                        table: {
                            widths: ['*', '*', 'auto'],
                            body: [
                                ['Invoice To', 'Invoice No', 'Date'],
                                [{rowSpan: 3, text: companyName + '\n' + attn}, taxInvoiceId, creationDate],
                                ['', 'PO Number:', 'Invoice Descritption'],
                                ['', '.', details]
                            ]
                        }
                    },
                    table(JSON.parse(data),['itemDescrpiton','quantity','unitPrice','day','total'],[{fillColor: '#eeeeee','text':'Description','style':'tableHeader'},{fillColor: '#eeeeee','text':'Quantity','style':'tableHeader'},{fillColor: '#eeeeee','text':'Rate','style':'tableHeader'},{fillColor: '#eeeeee','text':'No Days','style':'tableHeader'},{fillColor: '#eeeeee','text':'Total','style':'tableHeader'}])
                    ,
                    {
                        style: 'notes',
                        ol: [
                            'Set up shall be a day before the Event',
                            'Cost includes Transport, Delivery, setup and technical support',
                            'Payment within 14 days from the day of that Event with a local purchase order prior is for only DVI \n registered clients otherwise 100% payment Prior to the service'

                        ]

                    },
                    {
                        style: 'footernotes',
                        text: [
                            {
                                text: 'All payments are to be made in the name of DIGITAL VISUAL INTERFACE LIMITED\n',
                                style: 'notes2'
                            },
                            {text: 'Bank Detail\n', style: 'notes2'},
                            'BANK:DFCU BANK\n',
                            'ACCOUNT NAME::DIGITAL VISUAL INTERFACE\n',
                            'ACCOUNT NUMBER:UGX: (01023500120267) / USD: (02013551642548)\n',
                            'BRANCH::PLOT 66 WILLIAM STREET- KAMPALA /PLOT 13 KIMATHI AVENUE- KAMPALA\n',
                            'SORT CODE:502\n',
                            'SWIFT CODE:DFCUUGKA\n',
                            'INTERMEDIARY BANK:CITI BANK\n',
                            'COMPANY REG NO.560709\n'
                        ]

                    }


                ],

                styles: {
                    footernotes: {
                        fontSize: 8,
                        bold: true, margin: [0, 5, 0, 15]
                    },
                    notes: {
                        fontSize: 10,
                        bold: false
                    },
                    notes2: {
                        fontSize: 10,
                        bold: true, margin: [0, 5, 0, 15]
                    },
                    address: {
                        margin: [0, 0, 0, 0], bold: true,
                        fontSize: 7,
                        color: 'black'
                    },
                    tableAttention: {
                        fontSize: 9,
                        margin: [0, 5, 0, 15]
                    }, tableInvoice: {
                        fontSize: 7,
                        margin: [0, 5, 0, 15]
                    },
                    tablefont:{fontSize:9},
                    tableHeader:{fontSize:10,bold: true,alignment: 'center'},
                    tableNumber:{fontSize:9,alignment: 'right'},
                    tableWord:{fontSize:9,alignment: 'left'},
                    tableExample: {
                        margin: [0, 5, 0, 15]
                    },
                    header: {
                        fontSize: 18,
                        bold: true,
                        alignment: 'center',
                        margin: [0, 0, 0, 20]
                    }
                    ,tinNumber: {
                        fontSize: 10,
                        bold: true,
                        alignment: 'right',
                        margin: [0, 0, 0, 0]
                    }


                }
            };
            pdfMake.createPdf(dd2).open();


        });
    }

}


function buildTableBody(data, columns,actuals) {
    var body = [];

    body.push(actuals);

    data.forEach(function(row) {
        var dataRow = [];
        var header=false;
        columns.forEach(function(column) {
            if(column=='itemDescrpiton')
            {
                /*var col=row[column].toString();
                */
                if(row[column].toString()==" ")
                {
                    dataRow.push({'border': [true, false, false, true],'text':row[column].toString(),style:'tablefont'});
                }else
                {
                    var col=row[column].toString();
                    if(col.includes("\\n"))
                    {
                        var x=col.replace("\\n","\n");
                        //var x={'text':row[column]};
                        dataRow.push({'text':x,style:'tablefont'});
                    }else
                    {

                        dataRow.push({'border': [true, false, false, false],'text':col,'noWrap':true,style:'tablefont'});

                    }
                }



            }else
            {
                if(row[column]==null||row[column]==" ")
                {
                    if(column=='total')
                    {
                        dataRow.push({'border': [false, false, true, false],'text':row[column].toString(),style:'tablefont'});
                    }else
                    {
                        dataRow.push({'border': [false, false, false, true],'text':row[column].toString(),style:'tablefont'});
                    }

                }else
                {
                    dataRow.push({'text':row[column].toString(),style:'tablefont'});
                }

            }

        })

        body.push(dataRow);
    });

    console.log(body);
    return body;
}

function table(data, columns,actuals) {
    return {
        table: {
            style:'tableInvoice',
            headerRows:1,
            widths:['auto','*','*','*','auto'],
            body: buildTableBody(data, columns,actuals)
        }
    };
}




function printInvoiceCopyx()
{
    var row = $('#dginvoice').datagrid('getSelected');
    var typeInvoice="Quotation";
    if (row) {
        var dd = {
            content: [
                'First paragraph',
                'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
            ]

        };

        var dd2={
            content:[
                {

                    style: 'tableExample',
                    table:{
                        widths: ['*','auto'],
                        body: [
                            [{image:'data:image/jpeg;base64,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',width:120,height:50},
                                {text: 'DIGITAL VISUAL INTERFACE LIMITED \n Diamond Trust Build Suite 407\n Plot 18/19 Kampala Road\n Email:Info @ dviuganda.com \nTel:+256(0)772 699467',style:'address'}]
                        ]
                    },
                    layout:'noBorders'

                },
                {
                    text:typeInvoice,
                    style:'header'
                },
                {
                    style:'tableAttention',
                    headerRows:3,
                    table:{
                        widths:['*','*','auto'],
                        body:[
                            ['Invoice To','Invoice No','Date'],
                            [{rowSpan:3,text:'Attn'},'A','A'],
                            ['','PO Number:','Invoice Descritption'],
                            ['','A','A']
                        ]
                    }
                },
                {
                    style:'tableInvoice',
                    headerRows:1,
                    table:{
                        widths:['*','*','*','*','auto'],
                        body:
                        [
                            ['Description','Quantity','Rate','No Days','Total Curr'],
                        ]
                    }
                },
                {
                    style:'notes',
                   ol:
                   [
                       'Set up shall be a day before the Event',
                       'Cost includes Transport, Delivery, setup and technical support',
                       'Payment within 14 days from the day of that Event with a local purchase order prior is for only DVI \n registered clients otherwise 100% payment Prior to the service'

                   ]

                },
                {
                    style:'footernotes',
                    text:[
                        {text:'All payments are to be made in the name of DIGITAL VISUAL INTERFACE LIMITED\n',style:'notes2'},
                        {text:'Bank Detail\n',style:'notes2'},
                        'BANK:DFCU BANK\n',
                        'ACCOUNT NAME::DIGITAL VISUAL INTERFACE\n',
                        'ACCOUNT NUMBER:UGX: (01023500120267) / USD: (02013551642548)\n',
                        'BRANCH::PLOT 66 WILLIAM STREET- KAMPALA /PLOT 13 KIMATHI AVENUE- KAMPALA\n',
                        'SORT CODE:502\n',
                        'SWIFT CODE:DFCUUGKA\n',
                        'INTERMEDIARY BANK:CITI BANK\n',
                        'COMPANY REG NO.560709\n'
                    ]

                }
            ],
            styles:{
                footernotes:{fontSize:8,
                bold:true,margin:[0,5,0,15]},
                notes:{fontSize:10,
                    bold:false},
                notes2:{fontSize:10,
                    bold:true,margin:[0,5,0,15]},
                address:{margin:[0,0,0,0],bold: true,
                    fontSize: 7,
                    color: 'black'},
                tableAttention:{
                    fontSize: 9,
                    margin: [0, 5, 0, 15]
                },tableInvoice:{
                    fontSize: 9,
                    margin: [0, 5, 0, 15]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment:'center',
                    margin:[0,0,0,20]
                }


            }
        };
        //pdfMake.createPdf(dd2).open();
        //
        // pdfMake.createPdf(dd2).getDataUrl(function(dataUrl){
        //     var pdfFile = dataUrl;
        //     //alert(pdfFile);
        //     //upload code goes here
        // });
        //pdfMake.createPdf(dd2);
        pdfMake.createPdf(dd2).getBase64(function(data){
                //alert(data);
            $.post('savePDF/',{file:data},function(responseData){
//fileName.
            })
    });



    }
    else {
        //$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    }
}

function sendEmailTaxInvoice()
{
    var row = $('#dginvoice').datagrid('getSelected');
    var typeInvoice="INVOICE";
    if (row) {

        $.post('../invoiceitems/viewallItems/'+row.id,{},function(data) {

            var companyName = row.companyName;
            var attn = row.attn;
            var id = row.id;
            var taxInvoiceId=row.taxinvoiceId;
            var creationDate = row.creationDate;
            var details = row.details;
            var dd2 = {
                content: [
                    {

                        style: 'tableExample',
                        table: {
                            widths: ['*', 'auto'],
                            body: [
                                [{
                                    image: 'data:image/jpeg;base64,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AQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAABAAAAOEJJTQQ7AAAAAAGyAAAAEAAAAAEAAAAAABJwcmludE91dHB1dE9wdGlvbnMAAAASAAAAAENwdG5ib29sAAAAAABDbGJyYm9vbAAAAAAAUmdzTWJvb2wAAAAAAENybkNib29sAAAAAABDbnRDYm9vbAAAAAAATGJsc2Jvb2wAAAAAAE5ndHZib29sAAAAAABFbWxEYm9vbAAAAAAASW50cmJvb2wAAAAAAEJja2dPYmpjAAAAAQAAAAAAAFJHQkMAAAADAAAAAFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBYAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAA4QklNA+0AAAAAABAAYAAAAAEAAQBgAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANdAAAABgAAAAAA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b3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNS0xMC0xOVQxMzoyMzoyNS0wNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTUtMTAtMTlUMTM6NTU6NDktMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTUtMTAtMTlUMTM6NTU6NDktMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQkIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkRBQjBCNUM2QTM3NkU1MTFBRUFBQ0JBQTk0MUVGOTA2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQUIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgc3RFdnQ6d2hlbj0iMjAxNS0xMC0xOVQxMzoyMzoyNS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQkIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgc3RFdnQ6d2hlbj0iMjAxNS0xMC0xOVQxMzo1NTo0OS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGRAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQoJCg0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAXQCZAwERAAIRAQMRAf/dAAQAFP/EAaIAAAAHAQEBAQEAAAAAAAAAAAQFAwIGAQAHCAkKCwEAAgIDAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAACAQMDAgQCBgcDBAIGAnMBAgMRBAAFIRIxQVEGE2EicYEUMpGhBxWxQiPBUtHhMxZi8CRygvElQzRTkqKyY3PCNUQnk6OzNhdUZHTD0uIIJoMJChgZhJRFRqS0VtNVKBry4/PE1OT0ZXWFlaW1xdXl9WZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo+Ck5SVlpeYmZqbnJ2en5KjpKWmp6ipqqusra6voRAAICAQIDBQUEBQYECAMDbQEAAhEDBCESMUEFURNhIgZxgZEyobHwFMHR4SNCFVJicvEzJDRDghaSUyWiY7LCB3PSNeJEgxdUkwgJChgZJjZFGidkdFU38qOzwygp0+PzhJSktMTU5PRldYWVpbXF1eX1RlZmdoaWprbG1ub2R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo+DlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+v/aAAwDAQACEQMRAD8A+/mKuxV2KuxV2KuxV2KuxV2KuxV2KuxV2KuxV2KuxV2KuxV2KuxV/9D7+Yq7FXYq+Jv+cwP+c3Py5/5xK0G1/S0P+KfPmtAnQvJNrKqTMnee4f4vSjHiRU9u1VX5e/8ARbzzTU0/InTKf9tWb/qlh2TRZx5T/wCf2+gTXUUXnb8k72xtXYCW60jUEmKDx4TpHX78UU/SH8if+c6f+ccP+cgmg0/yb55h07zLMP8AlFtaH1G9LeEaynjJ/sScCvsLFXYq+YP+co/+cqfy5/5xW8iS+bPOdz9e1i8Bi8seUbd1F5qM9OiA/ZQftMdhir87/wDnHT/n71pf5p/mjo35ffmJ+XUHkqw813i2Gg+YLG7e4SK4lNIlukkVaBzQVXucVftf1xV+Wn/OW/8Az89/L3/nHPzQPIHlDQV/MzznZ76/HFdCGysD2iklVWLSew6d8VfGn/Rb3zD/AOWHsP8AuLS/9UcbTRXD/n97r4Ir+Q9hSu9NWl/6o4rT9I/yJ/5z+/Jr83/yV8z/AJxaxdDyFB5C+DzrouoTIz28rJzjEDfD6ok/YoK12xQ+Frf/AJ/X+WpPP6afP+UdzD+XL3no/p8XtdREHLj65t+HClPi41rT3xV+3vlrzFpPm7y/ovmjQrpb3Rtfs4b/AEy6XpJDOgdG+44qnuKuxV//0fv5irsVfC//ADmr/wA5q+Tf+cUfJsiRyQa9+aWvQOPKXlMOCVNKfWrqn2YkO+/X9aLQT0D+en8pPyl/Mn/nMr8ydY/N383dXvrjyxNfGTXtdlJWS+dTUafp/LZUQbMw2QeLHOG9sfbHF2NiMMZBzy5D+b5n9A+J257fs3sw6g2fpfqdafkf+TVna29pF+VXlX0raNYouel20jcUFByd0Z2NO5JJ754Dl9sO1ZzJOeQvzL1kdBhEaEWM+Y/+cXf+cf8AzRBLBf8A5W6PZNKKfWtKRtPmU+Ie2MYr8wczdL7edsYJCsxNd+/3sZ9l4JRoxfCv5w/84E675WWXzb+R2uXurtppNyPLNxIItTh4VPOzuY+AlI7KQr+BY7Z6f7Pf8FDBqJjFqxwH+cOR94/V8nQ63sI4/Vj3Hc+qP+cDf+fl+vaLrml/kh/zklqMtzZSTppvlzz5f1S6sp1Pprbajy3Ir8PI7g7H39ZhLxAJRNgvPSiRKi/W3/nKb/nLD8uv+cXvy6l84+ZL2LVNb1OEjyZ5Xt5FafUpiKoV4naLoWfpTJCr3Y2/mi07Tfzn/wCfgP5zan54886rNbeX7eYDV9YCk2elWdeSWNhG2zSleg/2TUAAzl/aj2nwdiYCZHiyH6Y9/mfL7+XmNloOz5amX9HvQH5jeSvLX5d/85keRvKHlLTl0rQtG1nynFZ2wJLMSLVnlkdt2d2JZ2PU1x9ju0s3aHZ8M+Y3KRN/NHaWAafMYRfrp/z8M/5+K2v5XafqX5KfknqsN7+Yd3B9W80earZhJHo8ci0aKEjYzkH/AGPX59RXCHXC7p+eP/OKn/OJE/meaH83vzssZNQt9Sc3vl/ytqVXkv3lPP67qAfco1aqjbv9pvhoG8g9ufb4aa9No5ev+KQ6eQ/W9L2X2QJevKPg/QMfkb+SxNB+UnlL/uE23/NGeVj2t7XlQGeV+8u/loNP1iH5af8AOW35qfk5FLe/ln+TvkDyrBJbyel5p882Om2wcSRtva2EoTYAikko6/ZU0qT7b7Fdm9pHGNTrssjxfTEk/M/o+fLny/aebDfDjAt8p/lv5f8AzE/Mi6t/ym8ji4vIPMV/HfX2mRtwtucC8Bc3b9o4FYmrbAnYFiM7ftXtPT9m4JZ80uGMft8h5/jk6vTafJnlww5voT/nK78h/LP5DeV/yh0LSG/SWvanFqs/mrzG4KteXCG1ACJ+xFHUiNevUmpJzkfYz2mydt5tRkltCJiIx7hv83Ydp6H8oIDvf1If84gn/rGD8iu//OnaZ/yaGd6STuXTjfd9I4pdir//0vv5irwX/nJr83JvyL/Iv8xfzTs7FdR1Dyrpck+mWb/Ya5chIufsGIJxV/Lh+UH5aeff+c0vzU8yfmf+a3mO4vtEtrxJfNmqmT9/PJJV4tPs0+L0149W6Ivixzi/bP2tj2Jp9t8svp8vP9Q/B2vZfZ35iVn6Q/ZjRNE0ny3pGm+X/L+mwaRo2kwLbaZplsoSKGJOigfiSdySSak58ya3V5dblllyEmUju9viwxxih0fP3mT/AJy9/IDynrereXNc84XNvrGh3c1lqdpFpl3KEngYpInNI6GjAioNM63Sf8D3tbUwjkx4wYyFg8URt83Ay9r4McqJZf8Al/8A85Cfk1+Z92mm+TfPVlfavL/c6LdK9ldyePpxXAjL/JanNd2p7Hdp9nxM82IiI6jcfY24O0sOU1GT2fcexGcuQY1IucDQ4i/Ob/nOD/nHCx8w6DqH5y+TrBbbzRoUfrec7O3XiNQs1oDd0X/d0AoXP7SVJ3UV9l/4HHtdOGUaHPK4H6D/ADT3e4/f8Xm+2ezokeNDY9z4l/K/yz+Yf/OXX5leXvLXm/ztd3ln5W0eKO51O9kMslno9j6cXpW0Z2MjllFT1J5MTSmere0vbsex9HLUSHEeQHn5ug0OkOpmIB+5PkryV5Z/LzyzpflDyhpcekaDpEfC3tk3d2b7c0z9Xkc7sx3J9qDPlXtXtXUdo55ajPK5Se8waaOngIDk/Fv/AJzO1XUND/5yj17WdJuWs9U0qPRrvT7pQC0c0VnA6OOXIVBAO+fSP/A4kB2NiJ8/veM7ZB/Mmn0B/wA4nf8AOJd1rVzafnL+c9nJeNey/pHy15Y1GryXcsh9QX9+H3KknkqN9r7TbUB5T279vBiEtHoperlKQ+4fpP6Oew7J7K4qnN+p/U/5gDPDd8kq5yL1G4D8s/8AnLT/AJy0uNUuLz8mvybu5LyS8f8AR/mfzPpxLyXEkh4GwsCm5DE8ZHX7X2V2qT7j7BewfgiOs1Ys84xP3n9A6+7ny/a3at/u8Z+L89dM/Kvzrq35kWn5Uw6WIfO11fjTn0uaRFWGbjzf1JASAI1qW60oep2z1nXa7HosEs+U1CI3efw4pZpCIfu5+QP5B+VvyG8qLpOlrHqXmbUkR/Nfmlk4y3Uq7+lHy3SCM14p3+0ak58v+1ftZm7bz3P04wTwx7v1k9XutD2dHTwFfU+Jf+flf99+UX/GLWP+JWuejf8AAg+jUe+P6XTe0VkwJ839D3/OINP+hX/yK/8AAO03/k0M9mlu8uDb6RxS7FX/0/v5ir4e/wCfjv8A6xr+dP8A2y4v+T8eEIL8Zv8An27/AMoD+Y//AG3rT/qFOeD/APBf/vsHuP3l672f/u5P0fXqvzzx6H1j3vRS5PxK8m/lT5c/O/8A5zs1P8rfNk93baD5u876za39zYOI7iMK9w4ZGZWGxUdRvn2B7Pf8Z+H+oPufO9d/ey976h/5zL/59g6p/wA48+Urj83vyd81al5o8reW2S48wabeKqajp8akUu4pYOPNUNCdgR1r2zbTxiYIIsFxYyrd6p/zht+eepfnH+Xl5Y+Z7n655y8kTRWeqXzfbvLWVS1rcyf5fwMjnuVDdWz5t/4Ins1j7L1IyYdseSyB3HqHtuxtb48CD0fXNxa217bXFleQrcWd7FJb3UDiqyRSqUdSO4IJGef6XL4M4zGxt28ocZN9z8of+cOPKv8Agf8A5yo/NryiKmPy9p2r2MDHq0MWoW4jP0pQ5717d6warsDFl58VfOjf2vKdlYvD1Ug/WTPn6tgHreb5Pu/+cYtE81/85BeYvzm89LBq2lQppyeUfLJ+OOSe1tYo3ubwHYhHQ8Y+hO7bUB9Cx+2k9H2Nj0On2nvxH3nkPhz/AFc9UOzRl1Byz+D6x3OcCCchA5yLtIgQBfll/wA5Z/8AOWdxq1zefk3+Td5JdvdyHT/M/mfTyXkuXc8DYWBTchj8Mjr9r7K7VJ9z9g/YPwq1mrFk7xifvP6B193Plu1+1j/d4zs/QD/n3V/z7qt/y1g0n87/AM7tKju/P11Gl15R8p3Ch49ISRarPODsZyD/ALH8T7IaG4eZvv5vzFs//kkuvf8AmwNY/wCTU+cp7cf8Y2f3D/dB2HZX+MRfsNnygX0Avys/5+Wf335Rf8YtY/4la57n/wACD+61Hvj+l5b2i5w+L+h//nEH/wBZf/Ir/wAA7Tf+TQz2g83l30hgS7FX/9T7+Yq+Hv8An47/AOsa/nT/ANsuL/k/HhCC/Gb/AJ9u/wDKA/mP/wBt60/6hTng/wDwX/77B7j95eu9n/7uT9H16r888eh9Y970UuRfkt/zjSK/8/ONGA3P/KwtZ/Xc59gez/8Axn4f6g+5861399L3v6Df+c3/AMy/KP5Zf84z/mpqHmu8gj/TWh3Wk6NpsrL6l5eXaGOKKND13Nfambm3EfgT/wA+2NFv1m/NTzC0brpTw6bp0Un7MlwGmlYD3RSP+CHjni//AAXc8PD0+P8Ai9R+dfqeo9nsdmZ9z9UaZ4bDeYB5vTk3HZ+a/wCQ13Be/wDOcX5+3FsQ0RttVjqOnKK8tY2/4ZTnt3tNiOP2YwRP4uy81pJA66QfpRniL0/KTvbDjxmchwqT/E/LL/nLT/nLO61i5uvya/Ju7kvGvJfqHmbzLp5LyXUkh4GwsCm5Un4ZHX7R+Fdqk+6+wnsJHEI6zWR9R3jE/ef0Dr7ufJ9q9q8V48Z979BP+fdf/Puq2/LS20v87fzu0mO8/MC7jS68p+VLhQ8ekRutVmmBqDOQf9j+J9juhTzRJ5v2jpkQKT5v5H7P/wCSS69/5sDWP+TU+ct7cf8AGNn9w/3Qdh2V/jEX7DZ8oPoBflZ/z8s/vvyi/wCMWsf8Stc9z/4EH91qPfH9Ly3tFzh8X9D/APziD/6y/wDkV/4B2m/8mhntB5vMPpDArsVf/9X7+Yq+Hv8An47/AOsa/nT/ANsuL/k/HhCC/Gb/AJ9u/wDKA/mP/wBt60/6hTng/wDwX/77B7j95eu9n/7uT9H16r888fh9Y970UuT8MdU8j/nnrH/OQP5tec/yS0nVpdY8q+b9TibXtIkjims5bmadQA7upBdOW498+qND27ouzdBp/wAzkEDKAqwTe3kHhc2iyajLMwje7OJf+cdf+cxvz31nTovze1jWINMsXAGsea9SFwlujfbaC1SV3dqeAFe7DMTtH/gi9k4IXDJ4khyiAR9pH61wdjZZbSjwv1Q/Kr8sfLX5Q+SdJ8j+V42+paeDLd30oHr3l3LT1biWm3JyBQDZVCgbDPnv2g7ez9r6qWfLyPIdw8nsdHpI6fHwdEy/MPzxpX5b+SPMvnjWpVjsfLtnJchGNDNNSkECeLSSFVA98p7A7Ly9oazHhxjeR+TLV6iOnxEl+VH/ADgLq15r/wCfnnrW9Qk9W+1jQNQvbyQ/tS3F7byOfvY57r/wSsAxdjwxx5RIHyBDyvZE71JkX7FZ87RE5ekCy9kZC+Ivyx/5yy/5yzutaurv8m/yavJbtruX9H+ZfMun8nku5ZDwNhYFNypPws67t9ldqk+6ewnsJ4IGs1gsneMT08z+gfo58r2v2sb8LEdn6D/8+6/+fdVt+WVtpX52fnbpUd5+YN3Gl15U8qXKh00iOQVE0ynYzkH/AGP6/ZdhyeZvd+0eBXYq/kds/wD5JLr3/mwNY/5NT5yntx/xjZ/cP90HYdlf4xF+w2fKD6AX5Wf8/LP778ov+MWsf8Stc9z/AOBB/daj3x/S8t7Rc4fF/Q//AM4g/wDrL/5Ff+Adpv8AyaGe0Hm8w+kMCuxV/9b7+Yq+Hv8An47/AOsa/nT/ANsuL/k/HhCC/Gb/AJ9u/wDKA/mP/wBt60/6hTng3/Bf/vsHuP3l672f+iT9H16j554/j+se96KXJ8Yf84sf+TC/5yp/8D8/8Tu89M9vf8V0P/C3S9l+nLk977OzzAb+8u72AtJ/MHmDQ/Kmj3nmDzNq1roWiaehku9TvZBFEgXtU9S3ZRUnsMzdD2bqdZkGPDEyMvJqy5YwjZOwfjd+f/54eaP+cqvPGjfld+Vem3cvlG3vCdKsypSTUZ1Uh7+6H+64o0qVU/ZWrH4jQfSXsV7HR7Gx+Jk3zSG/9HyH6T8PfxnanaQ1J4RyCZ/8+9bd7T87fNto7Kz2vlq9idwfhql3bAke22Yf/BQiZdmADmZD7iz7CI8a5cno3/OWP/OWd1rd1d/k3+TN3JefXJP0f5l8y6fV5byWQ8DY2BTcqT8LOu7H4V2qTpPYP2CGER1esFy5xienmf0D9HPL7V7X4pHHjfoZ/wA+6/8An3Va/lhaaV+dn516VFefmHexpc+VfK1woePR4pFqssymoM7A/wCx6eNfZOWzzNnm/Z7euRAVdhV2Kv5HbP8A+SS69/5sDWP+TU+cp7cf8Y2f3D/dB2HZX+MRfsNnyg+gF+Vn/Pyz++/KL/jFrH/ErXPc/wDgQf3Wo98f0vLe0XOHxf0P/wDOIP8A6y/+RX/gHab/AMmhntB5vLvpDAl2Kv8A/9f7+Yq+Yv8AnMf8s/MP5wf842fmt5A8pxrP5i1vSG/RFoxp600LCURD3fjQe+Kv5Xfyz/NH/nIb/nG5PMnk/QfI8tjcXl+s2s2er6JcTzRzwKYqA1UAU8Kg9a5znbnsrou2ZROpBJjyo1+hz9J2hl049L1D/odn/nKkH/lEdP8A/CduP+as5+H/AAMux4DaMvn+xy/5dzy5vN/I/wDzkZ+fv5b6v561nRvKkAvvzE1U61rwvdFuJE+sEyN+4Wq8U/eHbf55ue0fYzQdoQxwygkYhUaPT5ONg7Ty4pE970Nv+cyf+ctNdBsdJ8swQ3Uvwo+n+W5ZZgW8BIJh+GanH/wNOx8cuLgkfef2ORLtzORTKPKH/OH3/Ocn/OWms2N951s9a0rQSwb/ABB5ud7O0t42+0bex+HenZY1r451vZ3ZGk7PHDp8YiPt+Z3ddl1c831F+6X/ADjP/wA4Dfll/wA41eSddtNHp5l/MrzLpVzYar58vUHNTPC0fp2qf7pjBPbc982ciRuHGoB/NF5r/Lf/AJyB/Ir8yPP3kC28sa9pOveYPrWg3E1hZTOb6xnuFkpazIh+GYRrUqa8SQab5i6nRYtTw+MAeE2L5W248piH7df8+7f+fddr+Vttpf51fnZpUd5+Yt5Gtx5Y8q3Kh49GjcVEsymoM5H/AAPTxrlEgNXFxF+zuKXYq7FXYq/km/5yw/L/APOf/nG//nMLzd+ZFl5VuLtL/wAwXWv+TNdeyku9PuYrxWFH4bck9QgqSDUVzC7T0GLX4ZYMv0z5/e3afJLCbCS/9Dx/85P/APUqaT/3ALn/AKqZxJ/4GHY4/hl8x+p2g7c1A5F5V+YHnP8AP/8A5yr1/wAm+XdQ8jyajrdhLNbaHZ6RpM9vyN40fMyklxQemu5oBvnR9g+zOk7GExpgQJ1dm+XwcHV66epPqf10fkH5L1P8ufyW/K/yLrLK2q+VvLlhp+pcOgmiiAcD5HbOgLhkCL2DFXYq/wD/0Pv5irsVfLVn5t80W/nL83U83aXpV/5b/KbTrvVLm7htYvrWqR3kZv8AT0Bbl6ZtraJ43P7bkHYDDQ5hFgIOb869HsPJ/wDiPUvy3s4tQg1fUdJv9LgmhkjSTT9Hl1kOk5t15B4kVd1FGJ6gbu/VJo8npfl/zDpvmTzrqvlePyHZQ6fo2haVq91r7tbtSXVRK0NqIPT5mghcl606bb4K5Ug1STSfmNo+m/m5H+WkHk+xCy200q67auheKeCzW+MU8awBULI2w9Uv0YqFZST8U7Asfsv+ch5NZ8nXfmHS/KRTUfr/AJf0vTdOuL5VjafzBbwTxtJMsTcVh9eh+E8qdq7NXyKndvy/+cuqRaDoOu6+n10j8pj551i1tUjjWa6hMXqCM/EV5VIA+yMAjSLA5s28n/mLY+a9PsdR1zypNYa4mvz+XpYbOCXVYre6gofUN1FAvpRMrA85AgBJB9xXxSWF3f573V/pH5iPYaFLo99+Xt7Y6fqtwZorjjd3Osy2BhVGRR/cRLNU9BIBSoqTQJC8k81D87ZtL1/809HvPK4ij/LnQ7rWrOVr5BNqcVpEkjGKH06BCZOBZWYowpIq8kqqkfmT/nIpNC8lS+covKouzb65qmky6Q19wnki0hJJJ5oQlvIXPGImhAVBUu4Arir1Dyv5p1PWfP35gaDcNH+idAstBudJjCASKdRhuJJub/tbxrTw3xVg15+ej6bqX5s2Wo+Vvq8f5aWEuoWq/XkNxqUURCiRI/Tosbsac1Z+BBWQK1FKqQa7+fNlZ+V9M1jXPIsV7eyXfmGxv9MN1HNFb3Pl53jm9OZ4fjWQrseCkdxjsOaKCb+YvzB03Q7j8zY4/wAtrG7s/wAvG0q1i1BpLaMXt7q4tvRh9P0WaJE+sqXc126AnbEbjySNkFdfm5baDr/5c6PB+XEDan5ytornV7jS54LmPTY5r2KwYpcWsLxSqJZeRYvGCooKuQuI4uq7vpg1xXbquxV2Kv8A/9H7+Yq7FUk/QGiGfWrn9FWpuPMcUcOuymJSbyOJDCiz1+2FRitD22xVizflT+XD+X7XyrJ5L0qTy9Z3T31vpLW6tCty6sjy0PVmVipJ6g06bYqy2y0XSNPvLq/sdOgtL2+ht7a8uo0CvJDaB1gRj3EYdgB2riqU/wCCfKP+JX84jy7Yf4odPSbXPRH1kr6Xo05/8Y/h91oOgGKpVb/lX+XVrol75btvJWkwaDqU8Vzf6UluoikmgIMMjL/MnFaHtSg2xVOofJvlOCGK3h8u2EdvBpJ0GGEQKEXS2pWzApT0th8PTFUT5d8taB5S0uLRfLWk22i6VA7yR2NqnBA8jcnY+JYmpJ3xVCt5L8pOmuRt5dsDH5mu4r/zCnoJS8uofT9Oafb42X0loT4DFUM3kDyU+o6/q7eVtOOp+abV7HzDeGBS95bSqElim8Q4VQ/81BWtBiqWy/lR+W9xo1n5dn8k6TLoenXEt1ZaY1uhijmnUpK6jxdWIf8Am71xVl9ro+l2N7e6jZ2ENtf6jHbxX95GgEkyWoKwK57hAxA8K4qkA/L7yQt75j1AeVdM+u+bYWt/Mtx9XTlexOPjSbbcP1b+Y7mpxVAT/lZ+XVzo+keX7jyZpU2i6DLLPo+nyW6tHBLNy9Z0B7vzPInqTU1xVPr7yl5Z1K31611DQbO7t/NAjHmKGWIMLz0o1jjM38xRVUKeooKdMVS0/lz5FJ8sE+UtL/50tQnlalugFiqlSoh22AKqw8GAPUVxVm+KuxV2Kv8A/9L7+Yq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FX/2Q==',
                                    width: 120,
                                    height: 50
                                },
                                    {
                                        text: 'DIGITAL VISUAL INTERFACE LIMITED \n Diamond Trust Build Suite 407\n Plot 18/19 Kampala Road\n Email:Info @ dviuganda.com \nTel:+256(0)772 699467',
                                        style: 'address'
                                    }]
                            ]
                        },
                        layout: 'noBorders'

                    },
                    {
                        text: typeInvoice,
                        style: 'header'
                    },
                    {
                        text: 'TIN:1000355522',
                        style: 'tinNumber'
                    },
                    {
                        style: 'tableAttention',
                        headerRows: 3,
                        table: {
                            widths: ['*', '*', 'auto'],
                            body: [
                                ['Invoice To', 'Invoice No', 'Date'],
                                [{rowSpan: 3, text: companyName + '\n' + attn}, taxInvoiceId, creationDate],
                                ['', 'PO Number:', 'Invoice Descritption'],
                                ['', '.', details]
                            ]
                        }
                    },
                    table(JSON.parse(data),['itemDescrpiton','quantity','unitPrice','day','total'],[{fillColor: '#eeeeee','text':'Description','style':'tableHeader'},{fillColor: '#eeeeee','text':'Quantity','style':'tableHeader'},{fillColor: '#eeeeee','text':'Rate','style':'tableHeader'},{fillColor: '#eeeeee','text':'No Days','style':'tableHeader'},{fillColor: '#eeeeee','text':'Total','style':'tableHeader'}])
                    ,
                    {
                        style: 'notes',
                        ol: [
                            'Set up shall be a day before the Event',
                            'Cost includes Transport, Delivery, setup and technical support',
                            'Payment within 14 days from the day of that Event with a local purchase order prior is for only DVI \n registered clients otherwise 100% payment Prior to the service'

                        ]

                    },
                    {
                        style: 'footernotes',
                        text: [
                            {
                                text: 'All payments are to be made in the name of DIGITAL VISUAL INTERFACE LIMITED\n',
                                style: 'notes2'
                            },
                            {text: 'Bank Detail\n', style: 'notes2'},
                            'BANK:DFCU BANK\n',
                            'ACCOUNT NAME::DIGITAL VISUAL INTERFACE\n',
                            'ACCOUNT NUMBER:UGX: (01023500120267) / USD: (02013551642548)\n',
                            'BRANCH::PLOT 66 WILLIAM STREET- KAMPALA /PLOT 13 KIMATHI AVENUE- KAMPALA\n',
                            'SORT CODE:502\n',
                            'SWIFT CODE:DFCUUGKA\n',
                            'INTERMEDIARY BANK:CITI BANK\n',
                            'COMPANY REG NO.560709\n'
                        ]

                    }


                ],

                styles: {
                    footernotes: {
                        fontSize: 8,
                        bold: true, margin: [0, 5, 0, 15]
                    },
                    notes: {
                        fontSize: 10,
                        bold: false
                    },
                    notes2: {
                        fontSize: 10,
                        bold: true, margin: [0, 5, 0, 15]
                    },
                    address: {
                        margin: [0, 0, 0, 0], bold: true,
                        fontSize: 7,
                        color: 'black'
                    },
                    tableAttention: {
                        fontSize: 9,
                        margin: [0, 5, 0, 15]
                    }, tableInvoice: {
                        fontSize: 7,
                        margin: [0, 5, 0, 15]
                    },
                    tablefont:{fontSize:9},
                    tableHeader:{fontSize:10,bold: true,alignment: 'center'},
                    tableNumber:{fontSize:9,alignment: 'right'},
                    tableWord:{fontSize:9,alignment: 'left'},
                    tableExample: {
                        margin: [0, 5, 0, 15]
                    },
                    header: {
                        fontSize: 18,
                        bold: true,
                        alignment: 'center',
                        margin: [0, 0, 0, 20]
                    }
                    ,tinNumber: {
                        fontSize: 10,
                        bold: true,
                        alignment: 'right',
                        margin: [0, 0, 0, 0]
                    }


                }
            };
            pdfMake.createPdf(dd2).getBase64(function(data){
                //alert(data);
                $.post('savePDF/',{file:data},function(responseData){
//fileName.
                    var response=responseData;
                    if(response=='error')
                    {

                    }else
                    {
                        //open the dialog for
                        $('#dlgemail').dialog('open').dialog('setTitle', 'Enter ');
                        $('#frmemail').form('clear');
                        $('#email2').val('info@dviuganda.com');
                        $('#filename').val(response);
                        CKEDITOR.replace('msg');
                    }
                })
            });


        });
    }

}

function sendEmailPInvoice()
{
    var row = $('#dginvoice').datagrid('getSelected');
    var typeInvoice="Quotation";
    if (row) {

        $.post('../invoiceitems/viewallItems/'+row.id,{},function(data) {

            var companyName = row.companyName;
            var attn = row.attn;
            var id = row.id;
            var creationDate = row.creationDate;
            var details = row.details;
            var dd2 = {
                content: [
                    {

                        style: 'tableExample',
                        table: {
                            widths: ['*', 'auto'],
                            body: [
                                [{
                                    image: 'data:image/jpeg;base64,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AQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAABAAAAOEJJTQQ7AAAAAAGyAAAAEAAAAAEAAAAAABJwcmludE91dHB1dE9wdGlvbnMAAAASAAAAAENwdG5ib29sAAAAAABDbGJyYm9vbAAAAAAAUmdzTWJvb2wAAAAAAENybkNib29sAAAAAABDbnRDYm9vbAAAAAAATGJsc2Jvb2wAAAAAAE5ndHZib29sAAAAAABFbWxEYm9vbAAAAAAASW50cmJvb2wAAAAAAEJja2dPYmpjAAAAAQAAAAAAAFJHQkMAAAADAAAAAFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBYAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAA4QklNA+0AAAAAABAAYAAAAAEAAQBgAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANdAAAABgAAAAAA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b3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNS0xMC0xOVQxMzoyMzoyNS0wNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTUtMTAtMTlUMTM6NTU6NDktMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTUtMTAtMTlUMTM6NTU6NDktMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQkIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkRBQjBCNUM2QTM3NkU1MTFBRUFBQ0JBQTk0MUVGOTA2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQUIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgc3RFdnQ6d2hlbj0iMjAxNS0xMC0xOVQxMzoyMzoyNS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQkIwQjVDNkEzNzZFNTExQUVBQUNCQUE5NDFFRjkwNiIgc3RFdnQ6d2hlbj0iMjAxNS0xMC0xOVQxMzo1NTo0OS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGRAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQoJCg0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAXQCZAwERAAIRAQMRAf/dAAQAFP/EAaIAAAAHAQEBAQEAAAAAAAAAAAQFAwIGAQAHCAkKCwEAAgIDAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAACAQMDAgQCBgcDBAIGAnMBAgMRBAAFIRIxQVEGE2EicYEUMpGhBxWxQiPBUtHhMxZi8CRygvElQzRTkqKyY3PCNUQnk6OzNhdUZHTD0uIIJoMJChgZhJRFRqS0VtNVKBry4/PE1OT0ZXWFlaW1xdXl9WZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo+Ck5SVlpeYmZqbnJ2en5KjpKWmp6ipqqusra6voRAAICAQIDBQUEBQYECAMDbQEAAhEDBCESMUEFURNhIgZxgZEyobHw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',
                                    width: 120,
                                    height: 50
                                },
                                    {
                                        text: 'DIGITAL VISUAL INTERFACE LIMITED \n Diamond Trust Build Suite 407\n Plot 18/19 Kampala Road\n Email:Info @ dviuganda.com \nTel:+256(0)772 699467',
                                        style: 'address'
                                    }]
                            ]
                        },
                        layout: 'noBorders'

                    },
                    {
                        text: typeInvoice,
                        style: 'header'
                    },
                    {
                        style: 'tableAttention',
                        headerRows: 3,
                        table: {
                            widths: ['*', '*', 'auto'],
                            body: [
                                ['Invoice To', 'Invoice No', 'Date'],
                                [{rowSpan: 3, text: companyName + '\n' + attn}, id, creationDate],
                                ['', 'PO Number:', 'Invoice Descritption'],
                                ['', '.', details]
                            ]
                        }
                    },
                    table(JSON.parse(data),['itemDescrpiton','quantity','unitPrice','day','total'],[{fillColor: '#eeeeee','text':'Description','style':'tableHeader'},{fillColor: '#eeeeee','text':'Quantity','style':'tableHeader'},{fillColor: '#eeeeee','text':'Rate','style':'tableHeader'},{fillColor: '#eeeeee','text':'No Days','style':'tableHeader'},{fillColor: '#eeeeee','text':'Total','style':'tableHeader'}])
                    ,
                    {
                        style: 'notes',
                        ol: [
                            'Set up shall be a day before the Event',
                            'Cost includes Transport, Delivery, setup and technical support',
                            'Payment within 14 days from the day of that Event with a local purchase order prior is for only DVI \n registered clients otherwise 100% payment Prior to the service'

                        ]

                    },
                    {
                        style: 'footernotes',
                        text: [
                            {
                                text: 'All payments are to be made in the name of DIGITAL VISUAL INTERFACE LIMITED\n',
                                style: 'notes2'
                            },
                            {text: 'Bank Detail\n', style: 'notes2'},
                            'BANK:DFCU BANK\n',
                            'ACCOUNT NAME::DIGITAL VISUAL INTERFACE\n',
                            'ACCOUNT NUMBER:UGX: (01023500120267) / USD: (02013551642548)\n',
                            'BRANCH::PLOT 66 WILLIAM STREET- KAMPALA /PLOT 13 KIMATHI AVENUE- KAMPALA\n',
                            'SORT CODE:502\n',
                            'SWIFT CODE:DFCUUGKA\n',
                            'INTERMEDIARY BANK:CITI BANK\n',
                            'COMPANY REG NO.560709\n'
                        ]

                    }


                ],

                styles: {
                    footernotes: {
                        fontSize: 8,
                        bold: true, margin: [0, 5, 0, 15]
                    },
                    notes: {
                        fontSize: 10,
                        bold: false
                    },
                    notes2: {
                        fontSize: 10,
                        bold: true, margin: [0, 5, 0, 15]
                    },
                    address: {
                        margin: [0, 0, 0, 0], bold: true,
                        fontSize: 7,
                        color: 'black'
                    },
                    tableAttention: {
                        fontSize: 9,
                        margin: [0, 5, 0, 15]
                    }, tableInvoice: {
                        fontSize: 7,
                        margin: [0, 5, 0, 15]
                    },
                    tablefont:{fontSize:9},
                    tableHeader:{fontSize:10,bold: true,alignment: 'center'},
                    tableNumber:{fontSize:9,alignment: 'right'},
                    tableWord:{fontSize:9,alignment: 'left'},
                    tableExample: {
                        margin: [0, 5, 0, 15]
                    },
                    header: {
                        fontSize: 18,
                        bold: true,
                        alignment: 'center',
                        margin: [0, 0, 0, 20]
                    }


                }
            };
            pdfMake.createPdf(dd2).getBase64(function(data){
                //alert(data);
                $.post('savePDF/',{file:data},function(responseData){
//fileName.
                    var response=responseData;
                    if(response=='error')
                    {

                    }else
                    {
                        //open the dialog for
                        $('#dlgemail').dialog('open').dialog('setTitle', 'Enter ');
                        $('#frmemail').form('clear');
                        $('#email2').val('info@dviuganda.com');
                        $('#filename').val(response);
                        CKEDITOR.replace('msg');
                    }
                })
            });


        });
    }

}


function sendEmailInvoice()
{
    $.messager.progress();
        var email=$('#prependedInput').val();
        var email2=$('#email2').val();
        var filename=$('#filename').val();
        var msg= CKEDITOR.instances.msg.getData();
//alert(msg);

        $.post('sendEmailInvoice',{email:email,email2:email2,filename:filename,msg:msg},function(data){
            $.messager.progress('close');

            alert(data);
            $('#dlgemail').dialog('close');

        })



}





