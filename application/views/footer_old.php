</div>


</div>
</div>
</div>
</div>

<!-- footer content -->
<footer>
    <div class="pull-right">
        <p class="pull-right">Xonib Software &copy;. |
            <span class="lead">Simple and Better<i class="fa fa-cogs"></i></span>
        </p>
    </div>
    <div class="clearfix"></div>
</footer>
<!-- /footer content -->


<!-- /page content -->
</div>

</div>

<div id="custom_notifications" class="custom-notifications dsp_none">
    <ul class="list-unstyled notifications clearfix" data-tabbed_notifications="notif-group">
    </ul>
    <div class="clearfix"></div>
    <div id="notif-group" class="tabbed_notifications"></div>
</div>


<div id="dlgsuperuser2" class="easyui-dialog" closed="true" style="width:500px; padding:5px;" buttons="#superuserbutton2" modal="true" data-options="onBeforeClose:function(){checkvat(); return true;}" >
    <form id="frmsuperuser2" name="frmsuperuser" method="post">
        <div class='form-group' style='' ><label>UserName</label><input name='username2' value='' id='username2' class='form-control' type='text' /> </div>
        <div class='form-group' style='' ><label>Password</label><input name='password2' value='' id='password2' class='form-control' type='password' /> </div>
    </form>
</div>
<div id="superuserbutton2">
    <a href="#" class="btn btn-primary" onclick="authorise()">Authorize</a>&nbsp;
    &nbsp;
</div>


<?php //require_once('view/odometer/kmgraphgenerator.php'); ?>
<!-- jQuery -->
<script src="../public/vendor/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="../public/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- FastClick -->
<script src="../public/vendor/fastclick/lib/fastclick.js"></script>
<!-- NProgress -->
<script src="../public/vendor/nprogress/nprogress.js"></script>
<!-- jQuery Smart Wizard -->
<script src="../public/vendor/jQuery-Smart-Wizard/js/jquery.smartWizard.js"></script>
<!-- Switchery -->
<script src="../public/vendor/switchery/dist/switchery.min.js"></script>
<!--type head-->
<script src="../public/js/typeahead/bootstrap3-typeahead.min.js"></script>

<script src="../public/js/chartjs/chart.min.js"></script>
<script src="../public/js/nicescroll/jquery.nicescroll.min.js"></script>
<script src="../public/vendor/iCheck/icheck.min.js"></script>
<script type="text/javascript" src="../public/plugins/scripts/jquery/jquery.easyui.min.js"></script>
<!--<script type="text/javascript" src="../public/plugins/scripts/datepicker/js/bootstrap-datepicker.js"></script>-->
<script type="text/javascript" src="../public/plugins/scripts/jquerylib/jquery.edatagrid.js"></script>
<script type="text/javascript" src="../public/plugins/scripts/jquerylib/datagrid-detailview.js"></script>
<!--<script src="lib/signtures/jquery.signaturepad.min.js"></script>-->
<!--<script src="lib/signtures/assets/json2.min.js"></script>-->
<script src='../public/plugins/scripts/fullcalendar/lib/moment.min.js'></script>
<script src='../public/plugins/scripts/fullcalendar/fullcalendar.js'></script>
<script type="text/javascript" src="../public/plugins/scripts/js/scriptEngine.js"></script>
<script type="text/javascript" src="../public/js/pdfmaker/pdfmake.min.js"></script>
<script type="text/javascript" src="../public/js/pdfmaker/vfs_fonts.js"></script>
<script src="../public/js/ckeditor/ckeditor.js" type="text/javascript"></script>
<!-- Custom Theme Scripts -->

<script src="../public/js/custom.min.js"></script>
<?php
$html=new HTML();
echo $html->includeJs('../public/customJs/'. $this->_controller .'.js');

//require_once('controller/scriptController.php'); ?>


<!--<script src="js/jquery.min.js"></script>-->
<!--<script src="js/bootstrap.min.js"></script>-->

<!-- chart js -->

