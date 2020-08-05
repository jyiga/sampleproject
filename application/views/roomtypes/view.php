<div class='col-lg-12'>
	<table id='dgroomtype' title='Manage roomtype' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>RecordNo</th>
				<th field='roomTypeName' width='90'>Room</th>
				<th field='dashboard' width='90'>Show on Front page</th>
				<th field='creationDate' width='90'>creationDate</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style='padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newroomtype()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editroomtype()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deleteroomtype()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>