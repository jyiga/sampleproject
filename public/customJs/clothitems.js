
function newclothitem () {
  $('#dlgclothitem').dialog('open').dialog('setTitle', 'Enter cloth item')
  $('#frmclothitem').form('clear')
  $('#pic').attr('src', '../public/images/user.png')
  url = 'add'
}

function editclothitem () {
  var row = $('#dgclothitem').datagrid('getSelected')
  if (row) {
    $('#dlgclothitem').dialog('open').dialog('setTitle', 'Edit clothitem')
    $('#frmclothitem').form('load', row)
    url = 'edit/' + row.id
  } else {
    $.messager.show({ title: 'Warning!', msg: 'Please select a item to to edit' })
  }
}

function deleteclothitem () {
  var row = $('#dgclothitem').datagrid('getSelected')
  if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
      if (r) {
        $.post('delete/' + row.id, {}, function (data) { $('#dgclothitem').datagrid('reload') })
      }
    })
  } else {
    $.messager.show({ title: 'Warning!', msg: 'Please select a item to to edit' })
  }
}

function saveclothitem () {
  saveForm('#frmclothitem', url, '#dlgclothitem', '#dgclothitem')
}

function readURL (input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      $('#pic')
        .attr('src', e.target.result)
        .width('100%')
        .height('90%')
    }

    reader.readAsDataURL(input.files[0])
  }
}

function savePic () {
  var file_data = $('#fileToUpload').prop('files')[0]
  var form_data = new FormData()
  form_data.append('file', file_data)
  form_data.append('itemName', $('#itemName').val())
  form_data.append('itemDescription', $('#itemDescription').val())
  form_data.append('cost', $('#cost').val())
  form_data.append('date', $('#date').datebox('getValue'))
  form_data.append('idCat', $('#idCat').combobox('getValue'))
  $.ajax({
    url: url, // point to server-side controller method
    dataType: 'text', // what to expect back from the server
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: 'post',
    success: function (response) {
      $('#dlgclothitem').dialog('close')
      $('#dgclothitem').datagrid('reload') // display success response from the server
    },
    error: function (response) {
      $('#msg').html(response) // display error response from the server
    }
  })
}

$(function () {
  $('#dgclothitem').datagrid({
    groupField: 'categoryName',
    view: groupview,
    groupFormatter: function (value, rows) {
      return value + ' - ' + rows.length + ' Item(s)';
    }
  })
})
/*$(function () {
  $('#dgclothitem').datagrid({
    view: detailview,
    detailFormatter: function (rowIndex, rowData) {
      if (rowData.path == '' || rowData.path == null) {
        return '<table><tr>' +
                '<td style=""><img src="../public/images/user.png" style="height:150px; width: 150px"></td>' +
                '</tr></table>'
      } else {
        return '<table><tr>' +
            '<td rowspan=2 style=""><img src="' + rowData.path + '" style="height:150px; width: 150px"></td>' +
            '</tr></table>'
      }
    }
  })
})*/
