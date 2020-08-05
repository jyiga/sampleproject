
<div id='dlgcategorypge' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#categorypgebutton' modal='true' >
	<form id='frmcategorypge' name='frmcategorypge' method='post' data-parsley-validate>

<div class='col-lg-6'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>id</label>
				<input name='id' value='' id='id' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>categoryId</label>
				<input name='categoryId' value='' id='categoryId' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>fileName</label>
				<input name='fileName' value='' id='fileName' class='form-control' type='text' text />
		</div>
	</div></div><div class='col-lg-6'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>filePath</label>
				<input name='filePath' value='' id='filePath' class='form-control' type='text' text />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>creationDate</label>
				<input name='creationDate' value='' id='creationDate' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="categorypgebutton">
	<a href="#" class="btn btn-primary" onclick="savecategorypge()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgcategorypge').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>