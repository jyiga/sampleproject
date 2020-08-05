
<div id='dlgtheme' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#themebutton' modal='true' >
	<form id='frmtheme' name='frmtheme' method='post' data-parsley-validate>

	<div class='col-lg-4'>	
		<div class='form-group form-float'>
		<label class='form-label'>Theme Name</label>
			<div class='form-line'>
				
					<input name='themeName' value='' id='themeName' class='form-control' type='text' text />
			</div>
		</div>	<div class='form-group form-float'>
		<label class='form-label'>Is Default</label>
			<div class='form-line'>
					<input id='isDefault' name='isDefault' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getList/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
			</div>
		</div>
	</div>
	<div class='col-lg-4'>	
		<div class='form-group form-float'>
			<label class='form-label'>Extract</label>
			<div class='form-line'>
					<input id='extractable' name='extractable' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getList/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
			</div>
		</div>
		<div class='form-group form-float'>
			<label class='form-label'>Type</label>
			<div class='form-line'>
					<input id='fileType' name='fileType' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getList/fileType',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
			</div>
		</div>
	</div>
	<div class='col-lg-4'>	
		<label class='form-line'>Upload File</label>
		<div class='form-group form-float'>
				<input name='file'  id='file'  type='file' />
		</div>	
		
	</div>
	
	</form>
</div>
<div id="themebutton">
	<a href="#" class="btn btn-primary" onclick="savetheme()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgtheme').dialog('close')"><i class="fa fa-times"></i>Close</a>
</div>
<!-- The file upload -->
<div id='dlgthemefile' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#themefilebutton' modal='true' >
	<form id='frmthemefile' name='frmthemefile' method='post' data-parsley-validate>
	<div class='col-lg-6'>	
		<div class='form-group form-float'>
			<label class='form-label'>Extract</label>
			<div class='form-line'>
					<input id='extractable' name='extractable' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getList/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
			</div>
		</div>
		<div class='form-group form-float'>
			<label class='form-label'>Type</label>
			<div class='form-line'>
					<input id='fileType' name='fileType' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getList/fileType',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
			</div>
		</div>
	</div>
	<div class='col-lg-6'>	
		<label class='form-line'>Upload File</label>
		<div class='form-group form-float'>
				<input name='file'  id='file'  type='file' />
		</div>	
		
	</div>
	</form>
</div>
<div id="themefilebutton">
	<a href="#" class="btn btn-primary" onclick="savethemefile()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgthemefile').dialog('close')"><i class="fa fa-times"></i>Close</a>
</div>