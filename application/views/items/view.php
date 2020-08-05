
		<table id='dgitem' title='Manage Item' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' nowrap='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
			<thead>

				<tr>
					<th field='itemName' width='90'>Item Name</th>
					<th field='itemDescription' width='90'>Item Description</th>
					<th field='amount' width='90'>Amount</th>
					<th field='uom' width='90'>@</th>
					<th field='creationDate' width='90'>Creation Date</th>
					<th field='ModifiedDate' width='90'>Modified Date</th>
					
				</tr>
			</thead>
		</table>
		<div id='toolbar'>
			<a href="#" class="btn btn-primary btn-sm" onclick="newitem()"><i class="fa fa-plus-circle">&nbsp&nbsp</i>Add</a>
			<a href="#" class="btn btn-link" onclick="edititem()"><i class="fa fa-pencil"></i>&nbsp&nbspEdit</a>
			<a href="#" class="btn btn-link" onclick="deleteitem()"><i class="fa fa-times-circle"></i>&nbsp&nbspDelete</a>
		</div>
	
	
