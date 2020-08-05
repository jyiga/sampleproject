<div class='col-lg-12'>
	<table id='dgcustomerdeliverypoint' title='Manage customerdeliverypoint' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='customerId' width='90'>Customer</th>
				<th field='placeName' width='90'>Place Name</th>
				<th field='lat' width='90'>lat</th>
				<th field='lng' width='90'>lng</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newcustomerdeliverypoint()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editcustomerdeliverypoint()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletecustomerdeliverypoint()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>