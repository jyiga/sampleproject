
<div id='dlgroom' class='easyui-dialog' closed='true' style='width:500px; padding:15px;' toolbar='#roombutton' modal='true' >
	<form id='frmroom' name='frmroom' method='post'>

	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>id</label>
				<select id='planId' name='planId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'Plan ID',valueField:'../plans/comboboxview',textField:'id',panelWidth:'450',panelHeight:'auto'"></select>
		 </div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>roomTypeName</label>
				<select id='roomTypeId' name='roomTypeId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'Room Type',valueField:'../roomtypes/comboboxview',textField:'id',panelWidth:'450',panelHeight:'auto'"></select>
		 </div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>roomDescription</label>
				<input name='roomDescription' value='' id='roomDescription' class='form-control' type='text' />
		</div>
	</div>
	</form>
</div>
<div id="roombutton">
	<a href="#" class="btn btn-primary" onclick="saveroom()">Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgroom').dialog('close')">Close</a>
	</div>