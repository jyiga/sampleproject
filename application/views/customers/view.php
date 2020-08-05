<div class='col-lg-12'>
	<table id='dgcustomer' title='Manage customer' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='firstName' width='90'>First Name</th>
				<th field='lastName' width='90'>last Name</th>
				<th field='contact' width='90'>Contact</th>
				<th field='email' width='90'>Email</th>
				<th field='creationDate' width='90'>Creation Date</th>
				<th field='isActive' width='90'>Status</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newcustomer()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editcustomer()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletecustomer()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>