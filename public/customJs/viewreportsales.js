function newviewreportsale() {
    $('#dlgviewreportsale').dialog('open').dialog('setTitle', 'Enter viewreportsale ');
    $('#frmviewreportsale').form('clear');
    url = 'add';
}

function editviewreportsale() {
    var row = $('#dgviewreportsale').datagrid('getSelected');
    if (row) {
        $('#dlgviewreportsale').dialog('open').dialog('setTitle', 'Edit viewreportsale');
        $('#frmviewreportsale').form('load', row);
        url = 'edit/' + row.invoiceNo;
    } else {
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select a item to to edit'
        });
    }
}

function deleteviewreportsale() {
    var row = $('#dgviewreportsale').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.invoiceNo, {}, function (data) {
                    $('#dgviewreportsale').datagrid('reload');
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

function saveviewreportsale() {
    saveForm('#frmviewreportsale', url, '#dlgviewreportsale', '#dgviewreportsale');
}

function findItem() {
    var x = $('#searchOpt').val();
    $('#dgviewreportsale').datagrid('reload', 'search/' + x);
}

function findBydate(){
    var date = $('#date').datebox('getValue')
    $('#dgviewreportsale').datagrid('reload', 'searchByDate/' + date);
}