
<div id='dlgcustomerdeliverypoint' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#customerdeliverypointbutton' modal='true' >
	<form id='frmcustomerdeliverypoint' name='frmcustomerdeliverypoint' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Customer</label>
				<input name='customerId' value='' id='customerId' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Place Name</label>
				<input name='placeName' value='' id='placeName' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>lat</label>
				<input name='lat' value='' id='lat' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>lng</label>
				<input name='lng' value='' id='lng' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="customerdeliverypointbutton">
	<a href="#" class="btn btn-primary" onclick="savecustomerdeliverypoint()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgcustomerdeliverypoint').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>