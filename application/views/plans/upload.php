<div class="row clearfix">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<div class="card">
	<div class="header">
	<h2>
		Creatte, Edit and Submit Plan.
	</h2>
	<ul class="header-dropdown m-r--5">
	<a href="#" class="btn btn-primary" onclick="savePlanPic()">Save</a>
		<li class="dropdown">
			<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
				<i class="material-icons">more_vert</i>
			</a>
		</li>
	</ul>
	</div>
	<div class="body">
	<!-- Nav tabs -->
	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active">
			<a href="#home_with_icon_title" data-toggle="tab">
				<i class="material-icons">home</i> Plan Details
			</a>
		</li>
		<li role="presentation">
			<a href="#profile_with_icon_title" data-toggle="tab">
				<i class="material-icons">view_quilt</i> Room
			</a>
		</li>
		<li role="presentation">
			<a href="#messages_with_icon_title" data-toggle="tab">
				<i class="material-icons">attach_money</i> Bill Quality
			</a>
		</li>
		
	</ul>
		<div class="tab-content">
			<div role="tabpanel" class="tab-pane fade in active" id="home_with_icon_title">
				<b>Plan Details</b>
				
				<form id='frmplan' name='frmplan' method='post'>
					<div class="row clearfix">
						<div class="col-lg-6">
							<div class='form-group form-float'>
								<label class='form-label'>Style</label>
								<div class='form-line'>
										<select id='styleId' name='styleId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../planstyles/viewcombobox',textField:'styleName',valueField:'id',panelWidth:'450',panelHeight:'auto'"></select>
								</div>
							</div>
							<div class='form-group form-float'>
								<label class='form-label'>plan Type.</label>
								<div class='form-line'>
										<select id='planTypeId' name='planTypeId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../plantypes/viewcombobox',textField:'planTypeName',valueField:'id',panelWidth:'450',panelHeight:'auto'"></select>
								</div>
							</div>
						
							<div class='form-group form-float'>
								<label class='form-label'>Sqm/Ft</label>
								<div class='form-line'>
										<input name='sqm' value='' id='sqm' class='form-control' type='text' />
								</div>
							</div>
							<div class='form-group form-float'>
								<label class='form-label'>Description</label>
								<div class='form-line'>
									
										<textarea name='planDescription' id='planDescription' class='form-control'></textarea>
								</div>
						
							</div>	
						</div>
						<div class="col-lg-6">
							<div id="aniimated-thumbnials" class="list-unstyled row clearfix">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div style="position:absolute;top:0;width:100; padding:2px; margin:5px;"><input type="file" id="mainImg" name="mainImg" 
							size="chars" style="display: block;visibility: hidden;width: 0;height: 0;" onchange="readURL(this,'#pic1');"><a href='#' id='btnMainImg'><i class="material-icons">add_circle</i></a></div>
									<img id='pic1' class="img-responsive thumbnail" style="width:100%; height:400px;" src="../public/images/image-gallery/placeholder.png">
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
							<div style="position:absolute;top:0;width:100; padding:2px; margin:5px;"><input type="file" id="mainImg2" name="mainImg2" 
							size="chars" style="display: block;visibility: hidden;width: 0;height: 0;" onchange="readURL(this,'#pic2');"><a href='#' id='btnMainImg2'><i class="material-icons">add_circle</i></a></div>
									<img id='pic2' class="img-responsive thumbnail" src="../public/images/image-gallery/placeholder.png">
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
							<div style="position:absolute;top:0;width:100; padding:2px; margin:5px;"><input type="file" id="mainImg3" name="mainImg" 
							size="chars" style="display: block;visibility: hidden;width: 0;height: 0;" onchange="readURL(this,'#pic3');"><a href='#' id='btnMainImg3'><i class="material-icons">add_circle</i></div>
									<img id='pic3' class="img-responsive thumbnail" src="../public/images/image-gallery/placeholder.png">
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
							<div style="position:absolute;top:0;width:100; padding:2px; margin:5px;"><input type="file" id="mainImg4" name="mainImg" 
							size="chars" style="display: block;visibility: hidden;width: 0;height: 0;" onchange="readURL(this,'#pic4');"><a href='#' id='btnMainImg4'><i class="material-icons">add_circle</i>
							</div>
									<img id='pic4' class="img-responsive thumbnail" src="../public/images/image-gallery/placeholder.png">
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
							<div style="position:absolute;top:0;width:100; padding:2px; margin:5px;"><input type="file" id="mainImg5" name="mainImg" 
							size="chars" style="display: block;visibility: hidden;width: 0;height: 0;" onchange="readURL(this,'#pic5');"><a href='#' id='btnMainImg5'><i class="material-icons">add_circle</i></div>
									<img id='pic5'  class="img-responsive thumbnail" src="../public/images/image-gallery/placeholder.png">
							</div>

							</div>
						</div>
					</div>

				</form>
				
			</div>
			<div role="tabpanel" class="tab-pane fade" id="profile_with_icon_title">
				<b>Profile Content</b>
				<p>
					Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
					Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
					pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
					sadipscing mel.
				</p>
			</div>
			<div role="tabpanel" class="tab-pane fade" id="messages_with_icon_title">
				<b>Message Content</b>
				<p>
					Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
					Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
					pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
					sadipscing mel.
				</p>
			</div>
		
		</div>

	</div>
	</div>
	</div>
</div>