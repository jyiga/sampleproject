<div id='dlgitem' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#itembutton' modal='true'>
	<form id='frmitem' name='frmitem' method='post' data-parsley-validate>
	<div class="row">
		<div class='col-lg-6'>
			<div class='form-group form-float'>
				<label class='form-label'>Name</label>
				<div class='form-line'>
					<input name='itemName' value='' id='itemName' class='form-control' type='text' text />
				</div>
			</div>
			<div class='form-group form-float'>
					<!-- <div class='form-line'> -->
					<label class='form-label'>Category</label>
					<!-- data-options="url:'./categorys/viewcombobox',valueField:'id',textField:'categoryName',panelWidth:'450',panelHeight:'auto' -->
					<select id='categoryId' name='categoryId' class='easyui-combobox form-control' style='width:100%;' data-options="url:'../categorys/viewcombobox',valueField:'id',textField:'categoryName',panelWidth:'450',panelHeight:'auto'"></select>
					<!-- </div> -->
			</div>
			<div class='form-group form-float'>
				<label class='form-label'>Amount</label>
				<div class='form-line'>
					<input name='amount' value='' id='amount' class='form-control' type='text' text />
				</div>
			</div>
			
		</div>
		<div class='col-lg-6'>
			<div class='form-group form-float'>
				<label for="form7">Item Description</label>
					<div class='form-line'>
						<textarea name='itemDescription' id='itemDescription' class="md-textarea form-control" rows="4"></textarea>
					</div>
			</div>
			<div class='form-group form-float'>
					<!-- <div class='form-line'> -->
					<label class='form-label'>Per @</label>
					<!-- data-options="url:'./categorys/viewcombobox',valueField:'id',textField:'categoryName',panelWidth:'450',panelHeight:'auto' -->
					<select id='uom' name='uom' class='easyui-combobox form-control' style='width:100%;' data-options="url:'../listhandles/getlist/uom',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"></select>
					<!-- </div> -->
			</div>
		</div>
		<div  class="col-lg-12">
		<ul class="nav nav-tabs tab-nav-right" role="tablist">
			<li role="presentation" class="active">
				<a href="#images" data-toggle="tab">
					Images
				</a>
			</li>
			<li role="presentation">
				<a href="#specificationDetail" data-toggle="tab">
					Specification Details
				</a>
			</li>
		</ul>
			<div class="tab-content">
			<div role="tabpanel" class="tab-pane fade in active" id="images">
					<div class="row clearfix">
						<div class='col-lg-8'>
							<div id="aniimated-thumbnials" class="list-unstyled row clearfix">
								<div id="imageContent">
								</div>
							</div>
						</div>
						<div class='col-lg-4'>
							<div style="position:absolute;top:0;width:100; padding:2px; margin:5px;">
								<input type="file" id="mainImg" name="mainImg" size="chars" style="display: block;visibility: hidden;width: 0;height: 0;" onchange="readURL(this,'#pic1');" multiple/><a href='#' id='btnMainImg'><i class="material-icons">add_circle</i></a>
							</div>
								<img id='pic1' class="img-responsive thumbnail" style="width:100%; height:250px;" src="../public/images/image-gallery/placeholder.png" >
						</div>
					</div>
			</div>
			<div role="tabpanel" class="tab-pane fade" id="specificationDetail">
						<div class="col-lg-12">Not Needed</div>
				</div>
			</div>
		</div>
	</div>
	</form>
</div>
<div id="itembutton">
	<a href="#" class="btn btn-primary" onclick="saveitem()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgitem').dialog('close')"><i class="fa fa-times"></i>Close</a>
</div>


<!-- image upload dialog -->
<div id='imageUploadDialog' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#imageBtn' modal='true'>
	<form id='imageForm' name='imageForm' method='post' enctype="multipart/form-data" data-parsley-validate>
		<div class='form-group form-float'>
			<div class='form-line'>
				<input name='filename' value='' id='filename' class='form-control' type='file' onchange="previewImage(event)" />
			</div>
			<img id="output_image" style="width: 100%" />
		</div>

		<button type="submit" class="btn btn-primary" id="saveItemImage" style="float: right;">Save</button>

	</form>
</div>

<!-- item specifications -->
<div id='specDialog' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#specBar' modal='true'>
	<table id="itemSpecification" class="easyui-datagrid" style="width:100%;height:auto" url="../speckeys/viewall/" idField="itemid" pagination="true" iconCls="icon-save">
		<thead>
			<tr>
				<th field="ck" checkbox="true"></th>
				<th field='id' width='90'>id</th>
				<th field='specText'>specText</th>
			</tr>
		</thead>
	</table>
	<!-- edit this to handle save options -->
	<div id='specBar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm saveSpec"><i class="fa fa-plus-circle"></i>Save</a>
		<a href="#" class="btn btn-link"><i class="fa fa-pencil"></i>Cancel</a>
		<!-- <a href="#" class="btn btn-link" onclick="deletespeckey()"><i class="fa fa-times-circle"></i>Delete</a> -->
	</div>
</div>