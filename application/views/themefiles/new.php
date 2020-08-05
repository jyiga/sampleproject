
<div id='dlgthemefile' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#themefilebutton' modal='true' >
	<form id='frmthemefile' name='frmthemefile' method='post' data-parsley-validate>

	<div class='col-lg-6'>	
		<div class='form-group form-float'>
			<label class='form-line'>Upload File</label>
				<input name='file'  id='file' class='form-control' type='file' />:file
		</div>	
		<div class='form-group form-float'>
			<div class='form-line'>
				<label class='form-label'>Type</label>
					<input id='fileType' name='fileType' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getList/fileType',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
			</div>
		</div>
	</div>
	<div class='col-lg-6'>	
		<div class='form-group form-float'>
			<div class='form-line'>
				<label class='form-label'>Extract</label>
					<input id='extractable' name='extractable' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getList/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
			</div>
		</div>
	</div>
	</form>
</div>
<div id="themefilebutton">
	<a href="#" class="btn btn-primary" onclick="savethemefile()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgthemefile').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>