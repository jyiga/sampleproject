<div id='dlgcategory' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#categorybutton' modal='true'>
	<form id='frmcategory' name='frmcategory' method='post' data-parsley-validate>

		<div class='col-lg-6'>
			<div class='form-group form-float'>
			<label class='form-label'>Category Name</label>
				<div class='form-line'>
					
					<input name='categoryName' value='' id='categoryName' class='form-control' type='text' text />
				</div>
			</div>
			<div class='form-group form-float'>
				<!-- <div class='form-line'> -->
				<label class='form-label'>Main Category</label>
				<!-- data-options="url:'./categorys/viewcombobox',valueField:'id',textField:'categoryName',panelWidth:'450',panelHeight:'auto' -->
				<select id='parentId' name='parentId' class='easyui-combobox form-control' style='width:100%;' data-options="url:'./viewcombobox',valueField:'id',textField:'categoryName',panelWidth:'450',panelHeight:'auto'"></select>
				<!-- </div> -->
			</div>
		</div>
		<div class="col-lg-6">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div style="position:absolute;top:0;width:100; padding:2px; margin:5px;"><input type="file" id="mainImg" name="mainImg" 
				size="chars" style="display: block;visibility: hidden;width: 0;height: 0;" onchange="readURL(this,'#pic1');"><a href='#' id='btnMainImg'><i class="material-icons">add_circle</i></a>
				</div>
					<img id='pic1' class="img-responsive thumbnail" style="width:100%; height:400px;" src="../public/images/image-gallery/placeholder.png">
				</div>
		</div>
	</form>
</div>
<div id="categorybutton">
	<a href="#" class="btn btn-primary" onclick="savecategory()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgcategory').dialog('close')"><i class="fa fa-times"></i>Close</a>
</div>