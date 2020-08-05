

 function newtheme(){
$('#dlgtheme').dialog('open').dialog('setTitle','Enter Theme ');
$('#frmtheme').form('clear');
 url='add'; 
}

 function edittheme()
 {
    var row=$('#dgtheme').datagrid('getSelected');
    if(row)
    {
    $('#dlgtheme').dialog('open').dialog('setTitle','Edit Theme');
    $('#frmtheme').form('load',row); 
    url='edit/'+row.id;
    }
    else{
    $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    } 
 }

 function deletetheme(){
 var row=$('#dgtheme').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgtheme').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

//
 /*function savetheme()
 {
 saveForm('#frmtheme',url,'#dlgtheme','#dgtheme');
}*/

function savetheme () {
    var fileCount = 0
  
    var file_data1 = $('#file').prop('files')[0]
    
    var form_data = new FormData()
    if (file_data1 !== undefined) {
      form_data.append('file', file_data1)
    } 
  
    if ($('#isDefault').combobox('getValue') != '' || $('#isDefault').combobox('getValue') != null) {
      form_data.append('isDefault', $('#isDefault').combobox('getValue'))
    } else {
      fileCount += 1
    }
  
    if ($('#extractable').combobox('getValue') != '' || $('#extractable').combobox('getValue') != null) {
      form_data.append('extractable', $('#extractable').combobox('getValue'))
    } else {
      fileCount += 1
    }

    if ($('#fileType').combobox('getValue') != '' || $('#fileType').combobox('getValue') != null) {
        form_data.append('fileType', $('#fileType').combobox('getValue'))
      } else {
        fileCount += 1
      }
    if ($('#themeName').val() != '' || $('#themeName').val() != null) {
      form_data.append('themeName', $('#themeName').val())
    } else {
      fileCount += 1
    }
    
  
    if (fileCount === 0) {
      $.ajax({
        url: url, // point to server-side controller method
        dataType: 'json', // what to expect back from the server
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
            $('#dgtheme').dialog('close');
            $('#dlgtheme').datagrid('reload'); // close the dialog
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
      $.messager.show({ title: 'Error!', msg: 'Supply all fields' })
    }
  }