
<div id='dlgwebpage' class='easyui-dialog' closed='true' style='width:800px; padding:15px;' toolbar='#webpagebutton' modal='true' >
	<form id='frmwebpage' name='frmwebpage' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
	<label class='form-label'>Page Name</label>
		<div class='form-line'>
			
				<input name='namepge' value='' id='namepge' class='form-control' type='text' Required />
		</div>
	</div>	
	
	<div class='form-group form-float'>
		<label class='form-label'>Position Index</label>
		<div class='form-line'>
			
				<input name='orderIndex' value='' id='orderIndex' class='form-control' type='text' Required />
		</div>
	</div>	
	<div class='form-group form-float'>
		<label class='form-label'>Show Page</label>
				<div class='form-line'>
			<input id='showPge' name='showPge' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../listhandles/getlist/isActive',valueField:'idVal',textField:'textVal',panelWidth:'450',panelHeight:'auto'"  Required />
		</div>
	</div>
	<div class='form-group form-float'>
		<label class='form-label'>Main Page</label>
				<div class='form-line'>
			<input id='parentId' name='parentId' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'viewcombobox',valueField:'id',textField:'namepge',panelWidth:'450',panelHeight:'auto'"  />
		</div>
	</div>	
	</div>
	</form>
</div>
<div id="webpagebutton">
	<a href="#" class="btn btn-primary" onclick="savewebpage()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgwebpage').dialog('close')"><i class="fa fa-times"></i>Close</a>
</div>
<div id='dlgwebsection' class='easyui-dialog' closed='true' style='width:90%; padding:15px;' toolbar='#websectionbutton' modal='true' >
	<div class="col-lg-8">
		<div class='form-group form-float'>
			<label class='form-label'>Page</label>
			<div class='form-line'>
				<input name='pageName' value='' id='pageName' class='form-control' type='text' readonly />
			</div>
		</div>
		<div class='form-group form-float'>
		<label class='form-label'>Article</label><br>
			<a href="#" class="btn btn-primary" onclick="saveColContain()" style='margin:5px;'><i class="fa fa-save"></i>Post</a>
			<textarea id="columnContent"></textarea>
		</div>
	</div>
	<div class="col-lg-4">
		<div class='form-group form-float'>
			<label class='form-label'>Section</label>
			<div class='form-line'>
			<input id='sectionx' name='sectionx' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../webpagesections/viewcombobox/0',valueField:'id',textField:'sectionName',panelWidth:'450',panelHeight:'auto',onSelect:function(rec){ 
				var urlPick='../webpagesections/getPropertgridView/'+rec.id
				$('#pgSection').propertygrid('load',urlPick)
				$('#sectionColumn').combobox('reload','../sectioncolumns/viewcombobox/'+rec.id);
				
				},icons:[{
						iconCls:'icon-add',handler: function(e){
					//the dialog
					newwebpagesection()
				}
					}]"  />
			</div>
		</div>
		<div class='form-group'>
			<table id="pgSection" class="easyui-propertygrid" style="width:100%" data-options="
					url:'../webpagesections/getPropertgridView/0',
					method:'get',
					showGroup:true,
					scrollbarSize:0
				" toolbar='#toolbarSectionPg'>
			</table>
			<div id='toolbarSectionPg' >
				<a href="#" class="btn btn-link btn-sm" onclick="getSectionSaveChange()"><i class="fa fa-save"></i></a>
			</div>
		</div>
		<div class='form-group form-float'>
			<label class='form-label'>Column</label>
			<div class='form-line'>
			<input id='sectionColumn' name='sectionColumn' class='easyui-combobox form-control' style='height:30px; width:100%; padding-top:5px;'  data-options="url:'../sectioncolumns/viewcombobox/0',valueField:'id',textField:'columnNm',panelWidth:'450',panelHeight:'auto',onSelect:function(rec){
				getContent(rec.id);
				var urlPick2='../sectioncolumns/getPropertgridView/'+rec.id
				$('#pgSectionColumn').propertygrid('load',urlPick2)
			}" />
			</div>
		</div>
		<div class='form-group'>
			<table id="pgSectionColumn" class="easyui-propertygrid" style="width:100%" data-options="
					url:'../sectioncolumns/getPropertgridView/0',
					method:'get',
					showGroup:true,
					scrollbarSize:0
				" toolbar='#toolbarSection'>
			</table>
			<div id='toolbarSection'>
				<a href="#" class="btn btn-link btn-sm" onclick="getsaveChange()"><i class="fa fa-save"></i></a>
			</div>
		</div>
	</div>

</div>
<div id="websectionbutton">
	<a href="#" class="btn btn-primary" onclick="savewebpage()"><i class="fa fa-save"></i>Save all changes</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgwebpage').dialog('close')"><i class="fa fa-times"></i>Close</a>
</div>
<!-- Section Dialog -->

<div id='dlgwebpagesection' class='easyui-dialog' closed='true' style='width:400px; padding:15px;' toolbar='#webpagesectionbutton' modal='true' >
	<form id='frmwebpagesection' name='frmwebpagesection' method='post' data-parsley-validate>

<div class='col-lg-12'>	
	<div class='form-group form-float'>
		<label class='form-label'>Section Name</label>
				<div class='form-line'>
			<input name='sectionName' value='' id='sectionName' class='form-control' type='text' Required />
		</div>
	</div>	
	<div class='form-group form-float'>
		<label class='form-label'>Position</label>
				<div class='form-line'>
			<input name='positionIndex' value='' id='positionIndex' class='form-control' type='text' Required />
		</div>
	</div>	
	<div class='form-group form-float'>
		<label class='form-label'>Column</label>
				<div class='form-line'>
			<input name='columnNo' value='' id='columnNo' class='form-control' type='text' Required />
		</div>
	</div>
	</div>
	</form>
</div>
<div id="webpagesectionbutton">
	<a href="#" class="btn btn-primary" onclick="savewebpagesection()"><i class="fa fa-save"></i>Save</a>&nbsp;&nbsp;
	<a href="#" class="btn btn-primary" onclick="javascript:$('#dlgwebpagesection').dialog('close')"><i class="fa fa-times"></i>Close</a>
</div>