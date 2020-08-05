var id;

 function newstockrequestheader(){
$('#dlgstockrequestheader').dialog('open').dialog('setTitle','Enter stockrequestheader ');
$('#frmstockrequestheader').form('clear');
     getStockRequestNo();
     $('#commentary').hide();
     var comment=null
     if(comment==null)
     {
         $('#commentary').hide();
     }else
     {
         $('#com').html(row.comment);
         $('#commentary').show();

     }

 url='add';

}

 function editstockrequestheader(){
 var row=$('#dgstockrequestheader').datagrid('getSelected');
 if(row)
{
    var status=row.status;
    if(status!='APPROVED'&& status!='APPROVE')
    {
        $('#commentary').hide();
        if(row.comment==null)
        {
            $('#commentary').hide();
        }else
        {
            $('#com').html(row.comment);
            $('#commentary').show();

        }

        $('#dlgstockrequestheader').dialog('open').dialog('setTitle','Edit stockrequestheader');
        $('#frmstockrequestheader').form('load',row);
        id=row.id;
        prepareStockRequestItemEditableDatagrid();

        url='edit/'+row.id;
    }else
    {
        $.messager.alert('Warning','Please select a Request not in Approve or approved.')
    }

}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletestockrequestheader(){
 var row=$('#dgstockrequestheader').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgstockrequestheader').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savestockrequestheader()
 {
     $.messager.confirm('Warning', 'Would like to send Request Form for Approval', function(r) {
         if (r) {
             saveForm('#frmstockrequestheader',url,'#dlgstockrequestheader','#dgstockrequestheader');
             submitforApproval();

         }else
         {
             //alert(url);
             saveForm('#frmstockrequestheader',url,'#dlgstockrequestheader','#dgstockrequestheader');
             //submitforApproval();
         }
     }
     ,'info');
}

function getStockRequestNo()
{
 $.post('getStockRequestNo',{},function(data){
    var respondData=$.parseJSON(data);
    id=respondData.countNo;
    $('#id').val(id);
    //ready the editable Datagrid
     prepareStockRequestItemEditableDatagrid();

 })
}

function prepareStockRequestItemEditableDatagrid()
{

  $('#dgStockRequestItem').edatagrid({
   url:'../stockrequestitems/viewall/'+id,
      saveUrl:'../stockrequestitems/add/'+id,
      updateUrl:'../stockrequestitems/edit/'+id,
      destroyUrl:'../stockrequestitems/delete',
      onSuccess:function(){
          $('#dgStockRequestItem').datagrid('reload');
      }

      }

  )

}
function submitforApproval()
{

  if(url=='add')
  {
    url='edit/'+id;
  }
  $.post(url,{'status':'send'},function(data){
    var data2=$.parseJSON(data);
    if(data2.msg)
    {
       $.messager.alert('Error','Error While Submit for Approval','error');
    }else
    {
        $('#dgstockrequestheader').datagrid('reload');
    }

  })
}

function openSearch()
{
    $('#dlgstockrequestheadersearch').dialog('open').dialog('setTitle','Advanced Search');
    $('#frmstockrequestsearchheader').form('clear');

}

function approveRequest()
{

    var row=$('#dgstockrequestheader').datagrid('getSelected');
    if(row)
    {
        id=row.id;
        $('#dlgRequestApproval').dialog('open').dialog('setTitle','Approve/ Verify Requested Items');
        $('#formNotxt').html(row.id);
        $('#requestBytxt').html(row.requestBy);
        $('#creationDatetxt').html(row.creationDate);
        $('#expectedDatetxt').html(row.expectedDate);
        $('#dgStockRequestItem2').datagrid('load','../stockrequestitems/viewall/'+row.id);
    }
    else
    {
        $.messager.show({title:'Warning!',msg:'No Request is selected to Approve.'});
    }

}

function sendforApproved()
{
    loadingBar('Xonib saving batch..................');
    $.post('approved/'+id,{},function(data){
        closeBar();
        var data2=$.parseJSON(data);
        if(data2.msg)
        {
            $.messager.alert('Error','Error while saving data .. please call support.'+ data2.msg,'error')
        }else
        {
            $('#dlgRequestApproval').dialog('close');
            $('#dgstockrequestheader').datagrid('reload');
        }

    });
}

function sendforDecline()
{
    loadingBar('Xonib saving batch..................');

    var comment=$('#comment').val();
    alert(comment);
    $.post('decline/'+id,{comment:comment},function(data){
        closeBar();
        var data2=$.parseJSON(data);
        if(data2.msg)
        {
            $.messager.alert('Error','Error while saving data .. please call support.'+ data2.msg,'error')
        }else
        {
            $('#dlgRequestApproval').dialog('close');
            $('#dgstockrequestheader').datagrid('reload');
        }

    });
}

function issueStockItem()
{
    var row=$('#dgstockrequestheader').datagrid('getSelected');
    if(row)
    {
        //id=row.id;
        $('#dlgstockissue').dialog('open').dialog('setTitle','Issue Item');
        $('#frmstockissue').form('clear');
        //$('').val(row.);
        //$('').val(row.);
        //$('').val(row.);
        $('#stockName').val(row.stockName);
        //$('#stockId').val(row.sriId);
        $('#stockId').val(row.stockId);
        $('#qty').val(row.qty);
       $('#unit').combobox('reload','../stockissues/unitPrice/'+row.stockId);


        url='../stockissues/add/'+row.sriId+'/OUT';
        /*$('#frmstockissue').html(row.id);
        $('#requestBytxt').html(row.requestBy);
        $('#creationDatetxt').html(row.creationDate);
        $('#expectedDatetxt').html(row.expectedDate);
        $('#dgStockRequestItem2').datagrid('load','../stockrequestitems/viewall/'+row.id);*/



    }
    else
    {
        $.messager.show({title:'Warning!',msg:'No Request is selected to Approve.'});
    }
}

function savestockissue(){
    saveForm('#frmstockissue',url,'#dlgstockissue','#dgstockrequestheader');
}
