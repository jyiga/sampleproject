
<div id='dlgroomtype' class='easyui-dialog' closed='true' style='width:500px; padding:15px;' toolbar='#roomtypebutton' modal='true' >
	<form id='frmroomtype' name='frmroomtype' method='post'>

	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Room</label>
				<input name='roomTypeName' value='' id='roomTypeName' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Show on Front page</label>
				<input name='dashboard' value='' id='dashboard' class='form-control' type='text' />
		</div>
	</div>
	</form>
</div>
<div id="roomtypebutton">
	<a href="#" class="btn btn-primary" onclick="saveroomtype()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgroomtype').dialog('close')">Close</a>
	</div>