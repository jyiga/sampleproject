<div class='col-lg-12'>
	<table id='dgverifycode' title='Manage verifycode' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='userId' width='90'>userId</th>
				<th field='code' width='90'>code</th>
				<th field='isActive' width='90'>isActive</th>
				<th field='creationDate' width='90'>creationDate</th>
				<th field='verificationDate' width='90'>verificationDate</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar'>\n\t\t<a href="#" class="btn btn-primary btn-sm" onclick="newverifycode()"><i class="fa fa-plus-circle"></i>Add</a>\n\t\t<a href="#" class="btn btn-link" onclick="editverifycode()"><i class="fa fa-pencil"></i>Edit</a>
        \n\t\t<a href="#" class="btn btn-link" onclick="deleteverifycode()"><i class="fa fa-times-circle"></i>Delete</a>\n\t</div>\n</div>