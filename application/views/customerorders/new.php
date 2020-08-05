
<div id='dlgcustomerorder' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#customerorderbutton' modal='true' >
	<form id='frmcustomerorder' name='frmcustomerorder' method='post' data-parsley-validate>

<div class='col-lg-6'>	
	<div class='form-group form-float'>
		<label class='form-label'>Customer</label>
				<div class='form-line'>
			<input id='companyName' name='companyName' value='' type='text' class='form-control' readonly />
		</div>
	</div>
	</div>
	<div class='col-lg-6'>	
	<div class='form-group form-float'>
	<label class='form-label'>Action Done</label>
		<div class='form-line'>
			
				<input name='status' value='' id='status' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getList/OrderStatusList',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'" Required/>
		</div>
	</div></div>
	</form>
</div>
<div id="customerorderbutton">
	<a href="#" class="btn btn-primary" onclick="savecustomerorder()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgcustomerorder').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>