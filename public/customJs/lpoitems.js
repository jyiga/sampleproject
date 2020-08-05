function newlpoitem() {
    $('#dlglpoitem').dialog('open').dialog('setTitle', 'Enter lpoitem ');
    $('#frmlpoitem').form('clear');
    url = 'add';
}

function editlpoitem() {
    var row = $('#dglpoitem').datagrid('getSelected');
    if (row) {
        $('#dlglpoitem').dialog('open').dialog('setTitle', 'Edit lpoitem');
        $('#frmlpoitem').form('load', row);
        url = 'edit/' + row.id;
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function deletelpoitem() {
    var row = $('#dglpoitem').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.id, {}, function (data) {
                    $('#dglpoitem').datagrid('reload');
                });

            }
        });
    }
    else {
        $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
    }
}

function savelpoitem() {
    saveForm('#frmlpoitem', url, '#dlglpoitem', '#dglpoitem');
}