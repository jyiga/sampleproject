
<div id='dlgpageresource' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#pageresourcebutton' modal='true' >
	<form id='frmpageresource' name='frmpageresource' method='post' data-parsley-validate>

	<div class='col-lg-12'>	
		
		<div class='form-group form-float'>
			<label class='form-label'>Type</label>
				<div class='form-line'>
				<input id='resourceType' name='resourceType' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getlist/resType',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
				</div>
		</div>
	</div>
	<div class='col-lg-12'>
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
	</form>
</div>
<div id="pageresourcebutton">
	<a href="#" class="btn btn-primary" onclick="savepageresource()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgpageresource').dialog('close')"><i class="fa fa-times"></i>Close</a>
	</div>