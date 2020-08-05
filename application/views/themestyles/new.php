
<div id='dlgthemestyle' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#themestylebutton' modal='true' >
	<form id='frmthemestyle' name='frmthemestyle' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Attribute Name</label>
				<input name='attName' value='' id='attName' class='form-control' type='text' text />
		</div>
	</div>	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Attribute Type</label>
				<input id='attType' name='attType' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandlers/getList/attributelist',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Theme Id</label>
				<input name='themeId' value='' id='themeId' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="themestylebutton">
	<a href="#" class="btn btn-primary" onclick="savethemestyle()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgthemestyle').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>