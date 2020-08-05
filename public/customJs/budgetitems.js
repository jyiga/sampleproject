function newbudgetitem () {
  $('#dlgbudgetitem').dialog('open').dialog('setTitle', 'Enter budgetitem ')
    $('#frmbudgetitem').form('clear')
    url = 'add'
}

function editbudgetitem () {
  var row = $('#dgbudgetitem').datagrid('getSelected')
    if (row) {
    $('#dlgbudgetitem').dialog('open').dialog('setTitle', 'Edit budgetitem')
        $('#frmbudgetitem').form('load', row)
        url = 'edit/' + row.id
    } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit'
    })
    }
}

function deletebudgetitem () {
  var row = $('#dgbudgetitem').datagrid('getSelected')
    if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
      if (r) {
        $.post('delete/' + row.id, {}, function (data) {
          $('#dgbudgetitem').datagrid('reload')
                })

            }
    })
    } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit'
    })
    }
}

function savebudgetitem () {
  saveForm('#frmbudgetitem', url, '#dlgbudgetitem', '#dgbudgetitem')
}

function getBalance () {
  $.post('../generaledgers/invoiceBalance/null', {
    criteria: "systemName='wallet'"
  }, function (data) {
    // alert(data);
    $('#walletbalance').val(data)
        //url= 'paybill'
    })
}
$(function () {
  var url2 = window.location.href.replace('#', '')
    var urll = url2.split('/')
    var length = urll.length
    var stringUrl = urll[length - 1]
    if (stringUrl === 'dailyexpense') {
    // loading the content
    loadContent()

    }
  // alert(urll[length-1]);
})

function loadContent () {
  // get url
  // load content panel
  $.post('getContent', {}, function (data) {
    $('#dailyExpense').html(data)

    })
}

function openDialogDirectpayment (x) {
  // var string2=str.split('-');
  /*$('#dlgpaybilling').dialog('open').dialog('title','Pay Bill.....');
     $('#frmpaybilling').form('clear'); */
  // alert($(this).attr('id'));
  // alert(x);
  $('#dlgdayExpense').dialog('open').dialog('setTitle', 'Pay Expense.')

    //load form with the json;
    $.post('getObject/' + x, {}, function (data) {
    var data2 = $.parseJSON(data)
        $('#frmdayExpense').form('clear')
        //alert(data2.billName);
        $('#frmdayExpense').form('load', data2)
        getBalance()
    })

}

function payExpense () {
  saveFormNoDatagrid('#frmdayExpense', 'payExpense', '#dlgdayExpense')
    showBalanceTitle()
}
