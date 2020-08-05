function newRoomTypes() {
    $('#dlgRoomTypes').dialog('open').dialog('setTitle', 'Enter RoomTypes ');
    $('#frmRoomTypes').form('clear');
    getRoomID();
    url = 'add';
}

function editRoomTypes() {
    var row = $('#dgRoomTypes').datagrid('getSelected');
    if (row) {
        $('#dlgRoomTypes').dialog('open').dialog('setTitle', 'Edit RoomTypes');
        $('#frmRoomTypes').form('load', row);
        url = 'edit/' + row.id;
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function deleteRoomTypes() {
    var row = $('#dgRoomTypes').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.id, {}, function (data) {
                    $('#dgRoomTypes').datagrid('reload');
                });

            }
        });
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function saveRoomTypes() {
    saveForm('#frmRoomTypes', url, '#dlgRoomTypes', '#dgRoomTypes');
}

function getRoomID() {
    $.post("getRoomNo", {}, function (data) {

        $("#id").val(data);

    });

}