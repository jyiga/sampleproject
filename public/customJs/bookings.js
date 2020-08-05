var roomId = 0;
var roomStatus = null;
var roomType = null;
var roomFee = -1;
var balancex = 0;

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

function printElem(divId) {
    var content = document.getElementById(divId).innerHTML;
    var mywindow = window.open('', 'Print', 'height=300,width=800');

    mywindow.document.write('<html><head><title>Print</title><link href="../public/css/printmedia.css" rel="stylesheet">');
    mywindow.document.write('</head><body>');
    var css = "";
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    mywindow.close();
    return true;
}

function whatsthedate() {
    var dt = new Date();
    var month = (dt.getMonth() + 1);
    month = month < 10 ? '0' + month : month;
    var day = dt.getDate();
    day = day < 10 ? '0' + day : day;
    var date = dt.getFullYear() + "-" + month + "-" + day;
    return date;
}

function getTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}

function formValidateInt($var_name) {
    var validForm = $($var_name).val()
    // var strTest = new RegExp('[A-Za-z]');
    var intTest = new RegExp('[0-9]+');
    // var adultNo = $("#adult").val();
    // var childNo = $("#children").val();
    if (validForm != "" && intTest.test(validForm)) {
        return true
    } else {
        return false;
    }
}

function formValidateStr($var_name) {
    var validForm = $($var_name).val()
    var strTest = new RegExp('[A-Za-z]');
    // var intTest = new RegExp('[0-9]+');
    // var adultNo = $("#adult").val();
    // var childNo = $("#children").val();
    if (validForm != "" && strTest.test(validForm)) {
        return true
    } else {
        return false;
        $.messager.alert('Warning', 'Please enter a valid Character Value');
    }
}

function newbooking() {
    $('#dlgbooking').dialog('open').dialog('setTitle', 'Enter booking ');
    $('#frmbooking').form('clear');
    // console.log( $('#end').val($('#startDate').val() + $('#duration').val()));
    // bookingNumber();
    url = 'add';
}


function showDiscount() {

    if ($('#discount').prop('checked') == true) {
        // kk = alert('Must');
        $.messager.confirm('Warning', 'Are you sure you want to off a discount', function (r) {
            if (r == true) {
                $('#cost').removeAttr('readonly', true);
            } else {
                $('#cost').attr('readonly', true);
            }
        });

    }
    // else {
    //     //alert('Authorize the action');
    //     //openAuthorize();
    // }
}

//get current date
function addDate(dateVal, numDays) {
    var calDate = new Date(dateVal);
    calDate.setDate(calDate.getDate() + numDays);
    return calDate;
}

function currentDate() {
    var dateVal = new Date();
    var dateFormat = dateVal.getFullYear() + "-" + (dateVal.getMonth() + 1) + "-" + dateVal.getDate();
    return dateFormat;
}

//calculate and get Date 
//on key press
//AML 2019-05-20
function keyPress(x) {
    var date = $('#startDate').datebox('getValue');
    var duration = x;
    var dateVal = addDate(date, parseInt(duration));
    var month = dateVal.getMonth() + 1 > 9 ? dateVal.getMonth() + 1 : '0' + (dateVal.getMonth() + 1);
    var dateFormat = dateVal.getFullYear() + "-" + (month) + "-" + dateVal.getDate();
    $('#end').val(dateFormat);
    $.post('checkStatusOccurance/' + date + '/' + $('#end').val() + '/' + $('#roomId').val(), {}, function (data) {
        var respond = $.parseJSON(data);
        var roomChck = respond['rows'];
        // console.log(roomChck.length === 0);
        if (roomChck != 0) {
            $.messager.alert('Warning', 'This room is either reserved or booked')

            $('#dlgbooking').dialog('close');


        }
    });
    $('#dateLabel').val(dateVal);
    $('#calCost').val(parseInt($('#cost').val()) * parseInt(duration));
}
/////// AML
// function calcost(){
//     var 
// }

function calcost(x) {
    $('#calCost').val(parseInt(x * parseInt($('#duration').val())));
}


