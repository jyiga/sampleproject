//check if the Item is not id.
$(function () {
    var id = qs('id');
    if (id !== undefined)
    {
        var idnew = id.replace('#', '');

            url='edit/'+idnew;
    }else
    {
            url='add'
    }
    //$.messager.alert('Warning',url);
});



 function newemployee(){
$('#dlgemployee').dialog('open').dialog('setTitle','Enter employee ');
$('#frmemployee').form('clear');
 url='add'; 
}

 function editemployee(){
 var row=$('#dgemployee').datagrid('getSelected');
 if(row)
{
 $('#dlgemployee').dialog('open').dialog('setTitle','Edit employee');
 $('#frmemployee').form('load',row); 
 url='edit/'+row.empNo;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteemployee(){
 var row=$('#dgemployee').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.empNo,{},function(data){ $('#dgemployee').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 /*function saveemployee(){
 saveForm('#frmemployee',url,'#dlgemployee','#dgemployee');
}*/

 function saveemployee(){
     if(url=='add') {
         if ($('#photo').get(0).files.length === 0) {
             alert("No file Uploaded");
             saveFormUrl2('#frmemployee',url,'../employees/view');
             //saveForm('#frmmenu','../foodmenus/add','#dlgmenu','#dgmenu');
         }else {
             $.messager.progress();
             var fd = new FormData();
             var files = $('#photo')[0].files[0];
             var firstName = $('#firstName').val();
             var lastName = $('#lastName').val();
             var sex = $('#sex').combobox('getValue');
             var dob = $('#dob').datebox('getValue');
             var town = $('#town').val();
             var district = $('#district').val();
             var nationID = $('#nationID').val();
             var mobile1 = $('#mobile1').val();
             var mobile2 = $('#mobile2').val();
             var nikname = $('#nikname').val();
             var contact = $('#contact').val();
             var positionId = $('#positionID').combobox('getValue');

             fd.append('file', files);
             fd.append('firstName', firstName);
             fd.append('lastName', lastName);
             fd.append('sex', sex);
             fd.append('dob', dob);
             fd.append('town', town);
             fd.append('district', district);
             fd.append('nikname', nikname);
             fd.append('contact', contact);
             fd.append('mobile2', mobile2);
             fd.append('mobile1', mobile1);
             fd.append('nationID', nationID);
             fd.append('positionID', positionId);
             $.ajax({
                 url: 'add',
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
                         //$('#dlgmenu').dialog('close');
                         //$('#dgmenu').datagrid('reload'); // close the dialog
                         // reload the user
                         //redirect screens
                         window.location='../employees/view';
                     }

                 },
                 dataType: 'json'
             });
         }

     }else
     {
         saveFormUrl2('#frmemployee',url,'../employees/view');
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
