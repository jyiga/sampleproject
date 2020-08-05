function loadEditable(tableName) {

    var id = tableName;
    //prepare_fuelOrder();
    $('#dgentityform').edatagrid({
        url: '../entityforms/viewall/' + id,
        saveUrl: '../entityforms/add/' + id,
        updateUrl: '../entityforms/edit/' + id,
        destroyUrl: '../entityforms/delete/',
        onSuccess: function () {
            $('#dgentityform').datagrid('reload');
        },
       //onAdd: function (index, row) {


            //alert($('#headerId').combobox('getValue'));
           // var heading_id = $('#headerId').combobox('getValue') !== '' && $('#headerId').combobox('getValue') !== null ? $('#headerId').combobox('getValue') : '';

           // set_values(index);


            //alert(heading_id);
        //}
    });
 }

 function entryPoint(tableName)
 {
     $.post('../entityforms/addCols/'+tableName,{},function(data){
        loadEditable(tableName);
        //var result;
     })

 }

 function saveCodeBuilder()
 {
    saveFormNoDialog('#frmsubActivity', 'add');
    $('#frmsubActivity').form('clear');
    $('##dgentityform').datagrid('load','../entityforms/viewall/0');
 }