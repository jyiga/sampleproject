
<div id='dlgitemimage' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#itemimagebutton' modal='true' >
	<form id='frmitemimage' name='frmitemimage' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>id</label>
				<input name='id' value='' id='id' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>filename</label>
				<input name='filename' value='' id='filename' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>isActive</label>
				<input name='isActive' value='' id='isActive' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="itemimagebutton">
	<a href="#" class="btn btn-primary" onclick="saveitemimage()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgitemimage').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>