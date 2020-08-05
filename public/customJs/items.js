let id
function newitem() {
  $('#dlgitem').dialog('open').dialog('setTitle', 'Enter item ');
  $('#frmitem').form('clear');
  url = 'add';
  id=-1;
  getTrandsactionId()
  fileList=[]
}

function edititem() {
  var row = $('#dgitem').datagrid('getSelected');
  if (row) {
    $('#dlgitem').dialog('open').dialog('setTitle', 'Edit item');
    $('#frmitem').form('load', row);
    url = 'edit/' + row.id;
  } else {
    $.messager.show({
      title: 'Warning!',
      msg: 'Please select a item to to edit',
    });
  }
}

function deleteitem() {
  var row = $('#dgitem').datagrid('getSelected');
  if (row) {
    $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
      if (r) {
        $.post('delete/' + row.id, {}, function (data) {
          $('#dgitem').datagrid('reload');
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

// JY 13062020 Added by 
function saveitem() 
{
  var form_data = new FormData()
  var i=0
  var fileCount=fileList.length
  //console.log("Test"+fileList.length)
  fileList.forEach(function(file){
    form_data.append('file'+i, file)
    i=i+1;
  })

    //form_data.append('file1', fileList)
    form_data.append('itemDescription', $('#itemDescription').val())
    form_data.append('itemName', $('#itemName').val())
    form_data.append('amount', $('#amount').val())
    form_data.append('categoryId', $('#categoryId').combobox('getValue'))
    form_data.append('uom', $('#uom').combobox('getValue'))
    form_data.append('fileCount', fileCount)
    form_data.append('id', id)
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
          $('#dlgitem').dialog('close')
        $('#dgitem').datagrid('reload')

        } else {
          $.messager.show({ title: 'Error!', msg: resMsg })
        }


        
      },
      error: function (response) {
        $('#msg').html(response) // display error response from the server
      }
    })
  
}

// JY 13062020 Uncomment out the code to refract
/*function saveitem() {
  saveForm('#frmitem', url, '#dlgitem', '#dgitem');

  // console.log($('#creationDate').datebox('getValue'));

  setTimeout(() => {
    $('#dlgitem').dialog('close');
    $('#dgitem').datagrid('reload');
  }, 1000);
}*/
var fileList=[]
var content=""
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

//JY12062020 Changed the implementation
// const globalObj = {};

// // add item image
// document.querySelector('#imgBtn').addEventListener('click', (e) => {
//   e.preventDefault();

//   var row = $('#dgitem').datagrid('getSelected');

//   if (!row) {
//     $.messager.show({
//       title: 'Warning!',
//       msg: 'Please select a item to to attach Image',
//     });
//   } else {
//     globalObj.imageId = row.id;
//     $('#imageUploadDialog').dialog('open').dialog('setTitle', 'Upload Image');
//   }
// });

// // save specification
// document.querySelector('.saveSpec').addEventListener('click', (e) => {
//   e.preventDefault();
//   const { itemId } = { ...globalObj };
//   const rows = $('#itemSpecification').datagrid('getSelections');

//   for (let i = 0; i < rows.length; i++) {
//     const row = rows[i];
//     // not good practice
//     $.post(
//       '../specs/add/',
//       { specId: row.id, itemId, specText: row.specText.trim() },
//       (data) => {
//         if (data) {
//           console.log(data);
//         }
//       }
//     );
//   }
//   // TODO finish up saving spec
//   // $.post('../specs/addItems/' + itemId, obj, (data) => {});
// });

// // add item specification
// document.querySelector('#specBtn').addEventListener('click', (e) => {
//   e.preventDefault();

//   var row = $('#dgitem').datagrid('getSelected');

//   if (!row) {
//     $.messager.show({
//       title: 'Warning!',
//       msg: 'Please select a item to add specifications',
//     });
//   } else {
//     globalObj.itemId = row.id;
//     $('#specDialog').dialog('open').dialog('setTitle', 'Specifications List');
//   }
// });

// // image upload
// document.querySelector('#imageForm').addEventListener('submit', (e) => {
//   const { imageId } = { ...globalObj };
//   e.preventDefault();

//   const file = $('#filename').prop('files')[0];
//   let formData = new FormData();
//   formData.append('file', file);
//   formData.append('id', imageId);

//   $.ajax({
//     url: '../itemimages/add/',
//     dataType: 'text',
//     contentType: false,
//     processData: false,
//     data: formData,
//     type: 'post',
//     success(response) {
//       setTimeout(() => {
//         $('#imageUploadDialog').dialog('close');
//         $.messager.show({
//           title: 'Success',
//           msg: 'Image Saved Successfully',
//         });
//       }, 1000);
//     },
//     error(err) {
//       console.error(err);
//     },
//   });
// });

// const previewImage = (event) => {
//   var reader = new FileReader();

//   reader.onload = function () {
//     var output = document.getElementById('output_image');
//     output.src = reader.result;
//   };

//   reader.readAsDataURL(event.target.files[0]);
// };

// // get images for medical equipments
// $.get('viewItemImages/', {}, (data) => {
//   const response = $.parseJSON(data);

//   response.forEach((element, index) => {
//     let collapsable = `<div class="panel panel-col-pink">
//       <div class="panel-heading" role="tab" id="heading${index}">
//         <!-- <h4 class="panel-title"> -->
//         <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_9" href="#collapse${index}" aria-expanded="false" aria-controls="collapseTwo_9">
//          ${element.itemName}
//         </a>
//         <!-- </h4> -->
//       </div>
//       <div id="collapse${index}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo_9">
//         <div class="panel-body">
//           <div class="row">
            
//               %thumbnail%
            
//           </div>
//         </div>
//       </div>
//     </div>`;

//     let html = '';

//     element.images.split(',').forEach(
//       (el) =>
//         (html += `<div class="col-sm-6 col-md-3"> 
//         <div class="thumbnail">
//       <img src="%imgPlaceHolder%" style="width:250px; height:200px;">
//       <div class="caption">
//         <h3>Item Name</h3>
//         <p>
//          Item description
//         </p>
//         <p>
//           <a href="javascript:void(0);" class="btn btn-primary waves-effect" role="button">BUTTON</a>
//         </p>
//       </div>
//     </div>
//     </div>`.replace('%imgPlaceHolder%', el))
//     );

//     html = collapsable.replace('%thumbnail%', html);

//     document
//       .querySelector('.panel-group')
//       .insertAdjacentHTML('beforeend', html);
//   });
// });

// // show equipment with specifications
// $.get('../specs/itemSpec/', {}, (data) => {
//   const response = $.parseJSON(data);

//   response.forEach((element) => {
//     let imageRow = `<div class="row" style="margin:10px; border: 2px solid pink; padding: 2em;">
//     <div class="col-sm-6 col-md-6 col-lg-6">
//       <a href="javascript:void(0);" class="thumbnail">
//         <img src="%imagePath%" class="img-responsive">
//       </a>
//     </div>
//     <div class="col-sm-6 col-md-6 col-lg-6">
//         <h1 style="text-transform:uppercase;font-size:12px;text-decoration:underline;">Specifications</h1>
//         <ul class="list-group">
//           %specList%
//         </ul>
//     </div>
//   </div>
//     `;

//     imageRow = imageRow.replace('%imagePath%', element.filename);

//     let listItem = '';
//     element.specs.split(',').forEach((el) => {
//       listItem += `<li class="list-group-item">${el}</li>`;
//     });

//     listItem = imageRow.replace('%specList%', listItem);

//     document
//       .querySelector('#messages')
//       .insertAdjacentHTML('beforeend', listItem);
//   });
// });
