function newaccountType() {
  $('#dlgaccountType').dialog('open').dialog('setTitle', 'Enter accountType ');
  $('#frmaccountType').form('clear');
  url = 'add';
}

function editaccountType() {
  var row = $('#dgaccountType').datagrid('getSelected');
  if (row) {
    $('#dlgaccountType').dialog('open').dialog('setTitle', 'Edit accountType');
    $('#frmaccountType').form('load', row);
    url = 'edit/' + row.PrefixCode;
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit',
    });
  }
}

function deleteaccountType() {
  var row = $('#dgaccountType').datagrid('getSelected');
  if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
      if (r) {
        $.post('delete/' + row.PrefixCode, {}, function (data) {
          $('#dgaccountType').datagrid('reload');
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

function saveaccountType() {
  saveForm('#frmaccountType', url, '#dlgaccountType', '#dgaccountType');
}
