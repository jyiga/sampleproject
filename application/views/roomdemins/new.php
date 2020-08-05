
<div id='dlgroomdemin' class='easyui-dialog' closed='true' style='width:500px; padding:15px;' toolbar='#roomdeminbutton' modal='true' >
	<form id='frmroomdemin' name='frmroomdemin' method='post'>

	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Dimension ID</label>
				<input name='deminId' value='' id='deminId' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Room ID</label>
				<input name='roomId' value='' id='roomId' class='form-control' type='text' />
		</div>
	</div>
	</form>
</div>
<div id="roomdeminbutton">
	<a href="#" class="btn btn-primary" onclick="saveroomdemin()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgroomdemin').dialog('close')">Close</a>
	</div>