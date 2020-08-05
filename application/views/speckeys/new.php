<div id='dlgspeckey' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#speckeybutton' modal='true'>
	<form id='frmspeckey' name='frmspeckey' method='post' data-parsley-validate>

		<div class='col-lg-12'>
			<!-- <div class='form-group form-float'>
		<div class='form-line'>
			<label class='form-label'>id</label>
				<input name='id' value='' id='id' class='form-control' type='text' text />
		</div>
	</div>	 -->
			<div class='form-group form-float'>
				<div class='form-line'>
					<label class='form-label'>specText</label>
					<textarea rows="4" name='specText' value='' id='specText' class='form-control no-resize'></textarea>
				</div>
			</div>
		</div>
	</form>
</div>
<div id="speckeybutton">
	<a href="#" class="btn btn-primary" onclick="savespeckey()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgspeckey').dialog('close')"><i class="fa fa-times"></i>Close</a>
</div>