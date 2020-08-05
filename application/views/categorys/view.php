<div class='col-lg-12'>
	<table id='dgcategory' title='Manage Category' class='easyui-datagrid' style='height:auto; width:100%; ' striped='true' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
			<tr>
				
				<th field='categoryName' width='90'>Category Name</th>
				<th field='parentId' width='90'>Main Category</th>
				<th field='fileName' width='90' data-options="formatter:showImage">Image</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newcategory()"><i class="fa fa-plus-circle"></i>&nbsp&nbspAdd</a>
		<a href="#" class="btn btn-link" onclick="editcategory()"><i class="fa fa-pencil"></i>&nbsp&nbspEdit</a>
		<a href="#" class="btn btn-link" onclick="deletecategory()"><i class="fa fa-times-circle"></i>&nbsp&nbspDelete</a>
	</div>
</div>