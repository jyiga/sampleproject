<div class='col-lg-12'>
	<table id='dgthemefile' title='Manage themefile' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='file' width='90'>Upload File</th>
				<th field='fileType' width='90'>Type</th>
				<th field='extractable' width='90'>Extract</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newthemefile()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editthemefile()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletethemefile()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>