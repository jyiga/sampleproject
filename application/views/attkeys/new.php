
<div id='dlgattkey' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#attkeybutton' modal='true' >
	<form id='frmattkey' name='frmattkey' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Attribute Name</label>
				<input name='attName' value='' id='attName' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="attkeybutton">
	<a href="#" class="btn btn-primary" onclick="saveattkey()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgattkey').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>