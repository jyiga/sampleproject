
var id=-1;

 function newmenu(){
$('#dlgmenu').dialog('open').dialog('setTitle','Enter menu ');
$('#frmmenu').form('clear');
     getId();
 url='add'; 
}

function getId()
{
    $.post('../foodmenus/getFoodMenuId',{},function(data){
        $('#id').val(data);
        id=data;
        reloadGrid(data)
        prepareIngridientDatagrid();

    })
}

function reloadGrid(id)
 {
     $('#dgservingshift').datagrid('load','../foodmenus/getShiftInclude/'+id)
 }
function includesHIFT() {
    var row = $('#dgservingshift').datagrid('getSelected');
    if (row) {
        var idShift=row.id;
        var menuId=id;
        $.post('../foodmenushifts/add',{'foodmenuId':menuId,'shiftId':idShift}, function(data){
            $('#dgservingshift').datagrid('reload');

        })

    }else
    {
        $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    }
}

 function editmenu(){
 var row=$('#dgmenu').datagrid('getSelected');
 if(row)
{
 $('#dlgmenu').dialog('open').dialog('setTitle','Edit menu');
 $('#frmmenu').form('clear');
 id=row.id;
 $('#id').val(row.id);
 $('#foodName').val(row.foodName);
 $('#discount').val(row.discount);
 $('#cost').val(row.cost);
 $('#menuTypeId').combobox('setValue',row.menuTypeId);
 $('#stockId').combobox('setValue',row.stockId);
    alert(row.available);
 if(parseInt(row.available)==1)
 {
     $('#available').iCheck('check');

 }else
 {
     $('#available').iCheck('uncheck');
 }
    reloadGrid(row.id);
    prepareIngridientDatagrid()
 //alert(row.cost);
 url='../foodmenus/edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletemenu()
 {
 var row=$('#dgmenu').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('../foodmenus/delete/'+row.id,{},function(data){ $('#dgmenu').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

function prepareIngridientDatagrid()
{
    var id=$('#id').val();
    $('#dgingrdient').edatagrid({
            url:'../ingrdients/viewall/'+id,
            saveUrl:'../ingrdients/add/'+id,
            updateUrl:'../ingrdients/edit/'+id,
            destroyUrl:'../ingrdients/delete',
            onSuccess:function(){
                $('#dgingrdient').datagrid('reload');
            }

        }

    )

}


 function savemenu(){

     if(url=='add')
     {
         if ($('#pic').get(0).files.length === 0) {

             alert("No file Uploaded");
            saveForm('#frmmenu','../foodmenus/add','#dlgmenu','#dgmenu');
         }else {
             $.messager.progress();
             var fd = new FormData();
             var files = $('#pic')[0].files[0];
             var menuTypeId = $('#menuTypeId').combobox('getValue');
             var foodName = $('#foodName').val();
             var stockId = $('#stockId').combobox('getValue');
             var discount = $('#discount').val();
             var available = $('#available').val();
             var cost = $('#cost').val();

             //alert(files.name);

             fd.append('file', files);
             fd.append('menuTypeId', menuTypeId);
             fd.append('foodName', foodName);
             fd.append('stockId', stockId);
             fd.append('discount', discount);
             fd.append('available', available);
             fd.append('cost', cost);


             $.ajax({
                 url: '../foodmenus/add',
                 type: 'post',
                 data: fd,
                 contentType: false,
                 processData: false,
                 success: function (respond) {
                     $.messager.progress('close');
                     //var respondData=$.parseJSON(respond);
                     //var respond = eval('('+respond+')');
                     if (respond.msg) {
                         $.messager.show('Title', respondData.msg);
                     } else {
                         //$.messager.progress('close');
                         $.messager.show({
                             title: 'Info',
                             msg: 'successfully completed'
                         });
                         $('#dlgmenu').dialog('close');
                         $('#dgmenu').datagrid('reload'); // close the dialog
                         // reload the user
                     }

                 },
                 dataType: 'json'
             });
         }

     }else
     {
         saveForm('#frmmenu',url,'#dlgmenu','#dgmenu');
     }
     //saveForm('#frmmenu',url,'#dlgmenu','#dgmenu');

     /*var fd =new FormData($('form[name="frmmenu"]').form());
     var files=$('#pic')[0].files[0];
     var menuTypeId=$('#menuTypeId').combobox('getValue');
     var foodName=$('#foodName').val();
     var stockId=$('#stockId').combobox('getValue');
     var discount=$('#discount').val();
     var available=$('#available').val();
     var cost=$('#cost').val();
     //fd.append('file',files);
     //fd.append('foodName',foodName);
//{'file':files,'menuTypeId':menuTypeId,'foodName':foodName,'stockId':stockId,'discount':discount,'available':available,'cost':cost}

     $.ajax({
         url:'add',
         type:'post',
         data:fd,
         contentType:false,
         processData:false,
         success:function(respond)
         {
          var respondData=$.parseJSON(respond);
          if(respondData.msg)
          {
             $.messager.show('Title',respondData.msg);
          }else
          {
           $('#dlgmenu').dialog('close');
           $('#dgmenu').datagrid('reload');
          }

         },
         dataType:'json'
     })*/
}

function uploadFile()
{

}

function deleteingrdient(){
    var row=$('#dgingrdient').datagrid('getSelected');
    if(row)
    {
        $.messager.confirm('Warning', 'Are you sure of the the act', function(r){
            if (r){
                $.post('../ingrdients/delete/'+row.id,{},function(data){
                    $('#dgingrdient').datagrid('reload');});

        }
        });}
    else{
        $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});
    }
}