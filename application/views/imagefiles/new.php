\n<div id="dlgimagefile" class="easyui-dialog" closed="true" style="width:500px; padding:5px;" toolbar="#imagefilebutton" modal="true" >
	<form id="frmimagefile" name="frmimagefile" method="post">\n
	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>itemId</label>
				<input name='itemId' value='' id='itemId' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>path</label>
				<input name='path' value='' id='path' class='form-control' type='text' />
		</div>
	</div>	
	<div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>isActive</label>
				<input name='isActive' value='' id='isActive' class='form-control' type='text' />
		</div>
	</div>\n\t</form>\n</div>\n<div id="imagefilebutton">\n\t<a href="#" class="btn btn-primary" onclick="saveimagefile()">Save</a>&nbsp;&nbsp;\n\t<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgimagefile').dialog('close')">Close</a>\n\t</div>
