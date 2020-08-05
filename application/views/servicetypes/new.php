<div id="dlgservicetype" class="easyui-dialog" closed="true" style="width:500px; padding:5px;" toolbar="#servicetypebutton" modal="true" >
	<form id="frmservicetype" name="frmservicetype" method="post">
	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Service</label>
				<input name='serviceName' value='' id='serviceName' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Start Time</label>
				<input name='startTime' value='' id='startTime' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>End Time</label>
				<input name='endTime' value='' id='endTime' class='form-control' type='text' />
		</div>
	</div></form></div><div id="servicetypebutton"><a href="#" class="btn btn-primary" onclick="saveservicetype()">Save</a>&nbsp;&nbsp;<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgservicetype').dialog('close')">Close</a></div>
