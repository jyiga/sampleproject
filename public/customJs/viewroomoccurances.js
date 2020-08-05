function newviewroomoccurance() {
    $('#dlgviewroomoccurance').dialog('open').dialog('setTitle', 'Enter viewroomoccurance ');
    $('#frmviewroomoccurance').form('clear');
    url = 'add';
}

function editviewroomoccurance() {
    var row = $('#dgviewroomoccurance').datagrid('getSelected');
    if (row) {
        $('#dlgviewroomoccurance').dialog('open').dialog('setTitle', 'Edit viewroomoccurance');
        $('#frmviewroomoccurance').form('load', row);
        url = 'edit/' + row.room_no;
    } else {
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select a item to to edit'
        });
    }
}

function deleteviewroomoccurance() {
    var row = $('#dgviewroomoccurance').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.room_no, {}, function (data) {
                    $('#dgviewroomoccurance').datagrid('reload');
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

function saveviewroomoccurance() {
    saveForm('#frmviewroomoccurance', url, '#dlgviewroomoccurance', '#dgviewroomoccurance');
}

function findList() {
    var serachOption = $('#searchOpt').datebox('getValue');
    $('#dgviewroomoccurance').datagrid('load', 'viewRoomList/' + serachOption);
}