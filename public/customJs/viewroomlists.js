function newviewroomlist() {
    $('#dlgviewroomlist').dialog('open').dialog('setTitle', 'Enter viewroomlist ');
    $('#frmviewroomlist').form('clear');
    url = 'add';
}

function editviewroomlist() {
    var row = $('#dgviewroomlist').datagrid('getSelected');
    if (row) {
        $('#dlgviewroomlist').dialog('open').dialog('setTitle', 'Edit viewroomlist');
        $('#frmviewroomlist').form('load', row);
        url = 'edit/' + row.name;
    } else {
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select a item to to edit'
        });
    }
}


function deleteviewroomlist() {
    var row = $('#dgviewroomlist').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.name, {}, function (data) {
                    $('#dgviewroomlist').datagrid('reload');
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

function saveviewroomlist() {
    saveForm('#frmviewroomlist', url, '#dlgviewroomlist', '#dgviewroomlist');
}
///AML 2019-05-20
function findList() {
    var serachOption = $('#searchOpt').datebox('getValue');
    $('#dgviewroomlist').datagrid('load', 'viewRoomList/' + serachOption);
}