
<div id='dlgorderitem' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#orderitembutton' modal='true' >
	<form id='frmorderitem' name='frmorderitem' method='post' data-parsley-validate>

<div class='col-lg-12'>	<div class='form-group form-float'>
		<label class='form-label'>itemId</label>
				<div class='form-line'>
			<input id='itemId' name='itemId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../items/viewcombobox',valueField:'id',textField:'itemName',panelWidth:'450',panelHeight:'auto'"  Required />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Quantity</label>
				<input name='qty' value='' id='qty' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="orderitembutton">
	<a href="#" class="btn btn-primary" onclick="saveorderitem()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgorderitem').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>