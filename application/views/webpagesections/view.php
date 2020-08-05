<div class='col-lg-12'>
	<table id='dgwebpagesection' title='Manage webpagesection' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='sectionName' width='90'>Section Name</th>
				<th field='positionIndex' width='90'>Position</th>
				<th field='columnNo' width='90'>Column</th>
				<th field='pgeId' width='90'>Page</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newwebpagesection()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editwebpagesection()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletewebpagesection()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>