function editbooking() {
    var row = $('#dgbooking').datagrid('getSelected');
    console.log(row);
    if (row) {
        $('#dlgbooking').dialog('open').dialog('setTitle', 'Edit booking');
        $('#frmbooking').form('load', row);
        //
        $('#roomNo').val(row.room_no);
        $('#roomType').val(row.room_type);
        $('#cost').val(row.fees);
        url = 'edit/' + row.id;
    } else {
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select a item to to edit'
        });
    }
}

//default devare function
/*function devarebooking() {
 var row = $('#dgbooking').datagrid('getSelected');
 if (row) {
 $.messager.confirm('Warning', 'Are you sure of the the act', function (r) {
 if (r) {
 $.post('devare/' + row.id, {}, function (data) {
 $('#dgbooking').datagrid('reload');
 });

 }
 });
 }
 else {
 $.messager.show({title: 'Warning!', msg: 'Please select a item to to edit'});
 }
 }*/

function savebooking() {
    /////////////////
    var validForm = $("#duration").val()
    var strTest = new RegExp('[A-Za-z]');
    var intTest = new RegExp('[0-9]+');
    // var adultNo = $("#adult").val();
    // var childNo = $("#children").val();
    if (validForm != "" && intTest.test(validForm)) {
        // saveForm('#frmroomtype', url, '#dlgroomtype', '#dgroomtype');
        saveForm('#frmbooking', url, '#dlgbooking', '#dgbooking');
        $('#dgbooking').datagrid('reload')
    } else {
        $.messager.alert('Warning', 'Please enter a valid duration');
    }
    ////////////////
}
//previous cancel booking
// function cancleBooking() {
//     var row = $('#dgbooking').datagrid('getSelected');
//     var rmStatus = row.occurance;
//     roomId = row.id;

//     if (rmStatus == 'BOOKED') {
//         $.post("bookingId", {status: rmStatus, roomId: roomId}, function (data) {
//             var booking = $.parseJSON(data);
//             $('#frmcheckin').form('load', booking);
//             prepareGuests();
//             //preparePayments();
//             $.post('devare/' + booking.id, {}, function (data) {
//                 $.post('../payments/deactivatePay/' + booking.id, {}, function (data) {
//                     $('#dgbooking').datagrid('reload');
//                 });
//             });
//         })
//     } else {
//         $.messager.show({
//             title: 'Warning',
//             msg: 'You can only checkout checked in rooms',
//         })
//     }
// }


function cancelBookingSave() {

    var cancelReason = $('#reasonCancel').val();
    var time = $('#cancelBookTime').val();
    $.messager.confirm('Warning', 'Would you like to cancel this booking', function (r) {
        if (r) {
            alert(cancelReason);
            if (cancelReason == null || cancelReason == '') {
                $.messager.alert('Warning', 'Please supply a reason for Cancel', 'error');
            } else {
                $.post(url, {
                    'reason': cancelReason,
                    time: time,
                }, function (data) {
                    $('#dlgcncl').dialog('close');
                    $('#dgbooking').datagrid('reload');
                });
                $('#dgbooking').datagrid('reload');
            }

        } else {

            $('#dlgcncl').dialog('close');
            $('#dgbooking').datagrid('reload');
        }

    });
}

function cancleBooking() {
    var row = $('#dgbooking').datagrid('getSelected');
    roomStatus = row.occurance;
    roomId = row.id;
    getTime();
    if (roomStatus == 'BOOKED') {
        $('#dlgcncl').dialog('open').dialog('setTitle', 'Cancel booking');
        $('#cancelBookTime').timespinner('setValue', getTime());
        // $('#frmcancel').form('clear');
        cancelBookNo();
    } else {
        $.messager.show({
            title: 'Warning',
            msg: 'You can only cancel booked or reserved room',
        })
    }
}

function cancelBookNo() {
    if (roomStatus == 'BOOKED' || roomStatus == 'RESERVED') {
        $.post("bookingId", {
            status: roomStatus,
            roomId: roomId
        }, function (data) {
            var booking = $.parseJSON(data);
            prepareGuestsCheckIn('#dgcnclguest', booking.id);
            getCancelBalance(booking.id);
            url = 'cancelBooking/' + booking.id;
        })
    }
}

