<div class='col-lg-12'>
	<table id='dgplanpge' title='Manage planpge' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='viewId' width='90'>Page of</th>
				<th field='imageName' width='90'>File Name</th>
				<th field='creationDate' width='90'>Creation Date</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newplanpge()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editplanpge()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deleteplanpge()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>