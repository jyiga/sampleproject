\n<div id="dlgverifycode" class="easyui-dialog" closed="true" style="width:500px; padding:5px;" toolbar="#verifycodebutton" modal="true" >
	<form id="frmverifycode" name="frmverifycode" method="post">\n
	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>userId</label>
				<input name='userId' value='' id='userId' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>code</label>
				<input name='code' value='' id='code' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>isActive</label>
				<select id='isActive' name='isActive' class='easyui-combobox form-control' style='height:30px; width:100%;'  data-options="url:'../listhandles/getList/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"></select>
		 </div>
	</div>	
	<div class='form-group form-float'><div class='form-line'>
		<label class='form-label'>creationDate</label>
			<input name='creationDate' value='' id='creationDate' class='easyui-datebox' data-options='formatter:myformatter2,parser:myparser,required:true' style='width:100%;height:30px;'  type='text' /> 
		</div>
	</div>	
	<div class='form-group form-float'><div class='form-line'>
		<label class='form-label'>verificationDate</label>
			<input name='verificationDate' value='' id='verificationDate' class='easyui-datebox' data-options='formatter:myformatter2,parser:myparser,required:true' style='width:100%;height:30px;'  type='text' /> 
		</div>
	</div>\n\t</form>\n</div>\n<div id="verifycodebutton">\n\t<a href="#" class="btn btn-primary" onclick="saveverifycode()">Save</a>&nbsp;&nbsp;\n\t<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgverifycode').dialog('close')">Close</a>\n\t</div>