function getCancelBalance(id) {
    $.post('balance/' + id, {}, function (data) {
        var respond = $.parseJSON(data);
        // $('#bal').val(respond['rows']['0'].balance);
        $('#bal').val('0');
        $('#canclPaid').val(respond['rows']['0'].cost - respond['rows']['0'].balance);
        $('#costs').val(respond['rows']['0'].cost);
    });
}

function saveCheckin() {
    var time = $('#checkInTime').timespinner('getValue');

    $.post(url, {
        checkInTime: time
    }, function (data) {
        // var respond = $.parseJSON(data);
        if($('#paid').val() == 0){
            $.messager.alert('Warning', 'Please Deposit On Your Account');
        } else {
            $('#dlgcheckin').dialog('close')
            $('#dgbooking').datagrid('reload')
        }
    });
}

function checkin() {
    var row = $('#dgbooking').datagrid('getSelected');
    roomStatus = row.occurance;
    roomId = row.id;
    if (roomStatus == 'BOOKED' || roomStatus == 'RESERVED') {
        $('#dlgcheckin').dialog('open').dialog('setTitle', 'Check in...');
        $('#dgcheckinpay').datagrid('reload');
        $('#dgcheckinbooking').datagrid('reload');
        checkinBookNo();
        //1 call the return function
        //2 set time
        $('#checkInTime').timespinner('setValue', getTime());
    } else {
        $.messager.show({
            title: 'Warning!',
            msg: 'Please select a booked or reserved room'
        });
    }
}

function checkout() {
    var row = $('#dgbooking').datagrid('getSelected');
    roomStatus = row.occurance;

    roomId = row.id;
    if (roomStatus == 'OCCUPIED') {
        $('#dlgcheckout').dialog('open').dialog('setTitle', 'Checking out...');
        $('#frmroomcheckout').form('clear');
        $('#actualEndDate').timespinner('setValue', getTime());
        //set check out date
        $('#checkoutDate').val(currentDate());
        var endDate = $('#checkoutDate').val();
        checkoutBookNo(endDate);
        // console.log(row);
        //AML 2019-05-20
        $.post('../rooomdiscounts/viewByID/' + row.bookingId, {}, function (data) {
            var respond = $.parseJSON(data);
            // console.log(respond);
            var status = respond['rows']['0'].status;
            if (status === 'RQUESTED') {
                $.messager.alert('Warning', 'This Discounted Fee \n is NOT APPROVED');
                $('#dlgcheckout').dialog('close');
            }
        });
    } else {
        $.messager.show({
            title: 'Warning',
            msg: 'Only occupied rooms can be checked out',
        })
    }
}


function saveCheckOut() {

    // if (formValidateInt('#pay') === false ) {
    //     $.messager.alert('Warning', 'Please enter a valid Numeric Value');
    // } else {
        var paymentMethod = $('#payMethod').combobox('getValue');
        var amount = $('#pay').val();
        // var date = $('').datebox('getValue');
        var bal = $('#balanceChck').val();
        if (parseInt(bal) === 0) {
            $.post(url, {
                amount: amount,
                paymentMethod: paymentMethod,
                /*, date: date*/
            }, function (data) {
                var respond = $.parseJSON(data);
                // console.log(respond);
                // add a print option
                //open book recipt
                //AML
                $.post(url2, {}, function (data) {
                    $('#receipt').html(data);
                    // $('#dlgbookpaymentreceipt').dialog('open').dialog('setTitle', 'Accomodation');
                    printElem('receipt');
                    $('#dgbooking').datagrid('reload');

                });
                if (respond.msg) {
                    $.messager.alert('Error', respond.msg, 'error')
                } else {

                    $('#dlgcheckout').dialog('close');
                    $('#dgbooking').datagrid('reload');
                }
            });
        } else {

            $.messager.alert({
                title: 'Warning',
                msg: 'Your account should be setteld to zero balance',
            })
        }
    // }
}


