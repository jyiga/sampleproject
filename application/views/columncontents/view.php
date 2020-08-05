<div class='col-lg-12'>
	<table id='dgcolumncontent' title='Manage columncontent' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='contextContent' width='90'>Content</th>
				<th field='columnId' width='90'>Col</th>
				<th field='creationDate' width='90'>Creation Date</th>
				<th field='modificationDate' width='90'>Modification Date</th>
				<th field='isActive' width='90'>Status</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newcolumncontent()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editcolumncontent()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletecolumncontent()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>