
<div id='dlgplanstyle' class='easyui-dialog' closed='true' style='width:500px; padding:15px;' toolbar='#planstylebutton' modal='true' >
	<form id='frmplanstyle' name='frmplanstyle' method='post'>
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Plan Style</label>
				<input name='styleName' value='' id='styleName' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
	<label class='form-label'>Status/Visibility</label>
		<div class='form-line'>
				<select id='isActive' name='isActive' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:15px;'  data-options="url:'../listhandles/getList/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"></select>
		 </div>
	</div>
	</form>
</div>
<div id="planstylebutton">
	<a href="#" class="btn btn-primary" onclick="saveplanstyle()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgplanstyle').dialog('close')">Close</a>
	</div>