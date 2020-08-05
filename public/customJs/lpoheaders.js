var id;

function newlpoheader() {
    $('#dlglpoheader').dialog('open').dialog('setTitle', 'Enter lpoheader ');
    $('#frmlpoheader').form('clear');
    generatelponumber();
    url = 'add';
}

function editlpoheader() {
    var row = $('#dglpoheader').datagrid('getSelected');
    if (row) {
        if (row.lpostatus != 'APPROVED') {
            $('#dlglpoheader').dialog('open').dialog('setTitle', 'Edit lpoheader');
            $('#frmlpoheader').form('load', row);
            preparelpoitems();
            url = 'edit/' + row.id;
            console.log(id);
        } else {
            $.messager.alert("Warning", "Cannot Edit approved Local Purchase Order Please call Xonib Software System Support Team 0781587081");
        }
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function approveLpo(){
    var row = $('#dglpoheader').datagrid('getSelected');
    id = row.id;
    if(row.lpostatus == 'APPROVE'){
        $('#dlglpoApproval').dialog('open').dialog('setTitle', 'Approve Local Purchase Order Item');
        $('#lpFormNo').html(row.id);
        $('#lpoCreationDate').html(row.creationDate);
        $('#lpoSupplier').html(row.companyName);
        $('#lpoDateExpected').html(row.dateExpected);
        $('#dglpoItemAprroval').datagrid('load','../lpoitems/viewall/'+row.id);
    } else {
        $.messager.alert('Warning', 'Select An Item For Approval');
    }
}

function sendLpoApprove(){
    loadingBar('Xonib saving batch..................');
    $.post('approve/'+id,{},function(data){
        closeBar();
        var data2=$.parseJSON(data);
        if(data2.msg)
        {
            $.messager.alert('Error','Error while saving data .. please call support.'+ data2.msg,'error')
        }else
        {
            $('#dlglpoApproval').dialog('close');
            $('#dglpoheader').datagrid('reload');
        }

    });
}

function declineLpo(){
    $.post('decline/'+id,{},function(data){
        closeBar();
        var data2=$.parseJSON(data);
        if(data2.msg)
        {
            $.messager.alert('Error','Error while saving data .. please call support.'+ data2.msg,'error')
        }else
        {
            $('#dlglpoApproval').dialog('close');
            $('#dglpoheader').datagrid('reload');
        }
    });
}

function deletelpoheader() {
    var row = $('#dglpoheader').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.id, {}, function (data) {
                    $('#dglpoheader').datagrid('reload');
                });

            }
        });
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function savelpoheader() {

    // saveForm('#frmlpoheader', url, '#dlglpoheader', '#dglpoheader');
    // replace the function with body context bse of logic
    //logic was if i saving a dialog i need to ask the user if they would like to send for submission
    /*$('#frmlpoheader').form('submit', {
        url: url,
        onSubmit: function () {
            // $.messager.alert('info',$(this).form('validate'));
            if ($(this).form('validate') == false) {
                $.messager.progress('close');
            }
            return $(this).form('validate');
        },
        success: function (result) {
            $.messager.progress('close');
            var result = eval('(' + result + ')');
            if (result.msg) {
                $.messager.show({
                    title: 'Warning',
                    msg: result.msg
                });
            } else {
                $.messager.show({
                    title: 'Info',
                    msg: 'successfully completed'
                });

                // reload the user
                $.messager.confirm('Alert', 'Would like to submit Purchase Order for Approval', function (r) {
                    if (r) {
                        savesendtoapprovelpoheader();

                    } else {
                        $('#dlglpoheader').dialog('close');
                        $('#dglpoheader').datagrid('reload');
                    }
                });
            }

        }
    });*/

    $.messager.confirm('Warning', 'Would like to send Request Form for Approval', function(r) {
        if (r) {
            saveForm('#frmlpoheader', url, '#dlglpoheader', '#dglpoheader');
            lpoAproval();
        }else
        {
            alert(url);
            saveForm('#frmlpoheader', url, '#dlglpoheader', '#dglpoheader');
        }
    }, 'info');
}

function lpoAproval(){
    var id=$('#id').val();
    if(url=='add') {
        url='edit/'+ id;
    }
    $.post(url, {status:'send'}, function(data){
        var data2=$.parseJSON(data);
        if(data2.msg)
        {
            $.messager.alert('Error','Error While Submit for Approval','error');
        }else
        {
            $('#dlglpoheader').dialog('close');
            $('#dgstockrequestheader').datagrid('reload');
        }
    });
}

// function savesendtoapprovelpoheader() {
//     var id = $('#id').val();
//     $.post('sendtoapprove/' + id, {}, function (data) {
//
//         var data2 = $.parseJSON(data);
//         if (data2.msg) {
//
//             $.messager.alert('Error', 'Error While Submitting For Approval', 'error');
//         } else {
//             $('#dglpoheader').datagrid('reload');
//         }
//
//         //$('#dglpoheader').datagrid('reload');});
//         //url = 'savesendtoapprovelpoheader';
//     });
// }


function generatelponumber() {
    $.post("getNumberNo", {}, function (data) {
        var data2 = $.parseJSON(data);
        $('#id').val(data2.countNo);
        preparelpoitems();
    })

}


function preparelpoitems() {
    var id = $('#id').val();
    //console.log(id);
    //prepare_fuelOrder();
    $('#dglpoItem').edatagrid({
        url: '../lpoitems/viewall/' + id,
        saveUrl: '../lpoitems/add/' + id,
        updateUrl: '../lpoitems/edit/' + id,
        destroyUrl: '../lpoitems/delete/',
        onSuccess: function () {
            $('#dglpoItem').datagrid('reload');
        }
    });
}
function receiveItem()
{
    var row=$('#dglpoheaderr').datagrid('getSelected');
    if(row)
    {
        $('#dlgreceived').dialog('open').dialog('setTitle','Receive Requested Purchase');
        $('#frmreceived').form('clear');
        //$('#stockId').val(row.stockId);
        $('#stockName').val(row.stockName);
        $('#qty').val(row.quantity);
        $('#unit').val(row.unitPrice);
        $('#receivedBy').val(row.supplierName);
        url='../stockIssues/lpoadd/'+row.id+'/'+row.stockId;
    }else
    {

    }

}


function saveReceived()
{
    saveForm('#frmreceived', url, '#dlgreceived', '#dglpoheaderr');
}