function checkoutBookNo(endDate) {
    if (roomStatus == 'BOOKED' || roomStatus == 'OCCUPIED') {
        $.post("bookingId", {
            status: roomStatus,
            roomId: roomId
        }, function (data) {
            var booking = $.parseJSON(data);
            getCheckOutBalance(booking.id);
            url = '../payments/checkOutBooking/' + booking.id + '/' + endDate;
            url2 = '../payments/paymentsrecipt/' + booking.id;
        });
    }
}


function getCheckOutBalance(id) {
    //AML 2019-05-20
    $.post('balance/' + id, {}, function (data) {
        var respond = $.parseJSON(data);
        $('#balanceChck').val(respond['rows']['0'].balance);
        console.log(respond);
        if (respond['rows']['0'].balance === null) {
            $('#paidChck').val('0');
            $('#balanceChck').val(respond['rows']['0'].cost - $('#paidChck').val());
        } else {
            $('#paidChck').val((respond['rows']['0'].cost * respond['rows']['0'].duration) - respond['rows']['0'].balance);
        }
        $('#costChck').val(respond['rows']['0'].cost);
        balancex = respond['rows']['0'].balance;
    })


    //get number of days
    $.post('viewall/' + id, {}, function (data) {
        var respond = $.parseJSON(data);
        $('#NmDay').val(respond['rows']['0'].duration);
        $('#totalCost').val($('#costChck').val() * $('#NmDay').val());
        $('#paidChck').val($('#totalCost').val() - $('#balanceChck').val());
        //reset balance to actual balance
        if (parseInt($('#balanceChck').val()) == 0) {
            document.querySelector('.balDialog').style.display = 'none';
            // console.log('called');
        }
        balancex = $('#balanceChck').val();
    });

    //get total actual deposits
    // $.post('../payments/totalDeposits/' + id, {}, function (data) {
    //     var response = $.parseJSON(data);
    //     // $('#totalCost').val($('#costChck').val() * $('#NmDay').val());
    //     // $('#balanceChck').val($('#totalCost').val() - $('#balanceChck').val());
    // });
}

function getBalance(id) {
    $.post('balance/' + id, {}, function (data) {
        var respond = $.parseJSON(data);
        $('#balances').val(respond['rows']['0'].balance);
        console.log(respond);
        if (respond['rows']['0'].balance === null) {
            $('#paid').val('0');
            $('#balances').val(respond['rows']['0'].cost - $('#paid').val());
        } else {
            $('#paid').val((respond['rows']['0'].cost * respond['rows']['0'].duration) - respond['rows']['0'].balance);
        }
        $('#costs').val(respond['rows']['0'].cost * respond['rows']['0'].duration);
        balancex = respond['rows']['0'].balance;
    })
}


function book() {
    var row = $('#dgbooking').datagrid('getSelected');

    if (row.occurance === 'VACANT') {
        //get validation
        roomId = row.id;
        $('#dlgbooking').dialog('open').dialog('setTitle', 'Enter booking ');
        $('#frmbooking').form('clear');

        $('#roomNo').val(row.room_no);
        roomType = row.room_type;
        $('#roomType').val(roomType);
        $('#cost').val(row.cost);
        // AML 2019-05-20
        $('#roomId').val(row.id);
        // $('#chckInTime').timespinner('setValue', getTime());
        roomFee = row.feeId;
        bookingNumber();
    } else {
        $.messager.show({
            title: 'Warning',
            msg: 'Please Select Room To Book',
        })
    }
}

// function previousRoomTypeCost(x) {
//
//     $.post("../roomfees/previousPrice/" + x, {}, function (data) {
//         //alert(data)
//         $('#cost').val(data);
//         LoadDataGrid(x);
//     })
// }

function formatChks(val, row) {
    if (val == 1) {
        return '<input type="checkbox" checked readonly />';
    } else {
        return '<input type="checkbox" readonly/>';
    }
}

function LoadDataGrid(x) {
    $("#dgroomfeatures").datagrid('reload', {
        id: x
    });
}

