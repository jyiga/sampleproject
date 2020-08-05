
//not used
 function newfinancialmonth(){
$('#dlgfinancialmonth').dialog('open').dialog('setTitle','Enter financialmonth ');
$('#frmfinancialmonth').form('clear');
 url='add';
}

 function openfinancialmonth(){
     var row=$('#dgfinancialmonth').datagrid('getSelected');
     if(row)
     {
         //$('#dlgfinancialmonth').dialog('open').dialog('setTitle','Edit financialmonth');
         //$('#frmfinancialmonth').form('load',row);

         $.post('open/'+row.id,{},function(data)
            {
                $('#dgfinancialmonth').datagrid('reload');
            })
     }
     else{
         $.messager.show({title:'Warning!',msg:'Please select a item to to edit'});}
 }



 function editfinancialmonth(){
 var row=$('#dgfinancialmonth').datagrid('getSelected');
 if(row)
{
 $('#dlgfinancialmonth').dialog('open').dialog('setTitle','Edit financialmonth');
 $('#frmfinancialmonth').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletefinancialmonth(){
 var row=$('#dgfinancialmonth').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgfinancialmonth').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savefinancialmonth(){
 saveForm('#frmfinancialmonth',url,'#dlgfinancialmonth','#dgfinancialmonth');
}