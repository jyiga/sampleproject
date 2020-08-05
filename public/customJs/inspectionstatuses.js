function newinspectionstatuse() {
    $.post('../roominspections/generateInspection', {}, function (data) {
        //data will be the inspection id
        // console.log(data.id);
        $('#dginspectionstatuse').datagrid('reload');
    });
    
}

function cleanRoom(){
    let row = $('#dginspectionstatuse').datagrid('getSelected');
    if(row){
        $.post('../roominspections/clean/'+ row.id, {}, ()=>{
            $('#dginspectionstatuse').datagrid('reload');
        });
    }else{
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select rooms to clean'
        });
    }
}
/*
function newinspectionstatuse(){
$('#dlginspectionstatuse').dialog('open').dialog('setTitle','Enter inspectionstatuse ');
$('#frminspectionstatuse').form('clear');
 url='add'; 
}
*/

function editinspectionstatuse() {
    var row = $('#dginspectionstatuse').datagrid('getSelected');
    if (row) {
        $('#dlginspectionstatuse').dialog('open').dialog('setTitle', 'Edit inspectionstatuse');
        $('#frminspectionstatuse').form('load', row);
        url = 'edit/' + row.id;
    } else {
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select a item to to edit'
        });
    }
}

function deleteinspectionstatuse() {
    var row = $('#dginspectionstatuse').datagrid('getSelected');
    if (row) {
        $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
            if (r) {
                $.post('delete/' + row.id, {}, function (data) {
                    $('#dginspectionstatuse').datagrid('reload');
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

function saveinspectionstatuse() {
    saveForm('#frminspectionstatuse', url, '#dlginspectionstatuse', '#dginspectionstatuse');
}