<div class='col-lg-12'>
	<table id='dgthemestyle' title='Manage themestyle' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='attName' width='90'>Attribute Name</th>
				<th field='attType' width='90'>Attribute Type</th>
				<th field='themeId' width='90'>Theme Id</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newthemestyle()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editthemestyle()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletethemestyle()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>