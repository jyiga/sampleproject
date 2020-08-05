function newrooomdiscount() {
    $('#dlgrooomdiscount').dialog('open').dialog('setTitle', 'Enter rooomdiscount ');
    $('#frmrooomdiscount').form('clear');
    url = 'add';
}

function editrooomdiscount() {
    var row = $('#dgrooomdiscount').datagrid('getSelected');
    if (row) {
        $('#dlgrooomdiscount').dialog('open').dialog('setTitle', 'Edit rooomdiscount');
        $('#frmrooomdiscount').form('load', row);
        url = 'edit/' + row.id;
    } else {
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select a item to to edit'
        });
    }
}

function deleterooomdiscount() {
    var row = $('#dgrooomdiscount').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.id, {}, function (data) {
                    $('#dgrooomdiscount').datagrid('reload');
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

function saverooomdiscount() {
    saveForm('#frmrooomdiscount', url, '#dlgrooomdiscount', '#dgrooomdiscount');
}

// AML 2019-05-16

function getTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}

function approveroomdiscount(){
   saverooomdiscount(); 
}

function approveroombooking() {
    let row = $('#dgrooomdiscount').datagrid('getSelected');
    if (row) {
        $('#dlgrooomdiscount').dialog('open').dialog('setTitle', 'Approve Discount');
        $('#frmrooomdiscount').form('load', row);
        $('#approvalTime').timespinner('setValue', getTime());
        url = 'approve/' + row.id;
    } else {
        $.messager({
            title: 'Warning!',
            msg: 'Please select an item to Approve',
        });
    }
}