
<div id='dlgsectioncolumn' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#sectioncolumnbutton' modal='true' >
	<form id='frmsectioncolumn' name='frmsectioncolumn' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<label class='form-label'>Column</label>
				<div class='form-line'>
			<input name='columnNm' value='' id='columnNm' class='form-control' type='text' Required />
		</div>
	</div>	<div class='form-group form-float'>
		<label class='form-label'>sectionId</label>
				<div class='form-line'>
			<input id='sectionId' name='sectionId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../webpagesections/viewcombobox',valueField:'id',textField:'sectionName',panelWidth:'450',panelHeight:'auto'"  Required />
		</div>
	</div></div>
	</form>
</div>
<div id="sectioncolumnbutton">
	<a href="#" class="btn btn-primary" onclick="savesectioncolumn()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgsectioncolumn').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>