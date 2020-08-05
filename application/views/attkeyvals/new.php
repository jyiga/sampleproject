
<div id='dlgattkeyval' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#attkeyvalbutton' modal='true' >
	<form id='frmattkeyval' name='frmattkeyval' method='post' data-parsley-validate>

<div class='col-lg-12'>	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>attKeyId</label>
				<input id='attKeyId' name='attKeyId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../attkeys/viewcombobox',valueField:'id',textField:'attName',panelWidth:'450',panelHeight:'auto'"  Required />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>attVal</label>
				<input name='attVal' value='' id='attVal' class='form-control' type='text' text />
		</div>
	</div></div>
	</form>
</div>
<div id="attkeyvalbutton">
	<a href="#" class="btn btn-primary" onclick="saveattkeyval()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgattkeyval').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>