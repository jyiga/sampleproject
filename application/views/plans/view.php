<div class='col-lg-12'>
	<table id='dgplan' title='Manage plan' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>No</th>
				<th field='userId' width='90'>Architect ID</th>
				<th field='sqm' width='90'>Sqm</th>
				<th field='planDescription' width='90'>Description</th>
				<th field='planTypeId' width='90'>Plan Type</th>
				<th field='creationDate' width='90'>Creation Date</th>
				<th field='modificationDate' width='90'>modificationDate</th>
				<th field='styleId' width='90'>Styles</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style='padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newplan()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editplan()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deleteplan()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>