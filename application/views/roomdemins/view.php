<div class='col-lg-12'>
	<table id='dgroomdemin' title='Manage Room Dimenison' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>       	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='deminId' width='90'>Dimension ID</th>
				<th field='roomId' width='90'>Room ID</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style='padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newroomdemin()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editroomdemin()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deleteroomdemin()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>