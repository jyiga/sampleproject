function newviewguestlistreport() {
    $('#dlgviewguestlistreport').dialog('open').dialog('setTitle', 'Enter viewguestlistreport ');
    $('#frmviewguestlistreport').form('clear');
    url = 'add';
}

function editviewguestlistreport() {
    var row = $('#dgviewguestlistreport').datagrid('getSelected');
    if (row) {
        $('#dlgviewguestlistreport').dialog('open').dialog('setTitle', 'Edit viewguestlistreport');
        $('#frmviewguestlistreport').form('load', row);
        url = 'edit/' + row.name;
    } else {
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select a item to to edit'
        });
    }
}

function deleteviewguestlistreport() {
    var row = $('#dgviewguestlistreport').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.name, {}, function (data) {
                    $('#dgviewguestlistreport').datagrid('reload');
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

function saveviewguestlistreport() {
    saveForm('#frmviewguestlistreport', url, '#dlgviewguestlistreport', '#dgviewguestlistreport');
}

function search(x){
    $.post('listitems/'+ x, {}, function(data){
        if(data){
            $('#dlgviewguestlistreport').datagrid('reload', 'listitems');
        }
    });
}