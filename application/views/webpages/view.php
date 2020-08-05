<div class='col-lg-12'>
	<table id='dgwebpage' title='Manage Pages' class='easyui-treegrid' data-options="url:'viewall',idField:'id',treeField:'namepge'" style='height:auto; width:100%; '  pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='namepge' width='90'>Page Name</th>
				<!--<th field='parentId' width='90'>parentId</th>-->
				<th field='orderIndex' width='90'>Position Index</th>
				<th field='showPge' width='90'>showPge</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newwebpage()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editwebpage()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletewebpage()"><i class="fa fa-times-circle"></i>Delete</a>
		<a href="#" class="btn btn-link" onclick="previewpage()"><i class="fa fa-file-o"></i>Preview</a>
		<a href="#" class="btn btn-link" onclick="manageContentpage()"><i class="fa fa-file-o"></i>Manage Content</a>
	</div>
</div>