<!-- bootstrap progress js -->
<!--<script src="js/progressbar/bootstrap-progressbar.min.js"></script>-->

<!-- icheck -->



<!--<script src="vendor/jQuery-Smart-Wizard/js/jquery.smartWizard.js"></script>
<script src="js/custom.js"></script>
<script type="text/javascript" src="lib/external/jquery/jquery.easyui.min.js"></script>-->



<!--<script src="lib/signtures/assets/jquery.min.js"></script>-->



<!-- moris js -->


<script type="text/javascript">

    function showBalanceTitle()
    {
        $.post('../generaledgers/invoiceBalance/null',{criteria:"systemName='wallet'"},function(data){
            //alert(data);
            var bal=parseInt(data);
            var d='';
            if(bal<200000)
            {
                d='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ur" Wallet Balance is :<span class="text text-danger" style="color:#5c060a;">'+data+'</span>';
            }else
            {
                d='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ur" Wallet Balance is :<span class="text text-success" style="color:#17ab64;">'+data+'</span>';
            }

            $('#titleId2').html(d);
            //url= 'paybill'
        })
    }


    $(function(){
        $.post('../roleManagements/sideMenu',{},function(data){
            //$("#sidem").html(data);
        });
        //alert($('#titleId').html())
        $.post('../subActivitys/getfeaturename/0',{urlv:$('#titleId').html()},function(data){
            $('#titleId').html(data) });



    });
    function loadingBar(message){
        $.messager.progress({title:'loading',msg:message});
    }

    function closeBar()
    {
        $.messager.progress('close');
    }

    function saveForm(formName,url,dialogName,datagridName){
        //url=url;
        $.messager.progress();
        $(formName).form('submit',{ url: url,
            onSubmit: function(){
                // $.messager.alert('info',$(this).form('validate'));
                if($(this).form('validate')==false)
                {
                    $.messager.progress('close');
                }
                return $(this).form('validate');
            },
            success: function(result){
                $.messager.progress('close');
                var result = eval('('+result+')');
                if (result.msg){
                    $.messager.show({title: 'Warning',
                        msg: result.msg});
                } else {
                    $.messager.show({title: 'Info',
                        msg: 'successfully completed'});
                    $(dialogName).dialog('close');
                    $(datagridName).datagrid('reload'); // close the dialog
                    // reload the user
                }

            }
        });



    }




    function saveFormNoDatagrid(formName,url,dialogName){
        //url=url;
        $.messager.progress();
        $(formName).form('submit',{ url: url,
            onSubmit: function(){
                // $.messager.alert('info',$(this).form('validate'));
                if($(this).form('validate')==false)
                {
                    $.messager.progress('close');
                }
                return $(this).form('validate');
            },
            success: function(result){
                $.messager.progress('close');
                var result = eval('('+result+')');
                if (result.msg){
                    $.messager.show({title: 'Warning',
                        msg: result.msg});
                } else {
                    $.messager.show({title: 'Info',
                        msg: 'successfully completed'});
                    $(dialogName).dialog('close');
                    //$(datagridName).datagrid('reload'); // close the dialog
                    // reload the user
                }

            }
        });



    }



    function saveFormUrl(formName,url,urlx){
        //url=url;
        $.messager.progress({title:'Submitting',msg:'Please wait connecting to server in progress...'});
        $(formName).form('submit',{ url: url,
            onSubmit: function(){
                // $.messager.alert('info',$(this).form('validate'));
                if($(this).form('validate')==false)
                {
                    $.messager.progress('close');
                }
                return $(this).form('validate');
            },
            success: function(result){
                $.messager.progress('close');
                var result = eval('('+result+')');
                if (result.msg){
                    $.messager.show({title: 'Error',
                        msg: result.msg});
                } else {
                    $.messager.show({title: 'Info',
                        msg: 'successfully completed'});
                    //$(dialogName).dialog('close');
                    //$(datagridName).datagrid('reload'); // close the dialog
                    // reload the user
                    window.location=urlx+'&id='+result.x;
                }

            }
        });

    }

    function saveFormUrlRedirect(formName,url){
        //url=url;
        $.messager.progress({title:'Submitting',msg:'Please wait connecting to server in progress...'});
        $(formName).form('submit',{ url: url,
            onSubmit: function(){
                // $.messager.alert('info',$(this).form('validate'));
                if($(this).form('validate')==false)
                {
                    $.messager.progress('close');
                }
                return $(this).form('validate');
            },
            success: function(result)
            {
                $.messager.progress('close');
                var result = eval('('+result+')');
                if (result.msg){
                    $.messager.show({title: 'Error',
                        msg: result.msg});
                } else {
                    $.messager.show({title: 'Info',
                        msg: 'successfully completed'});
                    //$(dialogName).dialog('close');
                    //$(datagridName).datagrid('reload'); // close the dialog
                    // reload the user
                    window.location=result.url;
                }

            }
        });

    }



    function saveFormUrl2(formName,url,urlx){
        //url=url;
        $.messager.progress({title:'Submitting',msg:'Please wait connecting to server in progress'});
        $(formName).form('submit',{ url: url,
            onSubmit: function(){
                // $.messager.alert('info',$(this).form('validate'));
                if($(this).form('validate')==false)
                {
                    $.messager.progress('close');
                }
                return $(this).form('validate');
            },
            success: function(result){
                $.messager.progress('close');
                var result = eval('('+result+')');
                if (result.msg){
                    $.messager.show({title: 'Error',
                        msg: result.msg});
                } else {
                    $.messager.show({title: 'Info',
                        msg: 'successfully completed'});
                    $(formName).form('clear');
                    //$(dialogName).dialog('close');
                    //$(datagridName).datagrid('reload'); // close the dialog
                    // reload the user
                    window.location=urlx;
                }

            }
        });

    }
    function openDia(){
        $('#dlgGraphGenerator').dialog('open').dialog('setTitle','Km Graph Generator');
        $('#frmGraphGenerator').form('clear');
        //newTrip();
        //url='controller/capacityController.php?action=add';
    }
    function generateGraph()
    {
        var vehicleId=$('#geneId').combobox('getValue');
        location.href='admin.php?view=Vehicle_Kilometer_Graph&id='+vehicleId;

    }

    function notifyMe() {
        if (!("Notification" in window)) {
             alert("This browser does not support desktop notification");
        }
        else if (Notification.permission === "granted") {
            $.post('../purchasenotifications/notificationcount',{},function(data){
            if(parseInt(data)>0)
            {
                var options = {
                    body: "You have "+data+" purchase notification </br>please to Procurement module",
                    icon: "../public/images/logo.jpg",
                    dir : "ltr"
                };
                var notification = new Notification("System Alerts",options);
            }else
            {

            }


            });
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (!('permission' in Notification)) {
                    Notification.permission = permission;
                }

                if (permission === "granted") {
                    var options = {
                        body: "This is the body of the notification",
                        icon: "image2.jpg",
                        dir : "ltr"
                    };
                    var notification = new Notification("System Alerts",options);
                }
            });
        }
    }
    //var myVar=setInterval(function(){notifyMe()},150000);
    //var myVar=setTimeout(function(){notifyMe()}, 10);
    function getTitle(x)    
    {

    }

    function isActiveCellFormatter(val,row)
    {

        if(parseInt(val)==1)
        {
            return '<span style="color:#1ABB9C;">YES</span>';
        }else
        {
            return '<span style="color:#ae0b22;font-family: Tahoma; font-weight: bold;">NO</span>';
        }
    }
    function isActiveCellFormatterInclude(val,row)
    {

        if(parseInt(val)==1)
        {
            return '<span style="color:#1ABB9C;">INCLUDED</span>';
        }else
        {
            return '<span style="color:#ae0b22;font-family: Tahoma; font-weight: bold;">EXCLUDED</span>';
        }
    }


</script>

</body>

</html>