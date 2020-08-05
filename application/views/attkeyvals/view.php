<div class='col-lg-12'>
	<table id='dgattkeyval' title='Manage attkeyval' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='guiToolId' width='90'>guiToolId</th>
				<th field='attKeyId' width='90'>attKeyId</th>
				<th field='attVal' width='90'>attVal</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newattkeyval()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editattkeyval()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deleteattkeyval()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>