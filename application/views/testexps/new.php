
<div id='dlgtestexp' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#testexpbutton' modal='true' >
	<form id='frmtestexp' name='frmtestexp' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<label class='form-label'>Name</label>
				<div class='form-line'>
			<input name='name' value='' id='name' class='form-control' type='text' Required />
		</div>
	</div></div>
	</form>
</div>
<div id="testexpbutton">
	<a href="#" class="btn btn-primary" onclick="savetestexp()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgtestexp').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>