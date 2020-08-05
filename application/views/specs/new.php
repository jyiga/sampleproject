
<div id='dlgspec' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#specbutton' modal='true' >
	<form id='frmspec' name='frmspec' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>id</label>
				<input name='id' value='' id='id' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>specId</label>
				<input name='specId' value='' id='specId' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>itemId</label>
				<input name='itemId' value='' id='itemId' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>specText</label>
				<input name='specText' value='' id='specText' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="specbutton">
	<a href="#" class="btn btn-primary" onclick="savespec()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgspec').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>