<div class='col-lg-12'>
	<table id='dgorderitem' title='Manage orderitem' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='orderId' width='90'>Order No</th>
				<th field='itemId' width='90'>itemId</th>
				<th field='qty' width='90'>Quantity</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="neworderitem()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editorderitem()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deleteorderitem()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>