function bookingNumber() {
    if (roomStatus == 'BOOKED' || roomStatus == 'RESERVED') {
        $.post("bookingId", {
            status: roomStatus,
            roomId: roomId
        }, function (data) {
            var booking = $.parseJSON(data);
            $('#frmbooking').form('load', booking);
            $('#bookNo').val(booking.id);
            $('#roomType').val(roomType);
            prepareGuests();
            preparePayments('#dgpayment', booking.id);
            preparePayments('#dgcheckinpay', booking.id);
            url = 'edit/' + booking.id;
        });
    } else {
        $.post("bookingId", {}, function (data) {
            var bookid = $.parseJSON(data);
            $('#bookNo').val(bookid.countNo);
            //on prepare booking id
            //call guests and payments editable grid
            prepareGuests();
            preparePayments('#dgpayment', bookid.countNo);
            preparePayments('#dgcheckinpay', bookid.countNo);
            url = 'add/' + roomId + '/' + roomFee;
        });
    }
}

function checkinBookNo() {
    if (roomStatus == 'BOOKED' || roomStatus == 'RESERVED') {
        $.post("bookingId", {
            status: roomStatus,
            roomId: roomId
        }, function (data) {
            var booking = $.parseJSON(data);
            //$('#frmbooking').form('load', booking);
            //$('#bookNo').val(booking.id);
            //$('#roomType').val(roomType);
            prepareGuestsCheckIn('#dgguest2', booking.id);
            //preparePayments('#dgpayment',);
            preparePayments('#dgcheckinpay', booking.id);
            getBalance(booking.id);
            url = 'checkInBooking/' + booking.id;
        })
    }
}

//search room by date range
function findRoom() {
    var startDate = $('#from').datebox('getValue');
    var endDate = $('#to').datebox('getValue');
    $('#dgbooking').datagrid('load', 'viewRoomBooking/' + startDate + '/' + endDate);
    //$('#dgbooking').datagrid('reload', 'viewRoomBooking/' + startDate + '/' + endDate);
}

//prepare guests editable grid
function prepareGuests() {
    //get booking id
    var id = $('#bookNo').val();
    //prepare booking guests
    $('#dgguest').edatagrid({
        url: '../guests/viewall/' + id,
        saveUrl: '../guests/add/' + id,
        updateUrl: '../guests/edit/' + id,
        destroyUrl: '../guests/devare',
        onSuccess: function () {
            $('#dgguest').datagrid('reload');
        }
    });
}
//
function prepareGuestsCheckIn(edatagridId, idValue) {
    //get booking id
    var id = idValue;
    //prepare booking guests
    $(edatagridId).edatagrid({
        url: '../guests/viewall/' + id,
        saveUrl: '../guests/add/' + id,
        updateUrl: '../guests/edit/' + id,
        destroyUrl: '../guests/devare',
        onSuccess: function () {
            $(edatagridId).datagrid('reload');
        }
    });
}

function getCheckinTime() {
    if ($('#bookingStatus').prop('checked') == true) {
        // kk = alert('Must');
        $('#chckInTime').timespinner('setValue', getTime());
        // $.messager.confirm('Warning', 'Are you sure you want to Check into a room', function (r) {
        //     if (true) {
        //         $('#chckInTime').timespinner('setValue', getTime());
        //     } else {
        //         // $('#bookingStatus').prop('checked' == false);
        //         // bug
        //     }
        // });
    } else {
        $('#chckInTime').timespinner('setValue', '');
    }
}

//prepare payments editable grid
function preparePayments(val, idValue) {
    //get booking id
    var id = idValue;
    //prepare payment for booking
    $(val).edatagrid({
        url: '../payments/viewall/' + id,
        saveUrl: '../payments/add/' + id,
        updateUrl: '../payments/edit/' + id,
        destroyUrl: '../payments/devare',
        onSuccess: function () {
            $(val).datagrid('reload');
            getBalance(id);
            console.log($('#amount').val());
        }
    });
}

function balanceChangeListener(x) {
    var balance = 0;
    balance = balancex - x;
    $('#balanceChck').val(balance);
}