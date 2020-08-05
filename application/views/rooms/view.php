<div class='col-lg-12'>
	<table id='dgroom' title='Manage room' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>No</th>
				<th field='planId' width='90'>Plan ID</th>
				<th field='roomTypeId' width='90'>Room Type</th>
				<th field='roomDescription' width='90'>roomDescription</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style='padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newroom()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editroom()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deleteroom()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>