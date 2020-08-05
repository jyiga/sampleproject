

 function newcustomerorder(){
$('#dlgcustomerorder').dialog('open').dialog('setTitle','Enter customerorder ');
$('#frmcustomerorder').form('clear');
 url='add'; 
}

 function editcustomerorder(){
 var row=$('#dgcustomerorder').datagrid('getSelected');
 if(row)
{
 $('#dlgcustomerorder').dialog('open').dialog('setTitle','Edit customerorder');
 $('#frmcustomerorder').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletecustomerorder(){
 var row=$('#dgcustomerorder').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgcustomerorder').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savecustomerorder(){
 saveForm('#frmcustomerorder',url,'#dlgcustomerorder','#dgcustomerorder');
}

$(function () {
  $('#dgcustomerorder').datagrid({
    view: detailview,
    detailFormatter: function (index, row) {
      return '<div style="width:650px;padding:2px"><table class="ddv"></table></div>'
    },
    onExpandRow: function (index, row) {
      var ddv = $(this).datagrid('getRowDetail', index).find('table.ddv')
      ddv.datagrid({
        url: '../orderitems/viewall/' + row.id,
        fitColumns: true,
        singleSelect: true,
        rownumber: true,
        oadMsg: 'Please wait the service information is loading',
        height: 'auto',
        columns: [[{ field: 'itemName', title: 'Item', width: 90 }, { field: 'qty', title: 'QTY', width: 90 },{ field: 'amount', title: 'Rate', width: 90 },{ field: 'total', title: 'Total', width: 90 }]],
        onResize: function () {
          $('#dgcustomerorder').datagrid('fixDetailRowHeight', index)
        },
        onLoadSuccess: function () {
          // alert(index);
          setTimeout(function () {
            $('#dgcustomerorder').datagrid('fixDetailRowHeight', index)
            // alert(index);
          }, 0)
        }

      })
      $('#dgcustomerorder').datagrid('fixDetailRowHeight', index)
    },
    onLoadSuccess: function () {
      // $('#dgTransaction').datagrid('expandRow',0);
    }

  })
})
