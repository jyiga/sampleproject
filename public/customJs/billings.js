function newbilling() {
  $('#dlgbilling').dialog('open').dialog('setTitle', 'Enter billing ');
  $('#frmbilling').form('clear');
  url = 'add';
}

function editbilling() {
  var row = $('#dgpaybilling').datagrid('getSelected');
  if (row) {
    $('#dlgbilling').dialog('open').dialog('setTitle', 'Edit billing');
    $('#frmbilling').form('load', row);
    url = 'edit/' + row.id;
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit',
    });
  }
}

function deletebilling() {
  var row = $('#dgpaybilling').datagrid('getSelected');
  if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the action', function (
      r
    ) {
      if (r) {
        $.post('delete/' + row.id, {}, function (data) {
          $('#dgpaybilling').datagrid('reload');
        });
      }
    });
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit',
    });
  }
}

function savebilling() {
  saveForm('#frmbilling', url, '#dlgbilling', '#dgpaybilling');

  /* if(url=='add')
     {
         saveFormUrlRedirect('#frmbilling',url);
     }else
     {
         saveFormUrlRedirect('#frmbilling',url);
     }*/
}

function payreadybill() {
  var row = $('#dgreadybill').datagrid('getSelected');
  if (row) {
    $('#dlgpaybilling').dialog('open').dialog('setTitle', 'Pay bill');
    $('#frmpaybilling').form('load', row);
    url = 'billcategory/' + row.id;
    getBalance();
  } else {
    $.messager.alert('Warning!', 'Please select a item to to edit');
  }
}

function payreadybillitem() {
  var row = $('#dgbudget2').datagrid('getSelected');
  if (row) {
    var id = row.id;
    var balNew = 0;
    balNew = getBalanceBefore(null, 'wallet');
    //console.log(balNew);
    $('#dlgpaybudget').dialog('open').dialog('setTitle', 'Paying Budget Items');
    $('#frmpaybudget').form('clear');
    $('#frmpaybudget').form('load', row);
    $('#Walletamt').val(balNew);
    //$('#').val();
    url = 'payTransaction/' + id;
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit',
    });
  }
}

function getBalance() {
  $.post(
    '../generaledgers/invoiceBalance/null',
    { criteria: "systemName='wallet'" },
    function (data) {
      //alert(data);
      $('#walletbalance').val(data);
      //url= 'paybill'
    }
  );
}

$(function () {
  var url2 = window.location.href.replace('#', '');
  var urll = url2.split('/');
  var length = urll.length;
  var stringUrl = urll[length - 1];
  if (stringUrl === 'paybill') {
    //loading the content
    loadContent('daily', '#tab_content1');
    loadContent('weekly', '#tab_content2');
    loadContent('monthly', '#tab_content3');
  }
  //alert(urll[length-1]);
});

function loadContent(billType, contentPanel) {
  //get url
  //load content panel
  $.post('getContent', { billType: billType }, function (data) {
    $(contentPanel).html(data);
  });
}
function openDialogBillpayment(x) {
  //var string2=str.split('-');
  /*$('#dlgpaybilling').dialog('open').dialog('title','Pay Bill.....');
     $('#frmpaybilling').form('clear');*/
  // alert($(this).attr('id'));
  //alert(x);
  $('#dlgpaybilling2').dialog('open').dialog('setTitle', 'Enter bill ');

  //load form with the json;
  $.post('getObject/' + x, {}, function (data) {
    var data2 = $.parseJSON(data);
    $('#frmpaybilling2').form('clear');
    //alert(data2.billName);
    $('#frmpaybilling2').form('load', data2);
    getBalance();
  });
}
function paybilling() {
  saveFormNoDatagrid('#frmpaybilling2', 'paybills', '#dlgpaybilling2');
  showBalanceTitle();
}
