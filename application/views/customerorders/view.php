<div class='col-lg-12'>
	<table id='dgcustomerorder' title='Manage Customer Order' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>      	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='shipTo' width='90'>Ship To</th>
				<th field='orderDate' width='90'>Order Date</th>
				<th field='companyName' width='90'>Customer</th>
				<th field='email' width='90'>Email</th>
				<th field='email' width='90'>Contact</th>
				<th field='status' width='90'>Status</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="editcustomerorder()"><i class="fa fa-pencil"></i>&nbsp;Update Order Status Customer</a>
		
	</div>
</div>