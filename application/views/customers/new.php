
<div id='dlgcustomer' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#customerbutton' modal='true' >
	<form id='frmcustomer' name='frmcustomer' method='post' data-parsley-validate>

<div class='col-lg-6'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>First Name</label>
				<input name='firstName' value='' id='firstName' class='form-control' type='text'  />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>last Name</label>
				<input name='lastName' value='' id='lastName' class='form-control' type='text'  />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Contact</label>
				<input name='contact' value='' id='contact' class='form-control' type='text'  />
		</div>
	</div>
	</div>
	<div class='col-lg-6'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Email</label>
				<input name='email' value='' id='email' class='form-control' type='text'  />
		</div>
	</div>
	</div>
	</form>
</div>
<div id="customerbutton">
	<a href="#" class="btn btn-primary" onclick="savecustomer()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgcustomer').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>