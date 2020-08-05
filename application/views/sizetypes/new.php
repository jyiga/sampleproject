<div id="dlgsizetype" class="easyui-dialog" closed="true" style="width:500px; padding:5px;" toolbar="#sizetypebutton" modal="true" >
	<form id="frmsizetype" name="frmsizetype" method="post">
	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Size Name</label>
				<input name='sizeName' value='' id='sizeName' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Is Active</label>
				<select id='isActive' name='isActive' class='easyui-combobox form-control' style='height:30px; width:100%;'  data-options="url:'../listhandles/getList/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"></select>
		 </div>
	</div></form></div><div id="sizetypebutton"><a href="#" class="btn btn-primary" onclick="savesizetype()">Save</a>&nbsp;&nbsp;<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgsizetype').dialog('close')">Close</a></div>
