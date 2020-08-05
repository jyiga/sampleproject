function newaccountBalance() {
  $('#dlgaccountBalance')
    .dialog('open')
    .dialog('setTitle', 'Enter accountBalance ');
  $('#frmaccountBalance').form('clear');
  url = 'add';
}

function editaccountBalance() {
  var row = $('#dgaccountBalance').datagrid('getSelected');
  if (row) {
    $('#dlgaccountBalance')
      .dialog('open')
      .dialog('setTitle', 'Edit accountBalance');
    $('#frmaccountBalance').form('load', row);
    url = 'edit/' + row.id;
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit',
    });
  }
}

function deleteaccountBalance() {
  var row = $('#dgaccountBalance').datagrid('getSelected');
  if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
      if (r) {
        $.post('delete/' + row.id, {}, function (data) {
          $('#dgaccountBalance').datagrid('reload');
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

function saveaccountBalance() {
  saveForm(
    '#frmaccountBalance',
    url,
    '#dlgaccountBalance',
    '#dgaccountBalance'
  );
}
