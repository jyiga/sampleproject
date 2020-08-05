
<div id='dlgplanpgetype' class='easyui-dialog' closed='true' style='width:500px; padding:15px;' toolbar='#planpgetypebutton' modal='true' >
	<form id='frmplanpgetype' name='frmplanpgetype' method='post'>

	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Type Name</label>
				<input name='typeName' value='' id='typeName' class='form-control' type='text' />
		</div>
	</div>
	</form>
</div>
<div id="planpgetypebutton">
	<a href="#" class="btn btn-primary" onclick="saveplanpgetype()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgplanpgetype').dialog('close')">Close</a>
	</div>