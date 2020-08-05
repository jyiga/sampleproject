function newaccount() {
  $('#dlgaccount').dialog('open').dialog('setTitle', 'Enter account ');
  $('#frmaccount').form('clear');
  url = 'add';
}

function editaccount() {
  var row = $('#dgaccount').datagrid('getSelected');
  if (row) {
    $('#dlgaccount').dialog('open').dialog('setTitle', 'Edit account');
    $('#frmaccount').form('load', row);
    url = 'edit/' + row.AccountCode;
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit',
    });
  }
}

function deleteaccount() {
  var row = $('#dgaccount').datagrid('getSelected');
  if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
      if (r) {
        $.post('delete/' + row.AccountCode, {}, function (data) {
          $('#dgaccount').datagrid('reload');
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

function saveaccount() {
  saveForm('#frmaccount', url, '#dlgaccount', '#dgaccount');
}
