<div id="dlgclothitem" class="easyui-dialog" closed="true" style="width:800px; padding:5px;" toolbar="#clothitembutton" modal="true">
	<form id="frmclothitem" name="frmclothitem" method="post" style="padding-top:5px">
		<div class="col-lg-6">
			<div class='form-group form-float'>
				<div class='form-line'>
					<label class='form-label'>Item Name</label>
					<input name='itemName' value='' id='itemName' class='form-control' type='text' />
				</div>
			</div>
			<div class='form-group form-float'>
				<div class='form-line'>
					<label class='form-label'>Item Description</label>
					<input name='itemDescription' value='' id='itemDescription' class='form-control' type='text' />
				</div>
			</div>
			<div class='form-group form-float'>
				<div class='form-line'>
					<label class='form-label'>Cost</label>
					<input name='cost' value='' id='cost' class='form-control' type='text' />
				</div>
			</div>
			<div class='form-group form-float'>
				<label class='form-label'>Date</label>
				<div class='form-line'>

					<input name='date' value='' id='date' class='easyui-datebox' data-options='formatter:myformatter2,parser:myparser,required:true' style='width:100%;height:30px;' type='text' />
				</div>
			</div>

			<div class='form-group form-float'>
				<label class='form-label'>Category</label>
				<div class='form-line'>

					<select id='idCat' name='idCat' class='easyui-combobox form-control' style='height:30px; width:100%;margin-top:5px' data-options="url:'../categorys/viewcombobox',valueField:'id',textField:'categoryName',panelWidth:'450',panelHeight:'auto'"></select>
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<img src="../public/images/user.png" id="pic" width="100%" height="90%" alt="User" />
			<input type="file" name="fileToUpload" id="fileToUpload" class="btn btn-primary" style="width:100%" onchange="readURL(this);">
		</div>
	</form>
</div>
<div id="clothitembutton"><a href="#" class="btn btn-primary" onclick="savePic()">Save</a>&nbsp;&nbsp;<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgclothitem').dialog('close')">Close</a></div>