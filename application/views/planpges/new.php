
<div id='dlgplanpge' class='easyui-dialog' closed='true' style='width:500px; padding:15px;' toolbar='#planpgebutton' modal='true' >
	<form id='frmplanpge' name='frmplanpge' method='post'>

	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>typeName</label>
				<select id='viewId' name='viewId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'Page of',valueField:'../plantypepges/viewcombobox',textField:'id',panelWidth:'450',panelHeight:'auto'"></select>
		 </div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>File Name</label>
				<input name='imageName' value='' id='imageName' class='form-control' type='text' />
		</div>
	</div>
	</form>
</div>
<div id="planpgebutton">
	<a href="#" class="btn btn-primary" onclick="saveplanpge()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgplanpge').dialog('close')">Close</a>
	</div>