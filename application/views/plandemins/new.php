
<div id='dlgplandemin' class='easyui-dialog' closed='true' style='width:500px; padding:15px;' toolbar='#plandeminbutton' modal='true' >
	<form id='frmplandemin' name='frmplandemin' method='post'>

	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Plan ID</label>
				<input name='planId' value='' id='planId' class='form-control' type='text' />
		</div>
	</div>
	</form>
</div>
<div id="plandeminbutton">
	<a href="#" class="btn btn-primary" onclick="saveplandemin()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgplandemin').dialog('close')">Close</a>
	</div>