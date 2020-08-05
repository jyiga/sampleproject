\n<div id="dlgstatus" class="easyui-dialog" closed="true" style="width:500px; padding:5px;" toolbar="#statusbutton" modal="true" >
	<form id="frmstatus" name="frmstatus" method="post">\n
	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>statusName</label>
				<input name='statusName' value='' id='statusName' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>isActive</label>
				<select id='isActive' name='isActive' class='easyui-combobox form-control' style='height:30px; width:100%;'  data-options="url:'../listhandles/getList/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"></select>
		 </div>
	</div>\n\t</form>\n</div>\n<div id="statusbutton">\n\t<a href="#" class="btn btn-primary" onclick="savestatus()">Save</a>&nbsp;&nbsp;\n\t<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgstatus').dialog('close')">Close</a>\n\t</div>
