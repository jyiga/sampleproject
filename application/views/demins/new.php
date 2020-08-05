
<div id='dlgdemin' class='easyui-dialog' closed='true' style='width:500px; padding:15px;' toolbar='#deminbutton' modal='true' >
	<form id='frmdemin' name='frmdemin' method='post'>

	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>width</label>
				<input name='width' value='' id='width' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>height</label>
				<input name='height' value='' id='height' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>depth</label>
				<input name='depth' value='' id='depth' class='form-control' type='text' />
		</div>
	</div>
	</form>
</div>
<div id="deminbutton">
	<a href="#" class="btn btn-primary" onclick="savedemin()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgdemin').dialog('close')">Close</a>
	</div>