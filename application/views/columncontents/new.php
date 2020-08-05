
<div id='dlgcolumncontent' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#columncontentbutton' modal='true' >
	<form id='frmcolumncontent' name='frmcolumncontent' method='post' data-parsley-validate>

<div class='col-lg-6'>	
	<div class='form-group form-float'>
		<label class='form-label'>Content</label>
				<div class='form-line'>
			<input name='contextContent' value='' id='contextContent' class='form-control' type='text' Required />
		</div>
	</div></div>
	</form>
</div>
<div id="columncontentbutton">
	<a href="#" class="btn btn-primary" onclick="savecolumncontent()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgcolumncontent').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>