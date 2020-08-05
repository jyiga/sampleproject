var id;
function newcategory() {
  $('#dlgcategory')
    .dialog('open')
    .dialog('setTitle', 'Enter category ');
  $('#frmcategory').form('clear');
  url = 'add';
}

function editcategory() {
  var row = $('#dgcategory').datagrid('getSelected');
  if (row) {
    $('#dlgcategory')
      .dialog('open')
      .dialog('setTitle', 'Edit category');
    $('#frmcategory').form('load', row);
    $id=row.id;
    url = 'edit/' + row.id;
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit'
    });
  }
}

function deletecategory() {
  var row = $('#dgcategory').datagrid('getSelected');
  if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the act', function(r) {
      if (r) {
        $.post('delete/' + row.id, {}, function(data) {
          $('#dgcategory').datagrid('reload');
        });
      }
    });
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit'
    });
  }
}

/*function savecategory() {
  saveForm('#frmcategory', url, '#dlgcategory', '#dgcategory');
}*/


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

$('#btnMainImg').click(function () {
  //url = 'add'
  $('#mainImg').click()
})

function savecategory() {
  var fileCount = 0

  var file_data1 = $('#mainImg').prop('files')[0]
  
  var form_data = new FormData()
  if (file_data1 !== undefined) {
    form_data.append('file', file_data1)
  } else {
    fileCount += 1
  }


  if ($('#parentId').combobox('getValue') != '' || $('#parentId').combobox('getValue') != null) {
    form_data.append('parentId', $('#parentId').combobox('getValue'))
  } else {
    fileCount += 1
  }

 
  if ($('#categoryName').val() != '' || $('#categoryName').val() != null) {
    form_data.append('categoryName', $('#categoryName').val())
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
          var result = eval('('+response+')');
        //var res = response.split(',')
       
        if (result.msg){
          $.messager.show({title: 'Warning',
              msg: result.msg});
          } else {
          $.messager.show({title: 'Info',
              msg: 'successfully completed'});
          $('#dlgcategory').dialog('close');
          $('#dgcategory').datagrid('reload'); // close the dialog
          // reload the user
          }

        // $('#dlgclothitem').dialog('close')
        // $('#dgclothitem').datagrid('reload') // display success response from the server
      },
      error: function (response) {
        $('#msg').html(response) // display error response from the server
      }
    })
  } else {
    if(url=='edit/'+id)
    {
      saveForm('#frmcategory',url,'#dlgcategory','#dgcategory');
    }else
    {
      $.messager.show({ title: 'Error!', msg: 'Supply all fields' })
    }
    //
  }
}

function showImage(value,row,index){
  return "<span><img class='img-responsive thumbnail' src='"+value+"' style='width:100px;height:60px' /></span>"

}