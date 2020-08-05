<div class='col-lg-12'>
	<table id='dgpageresource' title='Manage pageresource' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='resourcepath' width='90'>Image File</th>
				<th field='resourceType' width='90'>Type</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newpageresource()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editpageresource()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletepageresource()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>