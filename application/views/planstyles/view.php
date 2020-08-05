<div class='col-lg-12'>
	<table id='dgplanstyle' title='Manage Plan Style' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='styleName' width='90'>Plan Style</th>
				<th field='isActive' width='90'>Status</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style='padding:5px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newplanstyle()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editplanstyle()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deleteplanstyle()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>