<div class='col-lg-12'>
	<table id='dgtheme' title='Manage theme' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='themeName' width='90'>Theme Name</th>
				<th field='isDefault' width='90'>Is Default</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newtheme()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="edittheme()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="addResource()"><i class="fa fa-file-o"></i>Add Resource</a>
		<a href="#" class="btn btn-link" onclick="deletetheme()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>