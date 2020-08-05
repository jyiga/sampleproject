
function newplan () {
  $('#dlgplan').dialog('open').dialog('setTitle', 'Enter plan ')
  $('#frmplan').form('clear')
  url = 'add'
}

function editplan () {
  var row = $('#dgplan').datagrid('getSelected')
  if (row) {
    $('#dlgplan').dialog('open').dialog('setTitle', 'Edit plan')
    $('#frmplan').form('load', row)
    url = 'edit/' + row.id
  } else {
    $.messager.show({ title: 'Warning!', msg: 'Please select a item to to edit' })
  }
}

function deleteplan () {
  var row = $('#dgplan').datagrid('getSelected')
  if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
      if (r) {
        $.post('delete/' + row.id, {}, function (data) { $('#dgplan').datagrid('reload') })
      }
    })
  } else {
    $.messager.show({ title: 'Warning!', msg: 'Please select a item to to edit' })
  }
}

function saveplan () {
  saveForm('#frmplan', url, '#dlgplan', '#dgplan')
}

$('#btnMainImg').click(function () {
  url = 'add'
  $('#mainImg').click()
})
$('#btnMainImg2').click(function () {
  $('#mainImg2').click()
})
$('#btnMainImg3').click(function () {
  $('#mainImg3').click()
})
$('#btnMainImg4').click(function () {
  $('#mainImg4').click()
})
$('#btnMainImg5').click(function () {
  $('#mainImg5').click()
})

function readURL (input, divId) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      $(divId)
        .attr('src', e.target.result)
        .width('100%')
    }

    reader.readAsDataURL(input.files[0])
  }
}

function readURL2 (input, divId) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      $(divId)
        .attr('src', e.target.result)
        .width('100%')
    }

    reader.readAsDataURL(input.files[0])
  }
}

function savePlanPic () {
  var fileCount = 0

  var file_data1 = $('#mainImg').prop('files')[0]
  var file_data2 = $('#mainImg2').prop('files')[0]
  var file_data3 = $('#mainImg3').prop('files')[0]
  var file_data4 = $('#mainImg4').prop('files')[0]
  var file_data5 = $('#mainImg5').prop('files')[0]
  var form_data = new FormData()
  if (file_data1 !== undefined) {
    form_data.append('file1', file_data1)
  } else {
    fileCount += 1
  }
  if (file_data2 !== undefined) {
    form_data.append('file2', file_data2)
  } else {
    fileCount += 1
  }
  if (file_data3 !== undefined) {
    form_data.append('file3', file_data3)
  } else {
    fileCount += 1
  }
  if (file_data4 !== undefined) {
    form_data.append('file4', file_data4)
  } else {
    fileCount += 1
  }
  if (file_data4 !== undefined) {
    form_data.append('file5', file_data5)
  } else {
    fileCount += 1
  }

  if ($('#styleId').combobox('getValue') != '' || $('#styleId').combobox('getValue') != null) {
    form_data.append('styleId', $('#styleId').combobox('getValue'))
  } else {
    fileCount += 1
  }

  if ($('#planTypeId').combobox('getValue') != '' || $('#planTypeId').combobox('getValue') != null) {
    form_data.append('planTypeId', $('#planTypeId').combobox('getValue'))
  } else {
    fileCount += 1
  }
  if ($('#sqm').val() != '' || $('#sqm').val() != null) {
    form_data.append('sqm', $('#sqm').val())
  } else {
    fileCount += 1
  }
  if ($('#planDescription').val() != '' || $('#planDescription').val() != null) {
    form_data.append('planDescription', $('#planDescription').val())
  } else {
    fileCount += 1
  }

  if (fileCount === 0) {
    $.ajax({
      url: url, // point to server-side controller method
      dataType: 'text', // what to expect back from the server
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: 'post',
      success: function (response) {
        var res = response.split(',')
        var resMsg = res[0]
        var resId = res[1]
        if (resMsg === 'Successfull Save') {

        } else {
          $.messager.show({ title: 'Error!', msg: resMsg })
        }


        // $('#dlgclothitem').dialog('close')
        // $('#dgclothitem').datagrid('reload') // display success response from the server
      },
      error: function (response) {
        $('#msg').html(response) // display error response from the server
      }
    })
  } else {
    $.messager.show({ title: 'Error!', msg: 'Supply all fields' })
  }
}

// .height('100%')

$(function () {
  var param = qs('id')
  
  if (param === undefined) {
    url = 'add'
  }else {
    url = 'edit/' + param
    // pull the data request
  }
})
