<div class='col-lg-12'>
	<table id='dgclothitem' title='Manage clothitem' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>No.</th>
				<th field='itemName' width='90'>Item Name</th>
				<th field='itemDescription' width='90'>Item Description</th>
				<th field='cost' width='90'>Cost</th>
				<th field='date' width='90'>Date</th>
				<th field='categoryName' width='90'>Category</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar'><a href="#" class="btn btn-primary btn-sm" onclick="newclothitem()"><i class="fa fa-plus-circle"></i>Add</a><a href="#" class="btn btn-link" onclick="editclothitem()"><i class="fa fa-pencil"></i>Edit</a>
        <a href="#" class="btn btn-link" onclick="deleteclothitem()"><i class="fa fa-times-circle"></i>Delete</a></div></div>