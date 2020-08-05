var fileList=[]
var content=""

 function newpageresource(){
$('#dlgpageresource').dialog('open').dialog('setTitle','Enter pageresource ');
$('#frmpageresource').form('clear');
 url='add'; 
 fileList=[];
}

 function editpageresource(){
 var row=$('#dgpageresource').datagrid('getSelected');
 if(row)
{
 $('#dlgpageresource').dialog('open').dialog('setTitle','Edit pageresource');
 $('#frmpageresource').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletepageresource(){
 var row=$('#dgpageresource').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgpageresource').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savepageresource(){
 //saveForm('#frmpageresource',url,'#dlgpageresource','#dgpageresource');
  var form_data = new FormData()
  var i=0
  var fileCount=fileList.length
  //console.log("Test"+fileList.length)
  fileList.forEach(function(file){
    form_data.append('file'+i, file)
    i=i+1;
  })
  form_data.append('restype',  $('#resourceType').combobox('getValue'))
  form_data.append('fileCount', fileCount)
  
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
      if (resMsg === "Successfull Save") 
      {
        $('#dlgpageresource').dialog('close')
        $('#dgpageresource').datagrid('reload')

      } else {
        $.messager.show({ title: 'Error!', msg: resMsg })
      }


      
    },
    error: function (response) {
      $('#msg').html(response) // display error response from the server
    }
  })

}


// JY1206202
$('#btnMainImg').click(function () {
  $('#mainImg').click()
})

function readURL (input, divId) {

  for(var i=0; i < input.files.length;i++)
  {
      fileList.push(input.files[i]);
      var reader = new FileReader()
      reader.onload = function (e) {
        $(divId)
          .attr('src', e.target.result)
          .width('100%')
          //create 
          createImageContent(e.target.result)
      }
      reader.readAsDataURL(input.files[i])

  }

}

function createImageContent(src)
{
  content = $('#imageContent').html();
  // build
  var subContent=`<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"><a href="${src}" data-sub-html="Item Description">
    <img class="img-responsive thumbnail" src="${src}" style="height:50px;"></a></div>`;

    $('#imageContent').html(content+=subContent);

}


function getTrandsactionId()
{
  $.post('getTransactionId',{},function(data){
      id=data;
  })
}
