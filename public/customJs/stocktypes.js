
function newstocktype () {
  $('#dlgstocktype').dialog('open').dialog('setTitle', 'Enter stocktype ')
$('#frmstocktype').form('clear')
 url = 'add' 
}

function editstocktype () {
  var row = $('#dgstocktype').datagrid('getSelected')
 if (row)   {
    $('#dlgstocktype').dialog('open').dialog('setTitle', 'Edit stocktype')
 $('#frmstocktype').form('load', row)

 url = 'edit/' + row.id
} else {
    $.messager.show({ title: 'Warning!', msg: 'Please select a item to to edit' })}
}

function deletestocktype () {
  var row = $('#dgstocktype').datagrid('getSelected')
 if (row)   {
    $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
 if (r) {
 $.post('delete/' + row.id, {}, function (data) { $('#dgstocktype').datagrid('reload')})
 
}
    })}
  else {
    $.messager.show({ title: 'Warning!', msg: 'Please select a item to to edit' })}
}

function savestocktype () {
  saveForm('#frmstocktype', url, '#dlgstocktype', '#dgstocktype')
}

function isActiveCell (val, row) {
  if (parseInt(val) == 1) {
    return '<span style="color:#1ABB9C;">YES</span>'
  } else {
    return '<span style="color:#ae0b22;font-family: Tahoma; font-weight: bold;">NO</span>'
  }
}
