
<div id='dlgwebpagesection' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#webpagesectionbutton' modal='true' >
	<form id='frmwebpagesection' name='frmwebpagesection' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<label class='form-label'>Section Name</label>
				<div class='form-line'>
			<input name='sectionName' value='' id='sectionName' class='form-control' type='text' Required />
		</div>
	</div>	
	<div class='form-group form-float'>
		<label class='form-label'>Position</label>
				<div class='form-line'>
			<input name='positionIndex' value='' id='positionIndex' class='form-control' type='text' Required />
		</div>
	</div>	
	<div class='form-group form-float'>
		<label class='form-label'>Column</label>
				<div class='form-line'>
			<input name='columnNo' value='' id='columnNo' class='form-control' type='text' Required />
		</div>
	</div>	<div class='form-group form-float'>
		<label class='form-label'>Page</label>
				<div class='form-line'>
			<input id='pgeId' name='pgeId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../webpages/viewcombox',valueField:'id',textField:'pgeName',panelWidth:'450',panelHeight:'auto'"  Required />
		</div>
	</div></div>
	</form>
</div>
<div id="webpagesectionbutton">
	<a href="#" class="btn btn-primary" onclick="savewebpagesection()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgwebpagesection').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>