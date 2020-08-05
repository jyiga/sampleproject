

 function neweventcalendar(x){
$('#dlgeventcalendar').dialog('open').dialog('setTitle','Enter eventcalendar ');
$('#frmeventcalendar').form('clear');
$('#startDate').datebox('setValue',x);
 url='add'; 
}

function attachInvoice()
{
    $('#dlginvoiceattachment').dialog('open').dialog('setTitle','Enter eventcalendar ');

}
function attachnow()
{
    var row=$('#dginvoice').datagrid('getSelected');
    if(row)
    {
            $('#invoiceId').val(row.id);
        $('#dlginvoiceattachment').dialog('close');
    }else
    {
        $('#dlginvoiceattachment').dialog('close');
    }

}


 function editeventcalendar(){
 var row=$('#dgeventcalendar').datagrid('getSelected');
 if(row)
{
 $('#dlgeventcalendar').dialog('open').dialog('setTitle','Edit eventcalendar');
 $('#frmeventcalendar').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deleteeventcalendar(){
 var row=$('#dgeventcalendar').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgeventcalendar').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function saveeventcalendar(){
 saveForm('#frmeventcalendar',url,'#dlgeventcalendar','#dgeventcalendar');
}

 $(function() {
     var date = new Date();
     var d = date.getDate();
     var m = date.getMonth();
     var y = date.getFullYear();
     var calendar = $('#calendar').fullCalendar({
         header: {
             left: 'prev,next today',
             center: 'title',
             right: 'month,agendaWeek,agendaDay'
         },
         selectable: true,
         selectHelper: true,
         select: function(start, end, allDay) {
          /*var title = prompt('Event Title:');
           if (title) {
           calendar.fullCalendar('renderEvent',
           {
           title: title,
           start: start,
           end: end,
           allDay: allDay
           },
           true // make the event "stick"
           );
           }*/
             calendar.fullCalendar('unselect');
         },
         editable: false,

         events:{url:'generateEvent',type:'POST'},
         dayClick:function(date, jsEvent, view)
         {
          /*alert('Clicked on: ' + date.format());

           alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

           alert('Current view: ' + view.name);*/
             //alert('Clicked on: ' + date.format());
             neweventcalendar(date.format());
         },
         eventClick: function(event) {
             if (event.url)
             {
                 var id=event.url;

                 $.post("getEvent/"+id,{id:id},function(data){
                     $('#dlgeventcalendar').dialog('open').dialog('setTitle','Edit Event');
                     var data2 =$.parseJSON(data);
                     $('#frmeventcalendar').form('load',data2);
                     //alert(data2.id);
                     url='edit/'+data2.id;
                     //getInvoiceNo(data2.jobId);
                     //prepare_datagrid2();
                 }) ;
                 return false;
             }
         }
     });
 });


