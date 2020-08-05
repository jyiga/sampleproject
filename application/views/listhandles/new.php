<div id="dlglisthandle" class="easyui-dialog" closed="true" style="width:500px; padding:10px;" toolbar="#listhandlebutton" modal="true" >
	<form id="frmlisthandle" name="frmlisthandle" method="post">
	<div class='form-group form-float'><div class='form-line'>
		<label class='form-label'>ID</label><input name='idVal' value='' id='idVal' class='form-control' type='text' /> </div>
	</div>
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>Text</label><input name='textVal' value='' id='textVal' class='form-control' type='text' /> </div>
		</div>
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>list Name</label><input name='listName' value='' id='listName' class='form-control' type='text' /> 
		</div>
	</div>
</form>
</div>
<div id="listhandlebutton"><a href="#" class="btn btn-primary" onclick="savelisthandle()">Save</a>&nbsp;&nbsp;<a href="#" class="btn btn-primary" onclick="javascript:$('#dlglisthandle').dialog('close')">Close</a></div>
