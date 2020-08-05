
<div id='dlgorderdeliverypoint' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#orderdeliverypointbutton' modal='true' >
	<form id='frmorderdeliverypoint' name='frmorderdeliverypoint' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Order No</label>
				<input name='orderId' value='' id='orderId' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Delivery @</label>
				<input name='deliveryPointId' value='' id='deliveryPointId' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="orderdeliverypointbutton">
	<a href="#" class="btn btn-primary" onclick="saveorderdeliverypoint()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgorderdeliverypoint').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>