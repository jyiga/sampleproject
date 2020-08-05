
<div id='dlgplantype' class='easyui-dialog' closed='true' style='width:500px; padding:5px;' toolbar='#plantypebutton' modal='true' >
	<form id='frmplantype' name='frmplantype' method='post'>
	<div class='form-group form-float'>
		<label class='form-label'>Plan Type Name</label>
		<div class='form-line'>
				<input name='planTypeName' value='' id='planTypeName' class='form-control' type='text' />
		</div>
	</div>
	</form>
</div>
<div id="plantypebutton">
	<a href="#" class="btn btn-primary" onclick="saveplantype()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgplantype').dialog('close')">Close</a>
	</div>